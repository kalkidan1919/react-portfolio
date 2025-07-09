import React from 'react'

function Footer() {
  return (
    <div>
      <div id="contactform">
        <section className="page-section" id="contact">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">Contact Me</h2>
              <h3 className="section-subheading text-dark">
                I'm available to collaborate or answer your questions.
              </h3>
            </div>

            <form
              id="contactForm"
              action="https://formspree.io/f/xanogrrz"
              method="POST"
            >
              <div className="row align-items-stretch mb-5">
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    <input
                      className="form-control"
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your Name *"
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input
                      className="form-control"
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your Email *"
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input
                      className="form-control"
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Your Phone *"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group form-group-textarea mb-3">
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      placeholder="Your Message *"
                      required
                    ></textarea>
                  </div>
                </div>
              </div>

              <div
                id="formAlert"
                className="alert d-none text-center"
                role="alert"
              ></div>

              <div className="text-center">
                <button
                  className="btn btn-primary btn-xl text-uppercase"
                  id="submitButton"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>

        <footer className="footer py-4 bg-light text-dark">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4"></div>

              <div className="col-lg-4 text-center">
                <p className="text-muted mb-3">
                  I’m excited to collaborate, learn, and build. Feel free to
                  reach out through any of my social links below!
                </p>

                <a
                  className="mx-2"
                  href="https://t.me/TechNova19"
                  target="_blank"
                  aria-label="Telegram"
                >
                  <i className="fab fa-telegram-plane fa-2x text-dark"></i>
                </a>
                <a
                  className="mx-2"
                  href="https://github.com/kalkidan1919"
                  target="_blank"
                  aria-label="GitHub"
                >
                  <i className="fab fa-github fa-2x text-dark"></i>
                </a>
                <a
                  className="mx-2"
                  href="https://www.linkedin.com/in/kal-kidan-025a44322"
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin-in fa-2x text-dark"></i>
                </a>
              </div>

              <div className="col-lg-4"></div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer
