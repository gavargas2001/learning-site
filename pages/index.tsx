import { useState } from 'react';
import CourseCard from '../components/CourseCard';

const courses = [
  {
    thumbnail: '../public/images/leadership.jpg',
    category: 'Leadership',
    title: 'Team Leadership',
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
  {
    thumbnail: 'https://via.placeholder.com/150',
    category: 'Machine Learning',
    title: 'Deep Learning with TensorFlow',
    author: 'Alice Smith',
    rating: 3.7,
  },
  {
    thumbnail: 'https://via.placeholder.com/150',
    category: 'Web Development',
    title: 'Advanced CSS and Sass',
    author: 'John Doe',
    rating: 3.9,
  },
  {
    thumbnail: 'https://via.placeholder.com/150',
    category: 'Mobile Development',
    title: 'Mastering Swift and iOS',
    author: 'Alice Smith',
    rating: 3.5,
  },
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