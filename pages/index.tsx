import React from 'react';
import { PROPERTYLISTINGSAMPLE } from '@/constants';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: "url('https://example.com/hero-bg.jpg')"  }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center p-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Find your favorite place here!</h1>
          <p className="text-lg md:text-xl">The best prices for over 2 million properties worldwide.</p>
        </div>
      </section>

      {/* Filter Pills */}
      <section className="py-6 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {["Top Villa", "Self Checkin", "Free Reschedule", "Pet Friendly", "Private Pool"].map((filter, index) => (
              <button
                key={index}
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-300 transition"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Property Listings */}
      <section className="py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {PROPERTYLISTINGSAMPLE.map((property, idx) => (
            <div key={idx} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={property.image} alt={property.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{property.name}</h2>
                <p className="text-gray-600">{property.address.city}, {property.address.country}</p>
                <div className="mt-2 flex justify-between">
                  <span className="text-blue-600 font-bold">${property.price}<span className="text-sm text-gray-500">/night</span></span>
                  <span className="flex items-center">
                    <span className="mr-1">★</span>
                    <span>{property.rating}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;