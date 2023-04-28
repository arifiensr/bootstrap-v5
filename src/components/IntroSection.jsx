import { useEffect } from 'react'
import introIllustrationImage from '../assets/images/arts/intro-section-illustration.png'
// import GLightbox from 'glightbox'

export default function IntroSection() {
  useEffect(() => {
    // const lightbox = GLightbox({
    //   href: 'https://www.youtube.com/watch?v=J9lS14nM1xg',
    //   type: 'video',
    //   source: 'youtube', //vimeo, youtube or local
    //   width: 900,
    // })
  }, [])

  return (
    <>
      <section id="home" className="intro-section">
        <div className="container">
          <div className="row align-items-center text-white">
            {/* INTRO START */}
            <div className="col-md-6 intros text-start">
              <h1 className="display-2">
                <span className="display-2--intro">Hey!, I'm Arifien</span>
                <span className="display-2--description lh-base">this is a multi-purpose responsive layout created with bootstrap v5. (here you can place your description text)</span>
              </h1>
              <button type="button" className="rounded-pill btn-rounded">
                Get in Touch
                <span>
                  <i className="bx bxs-right-arrow"></i>
                </span>
              </button>
            </div>
            {/* INTRO VIDEO START */}
            <div className="col-md-6 intros text-end">
              <div className="video-box">
                <img src={introIllustrationImage} alt="video illustration" className="img-fluid" />
                <a href="#" className="position-absolute top-50 start-50 translate-middle">
                  <span>
                    <i className="bx bx-play-circle"></i>
                  </span>
                  <span className="border-animation border-animation--border-1"></span>
                  <span className="border-animation border-animation--border-2"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity={1} d="M0,96L30,112C60,128,120,160,180,149.3C240,139,300,85,360,80C420,75,480,117,540,144C600,171,660,181,720,170.7C780,160,840,128,900,117.3C960,107,1020,117,1080,128C1140,139,1200,149,1260,128C1320,107,1380,53,1410,26.7L1440,0L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z" />
        </svg>
      </section>
    </>
  )
}
