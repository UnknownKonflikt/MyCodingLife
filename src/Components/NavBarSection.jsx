// import HeroSection from "./HeroSection";
// import About from "./AboutSection";
// eslint-disable-next-line no-unused-vars
import React from 'react';

function NavBar() {
    return (
        <>
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-italic">
          <svg className="bi me-2" width="80" height="50"><use xlinkHref="#bootstrap"></use></svg>
          <span className="fs-4">My Coding Life</span>
        </a>
  
      </header>
       
       <nav className="navbar text-center navbar-expand-lg bg-body-tertiary sticky-top">
            <div className="container-fluid">
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse justify-center fw-bold  navbar-collapse" id="navbarSupportedContent">
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
                            <a className="nav-link" href="ResumeSection">Resume</a>
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