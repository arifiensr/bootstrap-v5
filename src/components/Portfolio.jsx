import portfolioImage1 from "../assets/images/portfolio/portfolio-1.jpg"
import portfolioImage2 from "../assets/images/portfolio/portfolio-2.jpg"
import portfolioImage3 from "../assets/images/portfolio/portfolio-3.jpg"
import portfolioImage4 from "../assets/images/portfolio/portfolio-4.jpg"
import portfolioImage5 from "../assets/images/portfolio/portfolio-5.jpg"
import portfolioImage6 from "../assets/images/portfolio/portfolio-6.jpg"
import portfolioImage7 from "../assets/images/portfolio/portfolio-7.jpg"
import portfolioImage8 from "../assets/images/portfolio/portfolio-8.jpg"
import portfolioImage9 from "../assets/images/portfolio/portfolio-9.jpg"

export default function Portfolio() {
  return (
    <>
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="row text-center mt-5">
            <h1 className="display-3 fw-bold text-capitalize">Latest Work</h1>
            <div className="heading-line"></div>
            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut reiciendis ullam eveniet.</p>
          </div>
          {/* Filter Buttons */}
          <div className="row mt-5 mb-4 g-3 text-center">
            <div className="col-md-12">
              <button className="btn btn-outline-primary" type="button">All</button>
              <button className="btn btn-outline-primary" type="button">Websites</button>
              <button className="btn btn-outline-primary" type="button">Design</button>
              <button className="btn btn-outline-primary" type="button">Mockup</button>
            </div>
          </div>

          {/* Portfolio Items Start */}
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="portfolio-box shadow">
                <img src={portfolioImage1} alt="portfolio 1 image" title="portfolio 1 picture" className="img-fluid" />
                <div className="portfolio-info">
                  <div className="caption">
                    <h4>project name goes here 1</h4>
                    <p>category project</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="portfolio-box shadow">
                <img src={portfolioImage2} alt="portfolio 2 image" title="portfolio 2 picture" className="img-fluid" />
                <div className="portfolio-info">
                  <div className="caption">
                    <h4>project name goes here 2</h4>
                    <p>category project</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="portfolio-box shadow">
                <img src={portfolioImage3} alt="portfolio 3 image" title="portfolio 3 picture" className="img-fluid" />
                <div className="portfolio-info">
                  <div className="caption">
                    <h4>project name goes here 3</h4>
                    <p>category project</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="portfolio-box shadow">
                <img src={portfolioImage4} alt="portfolio 4 image" title="portfolio 4 picture" className="img-fluid" />
                <div className="portfolio-info">
                  <div className="caption">
                    <h4>project name goes here 4</h4>
                    <p>category project</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="portfolio-box shadow">
                <img src={portfolioImage5} alt="portfolio 5 image" title="portfolio 5 picture" className="img-fluid" />
                <div className="portfolio-info">
                  <div className="caption">
                    <h4>project name goes here 5</h4>
                    <p>category project</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="portfolio-box shadow">
                <img src={portfolioImage6} alt="portfolio 6 image" title="portfolio 6 picture" className="img-fluid" />
                <div className="portfolio-info">
                  <div className="caption">
                    <h4>project name goes here 6</h4>
                    <p>category project</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="portfolio-box shadow">
                <img src={portfolioImage7} alt="portfolio 7 image" title="portfolio 7 picture" className="img-fluid" />
                <div className="portfolio-info">
                  <div className="caption">
                    <h4>project name goes here 7</h4>
                    <p>category project</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="portfolio-box shadow">
                <img src={portfolioImage8} alt="portfolio 8 image" title="portfolio 8 picture" className="img-fluid" />
                <div className="portfolio-info">
                  <div className="caption">
                    <h4>project name goes here 8</h4>
                    <p>category project</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="portfolio-box shadow">
                <img src={portfolioImage9} alt="portfolio 9 image" title="portfolio 9 picture" className="img-fluid" />
                <div className="portfolio-info">
                  <div className="caption">
                    <h4>project name goes here 9</h4>
                    <p>category project</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
