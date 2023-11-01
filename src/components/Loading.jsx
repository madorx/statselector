import React from 'react';
import { Blocks } from 'react-loader-spinner';

export const Loading = () => {
  return (
    <div className="w-full h-screen bg-[#0a192f]">
      <div className="flex flex-col justify-center items-center w-[100%] h-full">
        <Blocks
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
        />
      </div>
    </div>
  );
};
