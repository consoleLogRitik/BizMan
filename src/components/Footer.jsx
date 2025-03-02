const Footer = () => {
  return (
    <footer className="bg-black opacity-85 py-4 px-12 mt-auto">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-sm">&copy; 2025 BizMan. All rights reserved.</div>
        <ul className="flex gap-8">
          <li><a href="#" className="text-white hover:text-gray-400">Privacy Policy</a></li>
          <li><a href="#" className="text-white hover:text-gray-400">Terms of Service</a></li>
          <li><a href="#" className="text-white hover:text-gray-400">Contact Us</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;