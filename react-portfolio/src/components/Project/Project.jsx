import React from 'react'
import pic1 from "../../assets/image/project/pic1.png";
import pic2 from "../../assets/image/project/pic2.jpg";
import pic3 from "../../assets/image/project/pic3.png";
import pic4 from "../../assets/image/project/pic7.png";
import pic5 from "../../assets/image/project/pic8.png";
import pic6 from "../../assets/image/project/pic9.png";

function Project() {
  return (
    <div>
      <section className="page-section bg-light" id="portfolio">
  <div className="container" id="PROJECT">
    <div className="text-center">
      <h2 className="section-heading text-uppercase">My Projects</h2>
      <h3 className="section-subheading text-muted">A selection of my recent work across different domains.</h3>
    </div>
    <div className="row">
    
      <div className="col-lg-4 col-sm-6 mb-4">
        <div className="portfolio-item">
          <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
            <div className="portfolio-hover">
              <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
            </div>
            <img className="img-fluid" src={pic1} alt="Project 1" />
          </a>
          <div className="portfolio-caption">
            <div className="portfolio-caption-heading">Personal Portfolio</div>
            <div className="portfolio-caption-subheading text-muted text-center">
              <a href="https://github.com/kalkidan1919/portfolio.git" className="btn btn-warning btn-sm mt-2">View Portfolio</a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-sm-6 mb-4">
        <div className="portfolio-item">
          <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal2">
            <div className="portfolio-hover">
              <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
            </div>
            <img className="img-fluid" src={pic2} alt="Netflix Clone" />
          </a>
          <div className="portfolio-caption">
            <div className="portfolio-caption-heading">Netflix Clone</div>
            <a href="https://github.com/kalkidan1919/Netflix.git" className="btn btn-warning btn-sm mt-2">View here</a>
          </div>
        </div>
      </div>

     
      <div className="col-lg-4 col-sm-6 mb-4">
        <div className="portfolio-item">
          <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal3">
            <div className="portfolio-hover">
              <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
            </div>
            <img className="img-fluid" src={pic3} alt="Snake Game" />
          </a>
          <div className="portfolio-caption">
            <div className="portfolio-caption-heading">Snake Game</div>
            <a href="https://github.com/kalkidan1919/Snake-game.git" className="btn btn-warning btn-sm mt-2">View here</a>
          </div>
        </div>
      </div>


      <div className="col-lg-4 col-sm-6 mb-4">
        <div className="portfolio-item">
          <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal4">
            <div className="portfolio-hover">
              <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
            </div>
            <img className="img-fluid" src={pic4} alt="Simple Calculator" />
          </a>
          <div className="portfolio-caption">
            <div className="portfolio-caption-heading">Simple Calculator</div>
           
            <a href="https://github.com/kalkidan1919/portfolio.git" className="btn btn-warning btn-sm mt-2">View here</a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-sm-6 mb-4">
        <div className="portfolio-item">
          <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal5">
            <div className="portfolio-hover">
              <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
            </div>
            <img className="img-fluid" src={pic5} alt="Apple Home Page" />
          </a>
          <div className="portfolio-caption">
            <div className="portfolio-caption-heading">Apple Home Page</div>
            <a href="https://github.com/kalkidan1919/apple_website.git" className="btn btn-warning btn-sm mt-2">View here</a>
          </div>
        </div>
      </div>

    
      <div className="col-lg-4 col-sm-6 mb-4">
        <div className="portfolio-item">
          <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal6">
            <div className="portfolio-hover">
              <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
            </div>
            <img className="img-fluid" src={pic6} alt="Puppy Lovers Page" />
          </a>
          <div className="portfolio-caption">
            <div className="portfolio-caption-heading">Puppy Lovers Page</div>
            <a href="https://github.com/kalkidan1919/puppy_lovers_page.git" className="btn btn-warning btn-sm mt-2">View here</a>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


    </div>
  )
}

export default Project
