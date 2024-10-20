import './App.css';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      <Hero />
      <Projects />
    </>
  );
}

export default App;
