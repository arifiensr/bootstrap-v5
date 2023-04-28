import logoImage from '../assets/images/logo.png'

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark menu shadow fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logoImage} alt="logo image" title="logo image" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Testimonials
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  FAQ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Portofolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <button type="button" className="rounded-pill btn-rounded">
              +62 81202983726
              <span>
              <i className='bx bxs-phone' ></i>
              </span>
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}
