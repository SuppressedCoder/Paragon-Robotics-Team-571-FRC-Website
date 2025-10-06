import '../css/global.css';
import '../css/home.css'
import Slideshow from '../jsx/Slideshow.jsx';
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Slideshow /> {/* background */}
      <div>
        <h1 className="delay1 anim1 startHeader">
          FRC Team 571 Paragon Robotics
          <div style={{fontFamily: 'mont-heavy'}}>
          <span>We Build Futures for Students.</span>
          </div>
        </h1>

        <div className='homepageButtonContainer'>
          <Link className='button homepageButton delay2 anim1' to='/about'>Learn More</Link>
          <Link className='button homepageButton delay3 anim1' to='/admission'>Join Us</Link>
          <Link className='button homepageButton delay4 anim1' to='/donate'>Support Us</Link>
        </div>
        
        <p className="delay5 anim1 homepagep">
          Paragon Robotics is a student-led robotics team based in Windsor, Connecticut — and this website was built by our own <span style = {{color: "#9e2000ff"}}>students</span>! Our mission is to spark a lifelong passion for <span style={{color: "#9e2000ff"}}>S</span><span style={{color: "#9e2000ff"}}>T</span><span style={{color: "#9e2000ff"}}>E</span><span style={{color: "#9e2000ff"}}>M</span> (<span style={{color: "#9e2000ff"}}>Science</span>, <span style={{color: "#9e2000ff"}}>Technology</span>, <span style={{color: "#9e2000ff"}}>Engineering</span>, and <span style={{color: "#9e2000ff"}}>Mathematics</span>) and to prepare young innovators for future careers in these fields.
        </p>
      </div>
    </div>
  );
}