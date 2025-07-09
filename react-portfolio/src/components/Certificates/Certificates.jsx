import React from "react";
import c1 from "../../assets/image/certeficate/c1.png";
import c2 from "../../assets/image/certeficate/c2.png";
import c3 from "../../assets/image/certeficate/c3.png";
import c4 from "../../assets/image/certeficate/c4.png";
import c5 from "../../assets/image/certeficate/c5.png";
import c6 from "../../assets/image/certeficate/c7.png";

function Certificates() {
  return (
    <section className="page-section bg-light pt-0" id="CERTIFICATES">
      {" "}
      {/* Remove any top padding */}
      <div className="container" id="project">
        <div className="text-center">
          <h2 className="section-heading text-uppercase text-center pb-4">
            CERTIFICATES
          </h2>
          <h3 className="section-subheading text-muted">
            A selection of certificates I’ve earned.
          </h3>
        </div>
        <div className="row">
          {/* Certificate 1 */}
          <div className="col-lg-4 col-sm-6 mb-4">
            <div className="portfolio-item">
              <a
                className="portfolio-link"
                data-bs-toggle="modal"
                href="#certificateModal1"
              >
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src={c1} alt="Certificate 1" />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading text-center"></div>
              </div>
            </div>
          </div>

          {/* Certificate 2 */}
          <div className="col-lg-4 col-sm-6 mb-4">
            <div className="portfolio-item">
              <a
                className="portfolio-link"
                data-bs-toggle="modal"
                href="#certificateModal2"
              >
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src={c2} alt="Certificate 2" />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading text-center"></div>
              </div>
            </div>
          </div>

          {/* Certificate 3 */}
          <div className="col-lg-4 col-sm-6 mb-4">
            <div className="portfolio-item">
              <a
                className="portfolio-link"
                data-bs-toggle="modal"
                href="#certificateModal3"
              >
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src={c3} alt="Certificate 3" />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading text-center"></div>
              </div>
            </div>
          </div>

          {/* Certificate 4 */}
          <div className="col-lg-4 col-sm-6 mb-4">
            <div className="portfolio-item">
              <a
                className="portfolio-link"
                data-bs-toggle="modal"
                href="#certificateModal4"
              >
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src={c4} alt="Certificate 4" />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading text-center"></div>
              </div>
            </div>
          </div>

          {/* Certificate 5 */}
          <div className="col-lg-4 col-sm-6 mb-4">
            <div className="portfolio-item">
              <a
                className="portfolio-link"
                data-bs-toggle="modal"
                href="#certificateModal5"
              >
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src={c5} alt="Certificate 5" />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading text-center"></div>
              </div>
            </div>
          </div>

          {/* Certificate 6 */}
          <div className="col-lg-4 col-sm-6 mb-4">
            <div className="portfolio-item">
              <a
                className="portfolio-link"
                data-bs-toggle="modal"
                href="#certificateModal6"
              >
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src={c6} alt="Certificate 6" />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading text-center"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certificates;
