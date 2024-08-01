import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Appbar = () => {
  return (
    <div className="flex justify-between border-b p-4">
      <Link to="/" className="text-lg flex flex-col justify-center">
        EnvMoon
      </Link>
      <div className="flex items-center justify-center space-x-6 pt-2">
        <h3 className="font-bold text-xl">Creator</h3>
        <a
          href="https://github.com/mohitthakur9901"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition duration-300"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://x.com/MOHIT__002"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition duration-300"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/mohit-thakur-648ab119b/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition duration-300"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </div>
  );
};
