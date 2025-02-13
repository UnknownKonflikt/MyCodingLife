import logo from '../assets/img/logo.png';


function HeroSection() {
    return (
        <>
        <section id="HeroSection">
            {/* Full-screen height row */}
            <div className="full-screen-height row flex-lg-row-reverse justify-content-center align-items-center text-center g-5 py-3">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img 
                        src={logo} 
                        className="border-outline rounded-circle d-block mx-lg-auto img-fluid" 
                        alt="Logo" 
                        width="300" 
                        height="500" 
                        loading="lazy"
                    />
                </div>
                <div className="col-lg-6 text-center"> 
                    <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                        Hello, my name is Anthony Gillespie
                    </h1>
                    <p className="lead">
                        As a full-stack developer, I have developed a strong foundation in the core technologies 
                        that drive modern web applications. I am proficient in HTML and CSS for crafting clean, 
                        responsive layouts, and use JavaScript to bring interactivity and functionality to the 
                        front-end. With React, I build dynamic, component-driven user interfaces that offer a seamless 
                        experience. On the back-end, I leverage Node.js and Express to create efficient, scalable 
                        server-side applications, while TypeScript enhances the reliability and maintainability of my code. 
                        Whether it is integrating APIs, managing databases, or optimizing performance, I am constantly expanding 
                        my toolkit to stay at the forefront of web development. Every project I tackle is an opportunity to 
                        refine my skills and deliver high-quality, full-stack solutions.
                    </p>
                    <div className="d-grid gap-2 d-md-flex justify-content-center">
                        <button type="button" className="btn btn-outline-dark btn-lg px-4 me-md-2">
                            Projects
                        </button>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default HeroSection;