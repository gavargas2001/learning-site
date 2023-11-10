import React from 'react';

interface CourseCardProps {
  thumbnail: string;
  category: string;
  title: string;
  author: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ thumbnail, category, title, author }) => {
  return (
    <div className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-md w-full">
      <img className="w-1/4 h-32 object-cover rounded-lg" src={thumbnail} alt={title} />
      <div className="space-y-2">
        <p className="text-sm text-gray-500">{category}</p>
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-400">By {author}</p>
      </div>
    </div>
  );
};

export default CourseCard;