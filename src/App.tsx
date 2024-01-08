import { styled } from 'styled-components';
import './App.css';
import Layout from './components/Layout';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';

function App() {
  return (
    <Layout>
      <Hero />
      <AboutSection />
    </Layout>
  );
}

// const Container = styled.div`
//   max-width: 1000px;
//   margin: 0 auto;
// `;

export default App;
