// import HeroSection from "./HeroSection";
// import About from "./AboutSection";
// eslint-disable-next-line no-unused-vars
import React from 'react';

function NavBar() {
    return (
        <>
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-italic">
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="50" fill="currentColor" className="bi bi-house-door" viewBox="0 0 16 16">
   <path d="M8 3.293l6 5V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8.293l6-5zm0-1.636L1 7.57V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7.57L8 1.657z"/>
</svg>

          <span className="fs-4">My Coding Life</span>
        </a>
  
      </header>
       
       <nav className="navbar text-center navbar-expand-lg bg-body-tertiary sticky-top">
            <div className="container-fluid">
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-center fw-bold" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#HeroSection">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#SkillSection">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#ProjectSection">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#ResumeSection">Resume</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#ContactSection">Contact</a>
                        </li>
                    
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
};


export default NavBar;