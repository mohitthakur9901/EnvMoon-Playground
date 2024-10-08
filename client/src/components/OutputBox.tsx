import React from "react";

interface OutputDetailsProps {
  outputDetails: {
    status?: {
      id?: number;
      description?: string;
    };
    memory?: string;
    time?: string;
    compile_output?: string;
    stdout?: string;
    stderr?: string;
  } | null;
}

const OutputWindow: React.FC<OutputDetailsProps> = ({ outputDetails }) => {
  const getOutput = () => {
    const statusId = outputDetails?.status?.id;

    if (statusId === 6) {
      // Compilation error
      return (
        <pre className="px-2 py-1 font-normal text-xs text-red-500">
          {outputDetails?.compile_output ? atob(outputDetails.compile_output) : 'N/A'}
        </pre>
      );
    } else if (statusId === 3) {
      return (
        <pre className="px-2 py-1 font-normal text-xs text-green-500">
          {outputDetails?.stdout ? atob(outputDetails.stdout) : 'N/A'}
        </pre>
      );
    } else if (statusId === 5) {
      return (
        <pre className="px-2 py-1 font-normal text-xs text-red-500">
          Time Limit Exceeded
        </pre>
      );
    } else {
      return (
        <pre className="px-2 py-1 font-normal text-xs text-red-500">
          {outputDetails?.stderr ? atob(outputDetails.stderr) : 'N/A'}
        </pre>
      );
    }
  };

  return (
    <>
      <h1 className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 mb-2">
        Output
      </h1>
      <div className="w-full h-56 bg-[#1e293b] rounded-md text-white font-normal text-sm overflow-y-auto">
        {outputDetails ? getOutput() : 'No output available'}
      </div>
    </>
  );
};

export default OutputWindow;
