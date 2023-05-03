import clientImage1 from '../assets/images/testimonials/client-1.jpg'
import clientImage2 from '../assets/images/testimonials/client-2.jpg'
import clientImage3 from '../assets/images/testimonials/client-3.jpg'
import clientImage4 from '../assets/images/testimonials/client-4.jpg'
import clientImage5 from '../assets/images/testimonials/client-5.jpg'

export default function Testimonials() {
  return (
    <>
      <section id="testimonials" className="testimonials">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#fff" fillOpacity="1" d="M0,288L34.3,266.7C68.6,245,137,203,206,202.7C274.3,203,343,245,411,229.3C480,213,549,139,617,112C685.7,85,754,107,823,128C891.4,149,960,171,1029,176C1097.1,181,1166,171,1234,154.7C1302.9,139,1371,117,1406,106.7L1440,96L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
        </svg>
        <div className="container">
          <div className="row text-center text-white">
            <h1 className="display-3 fw-bold">Testimonials</h1>
            <hr className="mx-auto" style={{ width: '100px', height: '3px' }} />
            <p className="lead pt-1">what our clients are saying</p>
          </div>

          {/* Carousel Content Start */}
          <div className="row align-items-center">
            <div id="carouselExampleCaptions" className="carousel slide">
              <div className="carousel-inner">
                {/* Carousel Item 1 */}
                <div className="carousel-item active">
                  {/* Testimonialss Card */}
                  <div className="testimonials__card">
                    <p className="lh-lg">
                      <i className="bx bxs-quote-left"></i>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, nemo modi error quas dignissimos, expedita sit possimus earum magnam aspernatur atque.
                      <i className="bx bxs-quote-right"></i>
                      <i className="rating p-1">
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                      </i>
                    </p>
                  </div>
                  {/* Client Picture */}
                  <div className="testimonials__picture">
                    <img src={clientImage1} className="rounded-circle img-fluid" alt="client-1 picture" />
                  </div>
                  {/* Client Name & Role */}
                  <div className="testimonials__name">
                    <h3>Patrick Muriungi</h3>
                    <p className="fw-light">CEO & Founder</p>
                  </div>
                </div>
                {/* Carousel Item 2 */}
                <div className="carousel-item">
                  {/* Testimonialss Card */}
                  <div className="testimonials__card">
                    <p className="lh-lg">
                      <i className="bx bxs-quote-left"></i>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, nemo modi error quas dignissimos, expedita sit possimus earum magnam aspernatur atque.
                      <i className="bx bxs-quote-right"></i>
                      <i className="rating p-1">
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                      </i>
                    </p>
                  </div>
                  {/* Client Picture */}
                  <div className="testimonials__picture">
                    <img src={clientImage2} className="rounded-circle img-fluid" alt="client-2 picture" />
                  </div>
                  {/* Client Name & Role */}
                  <div className="testimonials__name">
                    <h3>Joy Marete</h3>
                    <p className="fw-light">Finance Manager</p>
                  </div>
                </div>
                {/* Carousel Item 3 */}
                <div className="carousel-item">
                  {/* Testimonialss Card */}
                  <div className="testimonials__card">
                    <p className="lh-lg">
                      <i className="bx bxs-quote-left"></i>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, nemo modi error quas dignissimos, expedita sit possimus earum magnam aspernatur atque.
                      <i className="bx bxs-quote-right"></i>
                      <i className="rating p-1">
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                      </i>
                    </p>
                  </div>
                  {/* Client Picture */}
                  <div className="testimonials__picture">
                    <img src={clientImage3} className="rounded-circle img-fluid" alt="client-3 picture" />
                  </div>
                  {/* Client Name & Role */}
                  <div className="testimonials__name">
                    <h3>ClaireBelle Zawadi</h3>
                    <p className="fw-light">Global Brand Manager</p>
                  </div>
                </div>
                {/* Carousel Item 4 */}
                <div className="carousel-item">
                  {/* Testimonialss Card */}
                  <div className="testimonials__card">
                    <p className="lh-lg">
                      <i className="bx bxs-quote-left"></i>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, nemo modi error quas dignissimos, expedita sit possimus earum magnam aspernatur atque.
                      <i className="bx bxs-quote-right"></i>
                      <i className="rating p-1">
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                      </i>
                    </p>
                  </div>
                  {/* Client Picture */}
                  <div className="testimonials__picture">
                    <img src={clientImage4} className="rounded-circle img-fluid" alt="client-4 picture" />
                  </div>
                  {/* Client Name & Role */}
                  <div className="testimonials__name">
                    <h3>Uhuru Kenyatta</h3>
                    <p className="fw-light">CEO & Founder</p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <button className="btn btn-outline-light bx bxs-left-arrow-alt" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev"></button>
                <button className="btn btn-outline-light bx bxs-right-arrow-alt" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next"></button>
              </div>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#fff" fillOpacity="1" d="M0,288L34.3,266.7C68.6,245,137,203,206,202.7C274.3,203,343,245,411,229.3C480,213,549,139,617,112C685.7,85,754,107,823,128C891.4,149,960,171,1029,176C1097.1,181,1166,171,1234,154.7C1302.9,139,1371,117,1406,106.7L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
        </svg>
      </section>
    </>
  )
}
