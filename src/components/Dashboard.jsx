import React, { useState, useRef, useEffect } from 'react';
import { getCurrentUser, logout } from '../appwrite/auth';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [user,setUser] = useState({});
  const sidebarRef = useRef(null);

  useEffect(()=>{
    const fetchUser = async () => {
      try {
        const user = await getCurrentUser();
        console.log(user);
        setUser(user);
        
        if (!user) {
          navigate('/login');
        }
      } catch (error) {
        console.error(error);
        navigate('/login');
      }
    };
    fetchUser();
  },[])
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    const res = logout();
    if (res) {
      navigate('/');
    }
  }

  // Close sidebar when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Clean up the event listener
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex relative">
      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`sidebar bg-gray-200 w-64 h-screen shadow-lg fixed inset-y-0 left-0 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:relative lg:shadow-none`}
      >
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800">Dashboard</h2>
          <ul className="mt-6">
            <li className="py-2 px-4 text-gray-700 hover:bg-gray-300"><a href="#">Home</a></li>
            <li className="py-2 px-4 text-gray-700 hover:bg-gray-300"><a href="#">Profile</a></li>
            <li className="py-2 px-4 text-gray-700 hover:bg-gray-300"><a href="#">Settings</a></li>
            <li className="py-2 px-4 text-gray-700 hover:bg-gray-300"><button onClick={handleLogout}>Logout</button></li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <nav className="bg-black text-white flex justify-between items-center p-4">
          <div className="lg:hidden">
            <button onClick={toggleSidebar} className="focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
          <h1 className="text-lg font-bold">Welcome,{user.name}</h1>
        </nav>

        <main className="p-6">
          <h2 className="text-2xl font-bold mb-4"> Overview</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center">
              <svg className="w-12 h-12 text-blue-500 mr-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
                <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm0 10a4 4 0 110-8 4 4 0 010 8z" />
              </svg>
              <p className="text-gray-700">You have 5 new notifications!</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;