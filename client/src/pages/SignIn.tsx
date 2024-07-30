import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Button } from '../components/Button';

const SignInPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-xl p-8 space-y-6 w-96">
        <h1 className="text-2xl font-bold mb-6">Sign In</h1>
        <Button 
          onClick={() => {}} 
          className="w-full h-12 flex items-center justify-center text-xl bg-gray-800 text-white rounded-md shadow-md hover:bg-gray-700 transition duration-200"
        >
          <FaGithub className="mr-2" />
          Sign in with GitHub
        </Button>
        <Button 
          onClick={() => {}} 
          className="w-full h-12 flex items-center justify-center text-xl bg-white text-black border border-gray-300 rounded-md shadow-md hover:bg-gray-100 transition duration-200"
        >
          <FcGoogle className="mr-2" />
          Sign in with Google
        </Button>
      </div>
    </div>
  )
}

export default SignInPage;
