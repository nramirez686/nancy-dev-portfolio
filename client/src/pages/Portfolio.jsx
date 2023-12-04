import Auctionator from "../image/auctionator.png";
import Quizard from '../image/quizard.png';
import Password from '../image/passwordgen.png';
import Notes from "../image/notesapp.png";
import Temperature from "../image/climateapp.png";
import Book from "../image/bookquesters.png";


export default function Portfolio() {
    return (
      <div className="work-container-wrapper"> 

      <div className="work-container">
      <img src={Auctionator} className="work-image" alt="Work" />
      <div className="work-card-body">
        <h5 className="work-card-title"> Auctionator </h5>
        <a href="https://auctionator-12c2490092de.herokuapp.com/" class="visit-button">Visit Site</a>
      </div>
    </div>

    <div className="work-container">
      <img src={Quizard} className="work-image" alt="Work" />
      <div className="work-card-body">
        <h5 className="work-card-title"> Quizard </h5>
        <a href="https://nramirez686.github.io/Quizard/" class="visit-button">Visit Site</a>
      </div>
    </div>

    <div className="work-container">
      <img src={Password} className="work-image" alt="Work" />
      <div className="work-card-body">
        <h5 className="work-card-title"> Password Generator </h5>
        <a href="https://nramirez686.github.io/LovelyLocks/" class="visit-button">Visit Site</a>
      </div>
    </div>

    <div className="work-container">
      <img src={Notes} className="work-image" alt="Work" />
      <div className="work-card-body">
        <h5 className="work-card-title"> Instant Notes! </h5>
        <a href="https://morning-lowlands-51725-90c866be19e2.herokuapp.com/" class="visit-button">Visit Site</a>
      </div>
    </div>

    <div className="work-container">
      <img src={Temperature} className="work-image" alt="Work" />
      <div className="work-card-body">
        <h5 className="work-card-title"> Climate Caster </h5>
        <a href="https://nramirez686.github.io/ClimateCaster/" class="visit-button">Visit Site</a>
      </div>
    </div>

    <div className="work-container">
      <img src={Book} className="work-image" alt="Work" />
      <div className="work-card-body">
        <h5 className="work-card-title"> BookQuesters </h5>
        <a href="https://sillytsundere.github.io/bookquesters/" class="visit-button">Visit Site</a>
      </div>
    </div>

    </div>
    );
  }
  