import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';

import Footer from './components/Footer/Footer';
import TableContent from './components/ClassList/TableContent';
function App() {
  return (
    <div className='bg-[#172227] font-[Inter] text-white'>
      <Navbar />
      <Hero />
      <TableContent />
      <Footer />
    </div>
  );
}

export default App;
