import React from 'react';
import Egusi from '../img/egusi.jpeg';
import text from '../data/text';

const Card = () => {
  return (
    <div className="container mx-auto mt-8 p-4">
      <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-lg">
        <div className="p-4">
          <h1 className="text-2xl font-semibold">Egusi Soup</h1>
          <img
            src={Egusi}
            alt="Osho Egusi"
            className="w-full mt-4 rounded-lg"
          />
          <p className="text-gray-600 mt-2">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
