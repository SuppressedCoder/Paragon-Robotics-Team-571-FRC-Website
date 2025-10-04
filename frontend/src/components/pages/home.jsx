import '../../App.css';
import '../../index.css';
import Navbar from '../Navbar.jsx';
import Slideshow from '../Slideshow.jsx';

export default function Home() {
  return (
    <div className="app-container">
      <Slideshow /> {/* background */}
      <div className="content">
        {/* <Navbar /> */}

        <h1 className="delay1 anim1">
          Team 571 Paragon Robotics
          <br />
          We Build Futures for Students.
        </h1>

        <p className="delay2 anim1" style={{ maxWidth: '60em'}}>
          Paragon Robotics is a student-led robotics team based in Windsor, Connecticut. We are dedicated to inspiring and empowering students through hands-on experience in robotics, engineering, and technology. Our mission is to foster a passion for STEM (Science, Technology, Engineering, and Mathematics) among young minds and prepare them for future careers in these fields.
        </p>
      </div>
    </div>
  );
}