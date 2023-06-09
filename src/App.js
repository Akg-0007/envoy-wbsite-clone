import './App.css';
import Figma from './asset/Figma';
import Frequent from './asset/Frequent';
import Footer from './asset/Footer';
import Landing from './asset/Landing';
import Plan from './asset/Plan';
import Sass from './asset/Sass';

function App() {
  return (
    <div className="App">
       <Landing></Landing>  
       <Figma></Figma> 
       <Plan></Plan> 
       <Frequent></Frequent> 
       <Footer></Footer>
       {/* <Sass/>   */}
    </div>
  );
}

export default App;
