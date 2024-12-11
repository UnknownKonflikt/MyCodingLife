import monkey from '../assets/img/monkey.jpg';


function About() {
    return (
        <>
        <section id="about" className="full-screen-height px-4 pt-5 my-5 text-center border-bottom">
            <h1 className="text-center display-6 fw-bold text-body-emphasis lh-1 mb-3">
                A little more about me and my journey....
            </h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">
                    Hi, I am Anthony Gillespie, a frontend developer based in USA. I create responsive websites that are beautifully designed and easy to use.
                    I enjoy turning complex problems into simple, beautiful, and intuitive designs. When I am not coding, you will find me cooking, creating music, or watching movies.
                    I am excited to embark on my journey into full-stack development and coding! With a passion for problem-solving and a drive to continuously learn, I have immersed myself in both front-end and back-end technologies to create seamless, dynamic web applications. From designing intuitive user interfaces to building robust server-side functionality, I am eager to apply my skills and grow as a developer. This is just the beginning, and I am looking forward to all the challenges and opportunities that lie ahead!
                </p>
            </div>
            <div className="overflow-hidden" style={{ maxHeight: '30vh' }}>
                <div className="container px-5">
                    <img 
                        src={monkey} 
                        className="border-outline img-fluid border rounded-3" 
                        alt="A photo of Anthony Gillespie (monkey)" 
                        width="700" 
                        height="500" 
                        loading="lazy" 
                    />
                </div>
            </div>
        </section>
        </>
    );
}

export default About;