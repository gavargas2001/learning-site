import { useState } from 'react';
import CourseCard from '../components/CourseCard';

const courses = [
  {
    thumbnail: 'https://via.placeholder.com/150',
    category: 'Web Development',
    title: 'Learn React.js',
    author: 'John Doe',
  },
  {
    thumbnail: 'https://via.placeholder.com/150',
    category: 'Data Science',
    title: 'Introduction to Python',
    author: 'Jane Doe',
  },
  // Add more courses as needed
];

export default function Home() {
  const [activeMenu, setActiveMenu] = useState(-1);

  return (
    <main className="flex flex-col items-center justify-center p-24 space-y-6">
      {courses.map((course, index) => (
        <CourseCard key={index} {...course} id={index} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      ))}
    </main>
  );
}