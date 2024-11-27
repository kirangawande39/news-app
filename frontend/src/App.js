// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './pages/Navbar';
import Signin from './pages/Signin';
import News from './pages/News';
import LoadingBar from 'react-top-loading-bar'


import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Hero from './pages/HeroSection';


function App(props) {

  const [selectedCountry, setSelectedCountry] = useState('in');

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
  };


  let country='us'
  let pagesize=21 
  let catagery='General'
  console.log(props.con)

  let [progress,setProgress]=useState(15)
  return (
    <div>
      <Router>
      <LoadingBar
            height={3}
            color='#f11946'
            progress={progress}
            
          />
        <Navbar  selectedCountry={selectedCountry} onCountryChange={handleCountryChange} />
       <Hero/>
        <Routes>
          <Route exact path='/' element={<News key="general"  setProgress={setProgress}catagery='General'  pageSize={pagesize}  category="general" country={country}/>} />
          <Route exact path='/business' element={<News key="business"  setProgress={setProgress}catagery='Business'  pageSize={pagesize}  category="business"country={country} />} />
          <Route exact path='/entertainment' element={<News key="entertainment" setProgress={setProgress} catagery='Entertainment'  pageSize={pagesize}  category="entertainment" country={country}/>} />
          <Route exact path='/sports' element={<News key="sports"  setProgress={setProgress}catagery='Sports'  pageSize={pagesize}  category="sports" country={country}/>} />
          <Route exact path='/health' element={<News key="health"  setProgress={setProgress}catagery='Health'  pageSize={pagesize}  category="health" country={country}/>} />
          <Route exact path='/science' element={<News key="science"  setProgress={setProgress}catagery='Science'  pageSize={pagesize}  category="science" country={country}/>} />
          <Route exact path='/technology' element={<News key="technology"  setProgress={setProgress}catagery='Technology' pageSize={pagesize}   category="technology" country={country}/>} />
        </Routes>
       
      </Router>
    </div>
  );
}

export default App;
