import React from 'react'

const Cards = () => {
  return (
    <div className='mx-auto px-[5rem] py-[7rem] flex justify-between items-center gap- flex-wrap'>
        <div className='p-2'>
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:scale-105 transition-transform duration-300">
      <img
        className="w-full h-48 object-cover"
        src="https://cdni.iconscout.com/illustration/premium/thumb/social-media-news-reporting-illustration-download-in-svg-png-gif-file-formats--man-male-reporter-website-pack-network-communication-illustrations-2407303.png"
        alt="Marketing"
      />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">Social Media</h2>
        <p className="text-gray-500 text-justify leading-tight ">It doesn’t matter if you run a small local shop or a big national company, Social media is an essential piece of your business marketing strategy. Social platforms help you connect with your customers, increase awareness about your brand, and boost your leads and sales. With more than three billion people around the world using Social Media every month, the users and engagement on major platforms just keep increasing. From choosing the right channels to figuring out your Content Strategy. </p>
      </div>
    </div>
    </div>

    <div className='p-2'>
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:scale-105 transition-transform duration-300">
      <img
        className="w-full h-48 object-cover"
        src="https://cdni.iconscout.com/illustration/premium/thumb/business-marketing-illustration-download-in-svg-png-gif-file-formats--advertiser-boy-campaign-cellphone-pack-illustrations-3092461.png?f=webp"
        alt="Marketing"
      />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">Advertising</h2>
        <p className="text-gray-500 text-justify leading-tight">
        Oh! Puhleeez Advertising and Branding Agency has remained at the cutting-edge of communication solutions for both Private and Public Sector at large. Having honed its Brand excellence over years, the Agency is presently armed with a handpicked pool of talents in Design, Copy and Strategy who are eager to fire for your Brands and Services across Print, Television, Digital, Events and Outdoor frontiers. We help you craft your message to speak to your public through passion.    
        </p>
      </div>
    </div>
    </div>

    <div className='p-2'>
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:scale-105 transition-transform duration-300">
      <img
        className="w-full h-48 object-cover"
        src="https://cdni.iconscout.com/illustration/premium/thumb/brand-marketing-illustration-download-in-svg-png-gif-file-formats--strategy-plan-team-business-pack-illustrations-4618472.png"
        alt="Marketing"
      />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">Branding</h2>
        <p className="text-gray-500 text-justify leading-tight">
        When we think of a “brand,” we think of the popular global brands. However, there is more to branding than spending millions of dollars to create global recognition for your brand like these large companies. In today’s connected world, people are bombarded by businesses, products, services, promotional messages and advertisements in just about every channel. In such a cluttered marketplace, how do you stand out and create a positive image of your business with the right audience? 
        </p>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Cards;