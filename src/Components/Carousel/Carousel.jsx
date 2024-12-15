import React, { useRef } from 'react';

const Carousel = () => {
  const carouselRef = useRef(null);

  // Array of image URLs
  const images = [
    "https://plus.unsplash.com/premium_photo-1684225764999-3597a8da10ab?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGlnaXRhbCUyMG1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    "https://w0.peakpx.com/wallpaper/660/80/HD-wallpaper-2-seo-digital-marketing.jpg",
    "https://c0.wallpaperflare.com/preview/815/390/363/advertising-brand-branding-coffee.jpg",
    "https://www.semantic.co.in/img/brsec.jpg",
    "https://cdn.prod.website-files.com/62a9e41d28a7ab25849bce9c/62fcab0db38819bef2500673_Is%20image%20processing%20part%20of%20machine%20learning.jpg",
  ];

  const handleScroll = (direction) => {
    const scrollAmount = 1500; 
    if (carouselRef.current) {
      if (direction === 'left') {
        carouselRef.current.scrollLeft -= scrollAmount;
      } else {
        carouselRef.current.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <div>
      <div className="relative px-6 flex items-center justify-center w-full dark:text-gray-900">
        {/* Left Button */}
        <button
          aria-label="Slide back"
          type="button"
          onClick={() => handleScroll('left')}
          className="absolute left-0 z-30 p-2 ml-10 bg-opacity-50 rounded-full focus:outline-none focus:dark:bg-gray-600 focus:ring-2 focus:ring-offset-2 focus:dark:ring-gray-600 dark:bg-gray-50"
        >
          <svg
            width="8"
            height="14"
            fill="none"
            viewBox="0 0 8 14"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
          >
            <path
              d="M7 1L1 7L7 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>

        {/* Carousel */}
        <div
          ref={carouselRef}
          className="flex items-center justify-start w-[1500px] h-full gap-6 mx-auto overflow-auto lg:gap-8 no-scrollbar scroll-smooth"
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="relative flex flex-shrink-0 w-full sm:w-auto"
            >
              <img
                className="object-cover object-center dark:bg-gray-500 h-[500px] w-[1500px]"
                src={src}
                alt={`Image ${index + 1}`}
              />
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          aria-label="Slide forward"
          type="button"
          onClick={() => handleScroll('right')}
          className="absolute right-0 z-30 p-2 mr-10 bg-opacity-50 rounded-full focus:outline-none focus:dark:bg-gray-600 focus:ring-2 focus:ring-offset-2 focus:dark:ring-gray-600 dark:bg-gray-50"
        >
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
          >
            <path
              d="M1 1L7 7L1 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
