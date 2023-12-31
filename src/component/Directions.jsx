import React, { useState } from 'react';
import cooking from '../data/cooking';

const Directions = () => {
  const [isOpenDir, setIsOpenDir] = useState(false);

  const openModalDir = () => {
    setIsOpenDir(prev => !prev);
  };

  const closeModalDir = () => {
    setIsOpenDir(false);
  };

  return (
    <>
      <button
        onClick={openModalDir}
        className="fixed bottom-8 right-4 bg-gradient-to-r from-cyan-500 to-green-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Show Cooking Directions
      </button>
      {isOpenDir && (
        <div className="fixed inset-0 z-50">
          {/* Transparent dark background */}
          <div className="fixed inset-0 bg-black opacity-50"></div>
          
          <div className="flex items-center justify-center h-screen">
            <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
              <div className="modal-content py-4 text-left px-6">
                <div className="flex justify-between items-center pb-3">
                  <p className="text-2xl font-semibold">Cooking Directions</p>
                  <button onClick={closeModalDir} className="text-red-500">
                    Close
                  </button>
                </div>
                <p className="text-gray-700">
                  {cooking.map((c, index) => (
                    <div key={index}>
                      <h2 className='font-bold'>{c.style}</h2>
                      <ol className="list-decimal list-inside">
                        {c.items.map((item, itemIndex) => (
                          <li key={itemIndex}>{item.name}</li>
                        ))}
                      </ol>
                    </div>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Directions;
