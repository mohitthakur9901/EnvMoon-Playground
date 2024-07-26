
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Button } from '../components/Button';


const SignInPage = () => {
  return (
    <div className='flex item-center justify-center py-40'>
      <div className="flex flex-col items-center justify-center h-96 w-1/2 bg-gray-200 rounded-xl">
        <Button onClick={() => {}} className='w-1/4 h-12 flex items-center justify-center text-2xl'>
          <FaGithub />
        </Button>
        <Button onClick={() => {}} className='w-1/4 h-12 flex items-center justify-center text-2xl'>
          <FcGoogle/>
        </Button>
      </div>
    </div>
  )
}

export default SignInPage