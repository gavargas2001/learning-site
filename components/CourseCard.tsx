import React from 'react';

interface CourseCardProps {
  thumbnail: string;
  category: string;
  title: string;
  author: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ thumbnail, category, title, author }) => {
  return (
    <div className="flex items-center justify-between space-x-4 p-6 bg-white rounded-lg shadow-md w-full hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center space-x-4">
        <img className="w-1/4 h-32 object-cover rounded-lg" src={thumbnail} alt={title} />
        <div className="space-y-2">
          <p className="text-sm text-gray-500">{category}</p>
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          <p className="text-sm text-gray-400">By {author}</p>
        </div>
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">
        Bookmark
      </button>
    </div>
  );
};

export default CourseCard;