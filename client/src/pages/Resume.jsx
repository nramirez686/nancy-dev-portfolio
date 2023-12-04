import Resume1 from "../image/resume1.png";
import Resume2 from "../image/resume2.png";

export default function Resume() {
  return (
    <div className="resume-container">
      <img src={Resume1} className="resume-image" alt="Resume 1" />
      <img src={Resume2} className="resume-image" alt="Resume 2" />
    </div>
  );
}
