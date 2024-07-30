
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <div className="container mx-auto flex justify-center space-x-6">
        <a 
          href="https://github.com/your-username"
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-gray-400 transition duration-300"
        >
          <FaGithub size={24} />
        </a>
        <a 
          href="https://twitter.com/your-username"
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-gray-400 transition duration-300"
        >
          <FaTwitter size={24} />
        </a>
        <a 
          href="https://linkedin.com/in/your-username"
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-gray-400 transition duration-300"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
      <p className="mt-4 text-sm">
        &copy; {new Date().getFullYear()} EnvMoon. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

