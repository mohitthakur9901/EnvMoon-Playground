import { Button } from "../components/Button"


const Landing = () => {
  return (
 

    
    <div className="flex flex-col items-center justify-center text-center p-8">
    <h1 className="text-4xl font-bold mb-6">Welcome to EnvMoon Playground</h1>
    <p className="text-lg mb-6">
      A browser-based IDE with support for more than 10 languages.
      Create, compile, and run your code effortlessly.
    </p>
    <div className="mb-6">
      <img 
        src="https://images.unsplash.com/photo-1645536908932-652fbd998029?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Coding illustration" 
        className="rounded-lg shadow-lg"
      />
    </div>
    <div className="flex space-x-4">
      <Button onClick={() => {}} className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-500">
        Get Started
      </Button>
      <Button onClick={() => {}}  className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-500">
        Go to Playground
      </Button>
    </div>
  </div>

  )
}

export default Landing