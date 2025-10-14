import '../css/global.css';
import '../css/projects.css';

import robot25 from '../../assets/2025.jpeg';

export default function projects() {
  return (
    <div>
      <div id="project-column">
        <h1 class="">Robots</h1>
        <div id="robots-block">
          <div class="card">
            <img src={robot25} alt="20  25 Robot" />
          </div>
        </div>
        <h1>SuperScout</h1>  
      </div>
    </div>
  );
}