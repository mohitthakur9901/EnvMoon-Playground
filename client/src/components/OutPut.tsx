import React from 'react';

interface OutputDetailsProps {
  outputDetails: {
    status?: {
      description?: string;
    };
    memory?: string;
    time?: string;
  } | null;
}

const OutputDetails: React.FC<OutputDetailsProps> = ({ outputDetails }) => {
  return (
    <div className="metrics-container mt-4 flex flex-col space-y-3">
      <p className="text-sm">
        Status:{" "}
        <span className="font-semibold px-2 py-1 rounded-md bg-gray-100">
          {outputDetails?.status?.description || 'N/A'}
        </span>
      </p>
      <p className="text-sm">
        Memory:{" "}
        <span className="font-semibold px-2 py-1 rounded-md bg-gray-100">
          {outputDetails?.memory || 'N/A'}
        </span>
      </p>
      <p className="text-sm">
        Time:{" "}
        <span className="font-semibold px-2 py-1 rounded-md bg-gray-100">
          {outputDetails?.time || 'N/A'}
        </span>
      </p>
    </div>
  );
};

export default OutputDetails;
