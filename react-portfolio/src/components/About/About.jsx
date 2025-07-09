import React from 'react'
import pic4 from "../../assets/image/about/pic4.jpg";
import pic5 from "../../assets/image/about/pic5.jpg";
import pic6 from "../../assets/image/about/pic6.jpg";

function About() {
  return (
    <div>
      <section className="page-section" id="ABOUT">
        <div className="container-fluid px-0">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">ABOUT</h2>
            <h3 className="section-subheading text-muted">
              What I Do and Learn
            </h3>
          </div>
          <ul className="timeline">
            <li>
              <div className="timeline-image">
                <img
                  className="rounded-circle img-fluid"
                  src={pic4}
                  alt="Our beginning"
                />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 className="subheading">Front-End Development</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    Building responsive and dynamic web applications using HTML,
                    CSS, JavaScript, and frameworks.
                  </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image" id="image-2">
                <img className="rounded-circle img-fluid" src={pic5} />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 className="subheading"> frameworks</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    Building modern, reusable, and dynamic user interfaces using
                    the React library, which allows efficient component-based
                    development and seamless updates to web applications.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-image">
                <img
                  className="rounded-circle img-fluid"
                  src={pic6}
                  alt="Tech club leadership"
                />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 className="subheading">Programming Languages</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    Developing efficient and reliable software solutions using
                    languages like Python, C++, and Java
                  </p>
                </div>
              </div>
            </li>

            <li className="timeline-inverted">
              <div className="timeline-image">
                <h4>
                  i will continue😊
                  <br />
                </h4>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default About
