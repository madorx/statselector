import React from 'react';

export const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-6"
    >
      <form
        method="POST"
        action="getform code here"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8 text-center">
          <p className="text-4xl">
            <span className="font-bold contact text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-600 to-purple-400">
              Contact
            </span>
          </p>
          <p className="text-gray-400 py-4 font-mono">Submit the form below</p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2 font-mono font-bold"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6] font-mono font-bold"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2 font-mono font-bold"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="btn px-4 py-2 my-8 mx-auto flex items-center font-mono">
          Submit
        </button>
      </form>
    </div>
  );
};
