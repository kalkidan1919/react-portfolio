import React, { useEffect, useRef } from "react";
import portfolio from "../../assets/image/other/PROFILE.jpg";
import resume from "../../../public/Resume.pdf"

function Homepage() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typedTextElement = typedRef.current;

    const phrases = [
      "a passionate Software Engineering Student 💡",
      "Aspiring Full-Stack Developer 👩‍💻",
      "Excited about Web Development & Tech Leadership 🚀",
    ];

    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;

    const typingSpeed = 60;
    const deletingSpeed = 30;
    const pauseBeforeDelete = 1500;
    const pauseBeforeType = 500;

    function typeEffect() {
      const currentPhrase = phrases[currentPhraseIndex];
      const displayText = currentPhrase.substring(0, currentCharIndex);
      typedTextElement.textContent = displayText;

      if (!isDeleting && currentCharIndex < currentPhrase.length) {
        currentCharIndex++;
        setTimeout(typeEffect, typingSpeed);
      } else if (isDeleting && currentCharIndex > 0) {
        currentCharIndex--;
        setTimeout(typeEffect, deletingSpeed);
      } else {
        if (!isDeleting) {
          isDeleting = true;
          setTimeout(typeEffect, pauseBeforeDelete);
        } else {
          isDeleting = false;
          currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
          setTimeout(typeEffect, pauseBeforeType);
        }
      }
    }

    const timer = setTimeout(typeEffect, 1000); // start after 1s delay
    return () => clearTimeout(timer); // cleanup on unmount
  }, []);

  return (
    <div>
      <section
        id="page-top"
        className="min-vh-100 d-flex align-items-center bg-black"
      >
        <div className="container-fluid text-center fade-in">
          <img
            src={portfolio}
            alt="Kalkidan's Photo"
            className="rounded-circle mb-4 shadow profile-img"
            width="300"
            height="300"
          />
          <h1 className="display-4 fw-bold text-white">👋Welcome, I'm Kal!</h1>
          <p className="lead">
            <span ref={typedRef} className="text-white"></span>
            <span className="cursor text-white">|</span>
          </p>

          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-warning text-dark mt-3"
          >
            View Resume
          </a>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
