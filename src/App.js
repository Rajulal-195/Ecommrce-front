import './App.css';
import './index.css';
import { Route, Routes } from 'react-router-dom';
import Headers from './Headers';
import Home from './Home';
import Navbar from './Navbar';
import Contact from './Contact';
import Babys from './Babys';
import { Babyproduct } from './Baby';
import Mans from './Mans';
import { Manpro } from './Man';
import Footers from './Footers';
import About from './About';
import Errors from './Errors';
import Carousel from './Carousel';

function App() {
  let homedata = Manpro.concat(Babyproduct);
  console.log('home datais ', homedata);
  return (
    <>

      <Headers />
      
      <Navbar />
      <Carousel/> 
      <div className='container'>

      <Routes>
        <Route path='/*' element={< Errors />} />
        <Route path='/' element={
          homedata.map((e, i) => (
            <Home data1={e} key={i} />
            ))
          } />
        <Route path='/footer' element={<Footers />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/Baby' element={
          Babyproduct.map((e, i) => (
            <Babys data1={e} key={i} />
            ))} />
        <Route path='/Mans' element={
          Manpro.map((e, i) => (
            <Mans data1={e} key={i} />
            ))
          } />


      </Routes>
          </div>
      <Footers />
    </>
  );
}

export default App;
