// components/Header.js
import React from 'react';
import Image from 'next/image';
import GoatImage from '/Users/matthewrhoads/Developer/hufford-homestead/public/goatInHay.jpg';

const CTA = () => {
  return (
    <div className="container mx-auto min-h-1/3 bg-buff">
      <div className="flex items-center border p-4 rounded-lg shadow-md">
        <div className="w-1/3">
          <Image src={GoatImage} alt="Goats" className="w-full h-56 object-fit rounded-lg mb-4" />
        </div>
        <div className="w-2/3 pl-4">
          <h3 className="text-xl font-bold">About Our Goats</h3>
          <p className="text-gray-600">
            Here at our homestead, we take great pride in raising healthy, happy goats. Our goats are well-taken-care-of and provide us with high-quality milk and meat. They are free-range and have plenty of space to roam and graze on our lush pastures. We are committed to sustainable and ethical farming practices, ensuring the well-being of our animals and the quality of our products.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CTA;
