import ResumeFile from "../assets/resume.pdf";

export default function Resume() {
  const downloadResume = () => {
    window.location.href = ResumeFile;
  };

  return (
    <div className="resume-container">
      <button className="download-button" onClick={downloadResume}>
        Download Resume
      </button>
    </div>
  );
}