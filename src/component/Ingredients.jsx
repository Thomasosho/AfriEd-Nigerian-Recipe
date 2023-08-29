import React, { useState } from 'react';
import meat from '../data/meat';

const Ingredients = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(prev => !prev);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={openModal}
        className="fixed bottom-20 right-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Show Ingredients
      </button>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
            <div className="modal-content py-4 text-left px-6">
              <div className="flex justify-between items-center pb-3">
                <p className="text-2xl font-semibold">Ingredients</p>
                <button onClick={closeModal} className="text-red-500">
                  Close
                </button>
              </div>
              <p className="text-gray-700">
                {meat.map((m, index) => (
                  <div key={index}>
                    <h2 className='font-bold'>{m.ingredient}</h2>
                    <ol className="list-decimal list-inside">
                      {m.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item.name}</li>
                      ))}
                    </ol>
                  </div>
                ))}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Ingredients;
