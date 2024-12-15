import React, { useState, useEffect, useRef } from "react";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0); 
  const carouselRef = useRef(null);

  // Array of testimonials
  const testimonials = [
    {
      name: "John Doe",
      feedback: "The branding services provided by this company completely transformed our business. From logo design to the development of our brand identity, they made sure every detail resonated with our target audience. Our customer engagement has increased significantly, and we feel confident about our brand’s positioning in the market.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8d4F3Lf3kbFIFSGu6BSqqThC9vsueKd7a_w&s",
    },
    {
      name: "Jane Smith",
      feedback: "I was struggling to define my brand, but after working with this team, the process became seamless. They not only helped with naming and logo design but also developed a comprehensive brand strategy. Their insights into market positioning and consumer preferences helped us connect with our audience more effectively.",
      image: "https://pbs.twimg.com/profile_images/1860738340997267456/SuHYaVUe_400x400.jpg",
    },
    {
      name: "Mike Johnson",
      feedback: "The professionalism and creativity of this branding service company exceeded our expectations. They delivered everything from our business's vision and mission statements to product packaging. Their attention to detail has helped us stand out in a competitive market, and we’ve seen an uptick in brand recognition.",
      image: "https://assets.mobileworldlive.com/wp-content/uploads/2015/10/16130048/Dorsey-iamge.png",
    },
    {
      name: "Sarah Williams",
      feedback: "The branding services provided by this company completely transformed our business. From logo design to the development of our brand identity, they made sure every detail resonated with our target audience. Our customer engagement has increased significantly, and we feel confident about our brand’s positioning in the market.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStBOpXLRdkrhmgAspWARrNLpz2wRwNDR9Il3INDG2Sipyr7r8CEaeeW9uZop7t5FFVSO8&usqp=CAU",
    },
    {
      name: "Chris Brown",
      feedback: "I was struggling to define my brand, but after working with this team, the process became seamless. They not only helped with naming and logo design but also developed a comprehensive brand strategy. Their insights into market positioning and consumer preferences helped us connect with our audience more effectively.",
      image: "https://shiftart.com/wp-content/uploads/2017/04/RC-Profile-Square.jpg",
    },
    {
      name: "Emma Watson",
      feedback: "The professionalism and creativity of this branding service company exceeded our expectations. They delivered everything from our business's vision and mission statements to product packaging. Their attention to detail has helped us stand out in a competitive market, and we’ve seen an uptick in brand recognition.",
      image: "https://pbs.twimg.com/profile_images/1860738340997267456/SuHYaVUe_400x400.jpg",
    },
  ];

  // Scroll to the card
  const scrollToIndex = (index) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.offsetWidth; // card width
      const scrollAmount = cardWidth * index; // scroll based on card width
      carouselRef.current.scrollLeft = scrollAmount;
    }
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        (prevIndex + 1) % testimonials.length
      ); // Loop back to the start
    }, 5000); 

    return () => clearInterval(interval); // Cleanup interval
  }, [testimonials.length]);

  // Scroll to the current index
  useEffect(() => {
    scrollToIndex(currentIndex);
  }, [currentIndex]);

  return (
    <div className="mt-[5rem] mb-[8rem] relative mx-auto max-w-screen-lg">
      {/* Heading */}
      <h2 className="text-center text-4xl font-semibold mb-[4rem] text-violet-600">Testimonials</h2>

      {/* Carousel */}
      <div
        ref={carouselRef}
        className="flex gap-[3rem] overflow-x-auto no-scrollbar scroll-smooth p-4"
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full md:w-1/2 p-8 bg-white rounded-lg shadow-lg "
          >
            <div className="flex flex-col items-center text-center">
              <img
                className="w-40 h-40 rounded-full mb-4"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <h3 className="text-violet-600 text-lg font-semibold">{testimonial.name}</h3>
              <p className="mt-2 text-sm text-gray-500">
                "{testimonial.feedback}"
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute top-[35rem] bottom-4 left-0 right-0 flex justify-center gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)} 
            className={`w-3 h-3 rounded-full ${
              index === currentIndex
                ? "bg-violet-400"
                : "bg-gray-400 opacity-50"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
