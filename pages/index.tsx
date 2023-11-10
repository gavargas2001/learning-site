import { useState } from 'react';
import CourseCard from '../components/CourseCard';

const courses = [
  {
    thumbnail: 'https://via.placeholder.com/150',
    category: 'Web Development',
    title: 'Learn React.js',
    author: 'John Doe',
    rating: 4.5,
  },
  {
    thumbnail: 'https://via.placeholder.com/150',
    category: 'Data Science',
    title: 'Introduction to Python',
    author: 'Jane Doe',
    rating: 4.0,
  },
  // Add more courses as needed
];

export default function Home() {
  const [activeMenu, setActiveMenu] = useState(-1);
  const [sortType, setSortType] = useState('rating');

  const sortedCourses = [...courses].sort((a, b) => {
    if (sortType === 'rating') {
      return b.rating - a.rating;
    } else if (sortType === 'alphabetical') {
      return a.title.localeCompare(b.title);
    }
    return 0; // Add a default return value
  });

  return (
    <main className="flex flex-col items-center justify-center p-24 space-y-6">
      <div className="self-end">
        <label htmlFor="sort" className="mr-2">Sort By:</label>
        <select id="sort" value={sortType} onChange={(e) => setSortType(e.target.value)} className="border rounded p-1">
          <option value="rating">Rating</option>
          <option value="alphabetical">Alphabetical Order</option>
        </select>
      </div>
      {sortedCourses.map((course, index) => (
        <CourseCard key={index} {...course} id={index} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      ))}
    </main>
  );
}