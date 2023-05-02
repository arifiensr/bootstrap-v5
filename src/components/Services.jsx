import serviceImage1 from '../assets/images/services/service-1.png'
import serviceImage2 from '../assets/images/services/service-2.png'
import serviceImage3 from '../assets/images/services/service-3.png'

export default function Services() {
  return (
    <>
      <section id="services" className="services">
        <div className="container">
          <div className="row text-center">
            <h1 className="display-3 fw-bold">Our Services</h1>
            <div className="heading-line mb-5"></div>
          </div>
        </div>

        {/* Description Content Start */}
        <div className="container">
          <div className="row pt-2 pb-2 mt-5 mb-3">
            <div className="col-md-6 border-right">
              <div className="bg-white p-3">
                <h2 className="fw-bold text-capitalize text-center">Our Services Range From Initial Design To Deployment Anywhere Anytime</h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="bg-white p-4 text-start">
                <p className="fw-light">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis voluptatum cumque perspiciatis optio quo commodi ratione, architecto quibusdam animi saepe nobis omnis error veniam in iste itaque suscipit dolorum? Dicta.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content For The Services Start */}
        <div className="container">
          {/* Marketing Content Start */}
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
              <div className="services__content">
                <div className="icon d-block bx bxs-paper-plane"></div>
                <h3 className="display-3--title mt-1">Marketing</h3>
                <p className="lh-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut totam ea dolorem dolores possimus aliquam accusantium provident ab enim sequi sapiente, vel expedita optio veniam fuga autem praesentium?</p>
                <button type="button" className="rounded-pill btn-rounded border-primary">
                  Learn more
                  <span>
                    <i className="bx bxs-right-arrow"></i>
                  </span>
                </button>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-end">
              <div className="services__pic">
                <img src={serviceImage1} alt="marketing illustration" className="img-fluid" />
              </div>
            </div>
          </div>
          {/* Web Development Content Start */}
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-start">
              <div className="services__pic">
              <img src={serviceImage2} alt="web development illustration" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
              <div className="services__content">
                <div className="icon d-block bx bx-code-alt"></div>
                <h3 className="display-3--title mt-1">Web Development</h3>
                <p className="lh-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut totam ea dolorem dolores possimus aliquam accusantium provident ab enim sequi sapiente, vel expedita optio veniam fuga autem praesentium?</p>
                <button type="button" className="rounded-pill btn-rounded border-primary">
                  Learn more
                  <span>
                    <i className="bx bxs-right-arrow"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
          {/* Cloud Hosting Content Start */}
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
              <div className="services__content">
                <div className="icon d-block bx bxs-cloud-upload"></div>
                <h3 className="display-3--title mt-1">Cloud Hosting</h3>
                <p className="lh-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut totam ea dolorem dolores possimus aliquam accusantium provident ab enim sequi sapiente, vel expedita optio veniam fuga autem praesentium?</p>
                <button type="button" className="rounded-pill btn-rounded border-primary">
                  Learn more
                  <span>
                    <i className="bx bxs-right-arrow"></i>
                  </span>
                </button>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-end">
              <div className="services__pic">
              <img src={serviceImage3} alt="cloud hosting illustration" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
