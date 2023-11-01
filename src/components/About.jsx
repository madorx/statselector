import React from 'react';

export const About = () => {
  return (
    <div name="about" className="w-full h-full bg-[#0a192f] text-gray-400">
      <div className="flex flex-col justify-center items-center w-[100%] h-full">
        <div className="max-width-[1000px]">
          <p className="text-4xl pb-8">
            <span className="font-bold about text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-600 to-purple-400">
              About
            </span>
          </p>
        </div>
        <div className="grid space-y-4 justify-center items-center text-center md:max-w-[50%] w-full font-mono p-6">
          <p className="text-justify">
            The Statistical Test Selector is a retro-themed app to help
            researchers and students choose a statisitcal test for data
            analysis. The application guides the user towards a statisitcal test
            based on the answers chosen. Before using the Selector, you should
            know whether your data is parametric or not. To do this you must
            conduct a test of normailty. If the data are normailly distributed
            then parametric should be selected. Otherwise, a nonparametric test
            should be considered.
          </p>
          <p className="text-justify">
            <span className="font-bold">Disclaimer:</span> Arcadius Games has
            worked to ensure the accuracy of the information it provides through
            its products and services. Arcadius Games cannot guarantee the
            accuracy of the information provided or any analysis based thereon.
            This app should not be used soley as guide to choosing a statisitcal
            test and is not a substitute for tradtional educational methods.
            This app is released 'as is' - without any warranty, responsibility
            or liability. Arcadius Games and its creator do not take any
            responsibility for anything you do using this application or for the
            information provided by this application nor anything you do with
            the information provided by this application.
          </p>
        </div>
      </div>
    </div>
  );
};
