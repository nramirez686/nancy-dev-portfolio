import Selfie from '../image/selfie.png'; 
import '../App.css';

const About = () => {
  return (
    <div className="about-container">
    <img src={Selfie} alt="selfie" className="selfie-image" />
    <section id="about-me" className="about-me">
          <h2 class="about-text">About me</h2>
          <p>
            My name is Nancy Ramirez and I am a student passionately delving
            into the world of coding and programming. Embarking on this
            thrilling journey, I am fueled by an insatiable curiosity and a
            desire to unlock the boundless possibilities offered by the realm of
            technology. What truly drives me is the potential for innovation and
            problem-solving that coding offers. Learning to code has not only
            provided me with a new set of skills but has also taught me the
            importance of collaboration and community. I value the opportunity
            to connect with fellow learners, exchange ideas, and contribute to
            the open-source community. Together, we can build a more inclusive
            and equitable tech industry that harnesses the power of diverse
            perspectives. Join me on this exciting journey as we unlock the
            wonders of coding and together shape a future driven by innovation
            and endless possibilities. Let's collaborate, learn, and make a
            difference one line of code at a time.
          </p>
        </section>
      </div>
  );
};

export default About;
