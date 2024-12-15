import React from 'react';
import './Banner.css'; // Import the CSS file for animations

const Banner = () => {
  return (
    <div>
      <section className="bg-violet-400 text-white px-[5rem] mt-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-violet-700 animate-background"></div>
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between relative z-10">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left animate-content">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl text-white">
              WE HELP <br />
              <span className="text-violet-700"> NAMES </span>TURN INTO
              <span className="text-violet-700"> BRANDS </span>
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Oh! Puhleeez Branding Agency has been growing brands and businesses since 2019.
              <br className="hidden md:inline lg:hidden" /> We have been showcasing borderless creativity, innovations, and operations.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-violet-700 text-white hover:bg-gray-100 hover:text-violet-700">Leave a Reply</a>
              <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded border-gray-100 hover:bg-violet-700 hover:border-violet-700">Read More</a>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-10 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img src="https://cdni.iconscout.com/illustration/premium/thumb/file-management-system-illustration-download-in-svg-png-gif-formats--access-archive-backup-business-activity-pack-illustrations-3135998.png?f=webp" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Banner;