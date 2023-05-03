export default function Contact() {
  return (
    <>
      <section id="contact" className="get-started">
        <div className="container">
          <div className="row text-center">
            <h1 className="display-3 fw-bold text-capitalize">Get Started</h1>
            <div className="heading-line"></div>
            <p className="lh-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt temporibus repudiandae dicta.</p>
          </div>

          {/* CTA Content Start */}
          <div className="row text-white">
            <div className="col-12 col-md-6 gradient shadow p-3">
              <div className="cta-info w-100">
                <h4 className="display-4 fw-bold">100% Satisfaction Guaranteed</h4>
                <p className="lh-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus itaque magnam omnis architecto mollitia totam natus sed, perferendis voluptatum doloremque corrupti?</p>
                <h3 className="display-3--brief">What will be the next step?</h3>
                <ul className="cta-info__list">
                  <li>
                    <i className="bx bx-check"></i>We'll prepare the proposal
                  </li>
                  <li>
                    <i className="bx bx-check"></i>We'll discuss it together
                  </li>
                  <li>
                    <i className="bx bx-check"></i>Let's start the discussion
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6 bg-white shadow p-3">
              <div className="form w-100 pb-2">
                <h4 className="display-3--title mb-5">start your project</h4>
                <form action="#" className="row">
                  <div className="col-lg-6 col-md-6 mb-3">
                    <input type="text" placeholder="First Name" id="inputFirstName" className="shadow form-control form-control-lg" />
                  </div>
                  <div className="col-lg-6 col-md-6 mb-3">
                    <input type="text" placeholder="Last Name" id="inputLastName" className="shadow form-control form-control-lg" />
                  </div>
                  <div className="col-lg-12 mb-3">
                    <input type="email" placeholder="Email Address" id="inputEmail" className="shadow form-control form-control-lg" />
                  </div>
                  <div className="col-lg-12 mb-3">
                    <textarea name="message" placeholder="Message" id="message" cols="30" rows="10" className="shadow form-control form-control-lg"></textarea>
                  </div>
                  <div className="text-center d-grid mt-1">
                    <button type="button" className="btn btn-primary rounded-pill pt-3 pb-3">
                      Submit
                      <i className="bx bx-paper-plane"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
