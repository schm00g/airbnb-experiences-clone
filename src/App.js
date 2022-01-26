import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';

export default function App() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Card
        img="katie-zaferes.png"
        rating="5.0"
        reviewCount="12"
        country="Peru"
        title="Life Lessons with Katie Zaferes"
        price="139"
      />
    </div>
  );
}
