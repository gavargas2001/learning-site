import React, { useState } from 'react';

interface CourseCardProps {
  thumbnail: string;
  category: string;
  title: string;
  author: string;
  id: number;
  rating: number;
  activeMenu: number;
  setActiveMenu: (id: number) => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ thumbnail, category, title, author, id, rating, activeMenu, setActiveMenu }) => {
  const showMenu = activeMenu === id;

  const toggleMenu = () => {
    setActiveMenu(showMenu ? -1 : id);
  };

  return (
    <div className="flex items-center justify-between space-x-4 p-6 bg-white rounded-lg shadow-md w-full hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center space-x-4">
        <a href="http://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <img className="w-32 h-32 object-cover rounded-lg" src={thumbnail} alt={title} />
        </a>
        <div className="space-y-2">
          <p className="text-sm text-gray-500">{category}</p>
          <a href="http://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-gray-800 hover:text-blue-500 transition-colors duration-300">
            {title}
          </a>
          <p className="text-sm text-gray-400">By {author}</p>
          <p className="text-sm text-gray-400">Rating: {rating}</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <div className="relative">
          <button onClick={toggleMenu} className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-500">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16" />
            </svg>
          </button>
          {showMenu && (
            <div className="absolute right-0 w-48 py-2 mt-2 bg-white rounded-md shadow-xl z-20">
              <a href="#" className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
                Add to Collection
              </a>
              <a href="#" className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
                Share
              </a>
            </div>
          )}
        </div>
        <button className="bg-white text-blue-800 border-blue-800 border px-3 py-1 rounded text-sm hover:bg-blue-800 hover:text-white transition-colors duration-300">
          Bookmark
        </button>
      </div>
    </div>
  );
};

export default CourseCard;