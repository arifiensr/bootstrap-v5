import company1 from '../assets/images/companies/company-1.png'
import company2 from '../assets/images/companies/company-2.png'
import company3 from '../assets/images/companies/company-3.png'
import company4 from '../assets/images/companies/company-4.png'
import company5 from '../assets/images/companies/company-5.png'
import company6 from '../assets/images/companies/company-6.png'

export default function Companies() {
  return (
    <>
      <section id="companies" className="companies">
        <div className="container">
          <div className="row text-center">
            <h4 className="fw-bold lead mb-3">Trusted by companies like</h4>
            <div className="heading-line mb-5"></div>
          </div>
        </div>
        {/* Companies Content Start */}
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-lg-2">
              <div className="companies__logo-box shadow-sm">
                <img src={company1} className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-md-4 col-lg-2">
              <div className="companies__logo-box shadow-sm">
                <img src={company2} className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-md-4 col-lg-2">
              <div className="companies__logo-box shadow-sm">
                <img src={company3} className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-md-4 col-lg-2">
              <div className="companies__logo-box shadow-sm">
                <img src={company4} className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-md-4 col-lg-2">
              <div className="companies__logo-box shadow-sm">
                <img src={company5} className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-md-4 col-lg-2">
              <div className="companies__logo-box shadow-sm">
                <img src={company6} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
