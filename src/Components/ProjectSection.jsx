import squirrel from '../../src/assets/img/squirrel.jpg';
import pokemonMEM from '../../src/assets/img/pokemonMEM.jpg';
import weather from '../../src/assets/img/weather.png';
import carBuyer from '../../src/assets/img/carBuyer.jpg';
import books from '../../src/assets/img/books.jpg';
import pig from '../../src/assets/img/pig.jpg';
import mgrCommand from '../../src/assets/img/mgrCommand.jpg';
import tykLogo from '../../src/assets/img/tyk-logo.png';
import fistBump from '../../src/assets/img/fist-bump.jpg';
import alamo from '../../src/assets/img/alamo.jpg';

function ProjectSection() {
    return (
        <>
        <section id="ProjectSection">
          <h1 id="projects" className="text-center display-6 fw-bold text-body-emphasis lh-1 mb-3">A collection of some of my recent projects and links to view them.</h1>
            <div className="full-screen-height album py-6">
                <div className="container">
                <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 g-6">
                    <div className="col my-2">
                            <div className="card border-outline shadow-sm">
                            <img src= { pig } alt="The Money Pit" className= "bd-placeholder-img project-img card-img-top" />
                                <div className="card-body">
                                    <p className="card-text">The Money Pit Financial Planner</p>
                                    <p> A quick and easy way to manage and budget your personal finances.</p>
                                    <p>Save that hard earned money!!!</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button 
                                                type="button" 
                                                className="btn btn-sm btn-outline-secondary"
                                                onClick={()=> window.open('https://github.com/Moth668/the_money_pit', '_blank')} >GitHub Link</button>
                                            <button type="button"
                                                className="btn btn-sm btn-outline-secondary"
                                                onClick={()=> window.open('https://the-money-pit.onrender.com/')}>Deployed</button>
                                            </div>
                                        </div>
                                        <small className="text-body-secondary">
                                        <svg className="bi text-body-secondary flex-shrink-0 me03" fill="#ff0000" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="64px" height="64px" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" xmlSpace="preserve" stroke="#ff0000" strokeWidth="0.00512"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="2.048"></g><g id="SVGRepo_iconCarrier"> <g id="c133de6af664cd4f011a55de6b000d0b"> <path display="inline" d="M108.669,0.501h23.032v22.756h21.069V0.501h23.034V69.41h-23.032V46.334h-21.069V69.41h-23.032V0.501 H108.669z M206.091,23.353h-20.275V0.501h63.594v22.852h-20.285V69.41h-23.032V23.353H206.091z M259.502,0.501h24.02l14.771,24.213 l14.759-24.213h24.023V69.41h-22.938V35.256l-15.845,24.5h-0.395l-15.856-24.5V69.41h-22.539V0.501z M348.54,0.501h23.038v46.133 h32.391V69.41H348.54V0.501z M74.987,100.926l32.946,369.533l147.844,41.04L404.031,470.4l32.981-369.475H74.987z M368.289,188.62 l-2.063,22.977l-0.906,10.188h-0.149H256h-0.158h-63.956l4.142,46.407h59.814H256h92.98h12.214l-1.106,12.172l-10.65,119.32 l-0.682,7.652L256,433.045v0.008l-0.208,0.059l-92.839-25.774l-6.351-71.161h20.97h24.527l3.227,36.146l50.474,13.632l0.042-0.013 v-0.004l50.551-13.64l5.257-58.781H256h-0.158H154.578L143.439,188.62l-1.085-12.157h113.488H256h113.374L368.289,188.62z"> </path> </g> </g></svg>
                                        <svg className="bi text-body-secondary flex-shrink-0 me03" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8"></path> <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD"></path> <path d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z" fill="white"></path> </g></svg>
                                       
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col my-2">
                            <div className="card border-outline shadow-sm">
                            <img src= { tykLogo } alt="Tie YourKnots" className= "bd-placeholder-img project-img card-img-top" />
                                <div className="card-body">
                                    <p className="card-text">Tie Your Knots Event Planner</p>
                                    <p> A simple way to plan and organize your events.</p>
                                    <p>Never forget a detail again!!!</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button 
                                                type="button" 
                                                className="btn btn-sm btn-outline-secondary"
                                                onClick={()=> window.open('https://github.com/CelestialChai/event-planner', '_blank')} >GitHub Link</button>
                                            <button type="button"
                                                className="btn btn-sm btn-outline-secondary"
                                                onClick={()=> window.open(' https://event-planner-1-zo6k.onrender.com/')}>Deployed</button>
                                            </div>
                                        </div>
                                        <small className="text-body-secondary">
                                        <svg className="bi text-body-secondary flex-shrink-0 me03" fill="#ff0000" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="64px" height="64px" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" xmlSpace="preserve" stroke="#ff0000" strokeWidth="0.00512"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="2.048"></g><g id="SVGRepo_iconCarrier"> <g id="c133de6af664cd4f011a55de6b000d0b"> <path display="inline" d="M108.669,0.501h23.032v22.756h21.069V0.501h23.034V69.41h-23.032V46.334h-21.069V69.41h-23.032V0.501 H108.669z M206.091,23.353h-20.275V0.501h63.594v22.852h-20.285V69.41h-23.032V23.353H206.091z M259.502,0.501h24.02l14.771,24.213 l14.759-24.213h24.023V69.41h-22.938V35.256l-15.845,24.5h-0.395l-15.856-24.5V69.41h-22.539V0.501z M348.54,0.501h23.038v46.133 h32.391V69.41H348.54V0.501z M74.987,100.926l32.946,369.533l147.844,41.04L404.031,470.4l32.981-369.475H74.987z M368.289,188.62 l-2.063,22.977l-0.906,10.188h-0.149H256h-0.158h-63.956l4.142,46.407h59.814H256h92.98h12.214l-1.106,12.172l-10.65,119.32 l-0.682,7.652L256,433.045v0.008l-0.208,0.059l-92.839-25.774l-6.351-71.161h20.97h24.527l3.227,36.146l50.474,13.632l0.042-0.013 v-0.004l50.551-13.64l5.257-58.781H256h-0.158H154.578L143.439,188.62l-1.085-12.157h113.488H256h113.374L368.289,188.62z"> </path> </g> </g></svg>
                                        <svg className="bi text-body-secondary flex-shrink-0 me03" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8"></path> <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD"></path> <path d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z" fill="white"></path> </g></svg>
                                       
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 g-6">
                    <div className="col my-2">
                            <div className="card border-outline shadow-sm">
                            <img src= { pokemonMEM } alt="Pokemon Memeory Game" className= "bd-placeholder-img project-img card-img-top" />
                                <div className="card-body">
                                    <p className="card-text">Pokemon themed Memory Game</p>
                                    <p>A simple game for all ages to test your memory.</p>
                                    <p>Gotta match them all!!!</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button 
                                                type="button" 
                                                className="btn btn-sm btn-outline-secondary"
                                                onClick={()=> window.open('https://github.com/UnknownKonflikt/memoire-game', '_blank')} >GitHub Link</button>
                                            <button type="button"
                                                className="btn btn-sm btn-outline-secondary"
                                                onClick={()=> window.open('https://unknownkonflikt.github.io/memoire-game/')}>Deployed</button>
                                            </div>
                                        </div>
                                        <small className="text-body-secondary">
                                        <svg className="bi text-body-secondary flex-shrink-0 me03" fill="#ff0000" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="64px" height="64px" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" xmlSpace="preserve" stroke="#ff0000" strokeWidth="0.00512"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="2.048"></g><g id="SVGRepo_iconCarrier"> <g id="c133de6af664cd4f011a55de6b000d0b"> <path display="inline" d="M108.669,0.501h23.032v22.756h21.069V0.501h23.034V69.41h-23.032V46.334h-21.069V69.41h-23.032V0.501 H108.669z M206.091,23.353h-20.275V0.501h63.594v22.852h-20.285V69.41h-23.032V23.353H206.091z M259.502,0.501h24.02l14.771,24.213 l14.759-24.213h24.023V69.41h-22.938V35.256l-15.845,24.5h-0.395l-15.856-24.5V69.41h-22.539V0.501z M348.54,0.501h23.038v46.133 h32.391V69.41H348.54V0.501z M74.987,100.926l32.946,369.533l147.844,41.04L404.031,470.4l32.981-369.475H74.987z M368.289,188.62 l-2.063,22.977l-0.906,10.188h-0.149H256h-0.158h-63.956l4.142,46.407h59.814H256h92.98h12.214l-1.106,12.172l-10.65,119.32 l-0.682,7.652L256,433.045v0.008l-0.208,0.059l-92.839-25.774l-6.351-71.161h20.97h24.527l3.227,36.146l50.474,13.632l0.042-0.013 v-0.004l50.551-13.64l5.257-58.781H256h-0.158H154.578L143.439,188.62l-1.085-12.157h113.488H256h113.374L368.289,188.62z"> </path> </g> </g></svg>
                                        <svg className="bi text-body-secondary flex-shrink-0 me03" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8"></path> <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD"></path> <path d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z" fill="white"></path> </g></svg>
                                       
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col my-2">
                            <div className="card border-outline shadow-sm">
                            <img src= { carBuyer } alt="Car Shopping" className= "bd-placeholder-img project-img card-img-top" />
                                <div className="card-body">
                                    <p className="card-text">Car Buyers Guide</p>
                                    <p> Navigating a selection of options when car shopping.</p>
                                    <p> Find your favorite.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button 
                                                type="button" 
                                                className="btn btn-sm btn-outline-secondary"
                                                onClick={()=> window.open('https://github.com/Moth668/the_money_pit', '_blank')} >GitHub Link</button>
                                            <button type="button"
                                                className="btn btn-sm btn-outline-secondary"
                                                onClick={()=> window.open('https://the-money-pit.onrender.com/')}>Deployed</button>
                                            </div>
                                        </div>
                                        <small className="text-body-secondary">
                                        <svg className="bi text-body-secondary flex-shrink-0 me03" fill="#ff0000" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="64px" height="64px" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" xmlSpace="preserve" stroke="#ff0000" strokeWidth="0.00512"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="2.048"></g><g id="SVGRepo_iconCarrier"> <g id="c133de6af664cd4f011a55de6b000d0b"> <path display="inline" d="M108.669,0.501h23.032v22.756h21.069V0.501h23.034V69.41h-23.032V46.334h-21.069V69.41h-23.032V0.501 H108.669z M206.091,23.353h-20.275V0.501h63.594v22.852h-20.285V69.41h-23.032V23.353H206.091z M259.502,0.501h24.02l14.771,24.213 l14.759-24.213h24.023V69.41h-22.938V35.256l-15.845,24.5h-0.395l-15.856-24.5V69.41h-22.539V0.501z M348.54,0.501h23.038v46.133 h32.391V69.41H348.54V0.501z M74.987,100.926l32.946,369.533l147.844,41.04L404.031,470.4l32.981-369.475H74.987z M368.289,188.62 l-2.063,22.977l-0.906,10.188h-0.149H256h-0.158h-63.956l4.142,46.407h59.814H256h92.98h12.214l-1.106,12.172l-10.65,119.32 l-0.682,7.652L256,433.045v0.008l-0.208,0.059l-92.839-25.774l-6.351-71.161h20.97h24.527l3.227,36.146l50.474,13.632l0.042-0.013 v-0.004l50.551-13.64l5.257-58.781H256h-0.158H154.578L143.439,188.62l-1.085-12.157h113.488H256h113.374L368.289,188.62z"> </path> </g> </g></svg>
                                        <svg className="bi text-body-secondary flex-shrink-0 me03" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8"></path> <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD"></path> <path d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z" fill="white"></path> </g></svg>
                                       
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>       
                 </div>
                 <div className="container">
                <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 g-6">
                    <div className="col my-2">
                            <div className="card border-outline shadow-sm">
                            <img src= { weather } alt="The Weather Report" className= "bd-placeholder-img project-img card-img-top" />
                                <div className="card-body">
                                    <p className="card-text">Second Opinion Weather Forecaster</p>
                                    <p> A quick and easy way to forcast weather for up to 5 days.</p>
                                    <p>Never get caught without your umbrella!!!</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button 
                                                type="button" 
                                                className="btn btn-sm btn-outline-secondary"
                                                onClick={()=> window.open('https://github.com/UnknownKonflikt/Second-Opinion-Weather', '_blank')} >GitHub Link</button>
                                            <button type="button"
                                                className="btn btn-sm btn-outline-secondary"
                                                onClick={()=> window.open('')}>Deployed</button>
                                            </div>
                                        </div>
                                        <small className="text-body-secondary">
                                        <svg className="bi text-body-secondary flex-shrink-0 me03" fill="#ff0000" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="64px" height="64px" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" xmlSpace="preserve" stroke="#ff0000" strokeWidth="0.00512"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="2.048"></g><g id="SVGRepo_iconCarrier"> <g id="c133de6af664cd4f011a55de6b000d0b"> <path display="inline" d="M108.669,0.501h23.032v22.756h21.069V0.501h23.034V69.41h-23.032V46.334h-21.069V69.41h-23.032V0.501 H108.669z M206.091,23.353h-20.275V0.501h63.594v22.852h-20.285V69.41h-23.032V23.353H206.091z M259.502,0.501h24.02l14.771,24.213 l14.759-24.213h24.023V69.41h-22.938V35.256l-15.845,24.5h-0.395l-15.856-24.5V69.41h-22.539V0.501z M348.54,0.501h23.038v46.133 h32.391V69.41H348.54V0.501z M74.987,100.926l32.946,369.533l147.844,41.04L404.031,470.4l32.981-369.475H74.987z M368.289,188.62 l-2.063,22.977l-0.906,10.188h-0.149H256h-0.158h-63.956l4.142,46.407h59.814H256h92.98h12.214l-1.106,12.172l-10.65,119.32 l-0.682,7.652L256,433.045v0.008l-0.208,0.059l-92.839-25.774l-6.351-71.161h20.97h24.527l3.227,36.146l50.474,13.632l0.042-0.013 v-0.004l50.551-13.64l5.257-58.781H256h-0.158H154.578L143.439,188.62l-1.085-12.157h113.488H256h113.374L368.289,188.62z"> </path> </g> </g></svg>
                                        <svg className="bi text-body-secondary flex-shrink-0 me03" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8"></path> <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD"></path> <path d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z" fill="white"></path> </g></svg>
                                       
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col my-2">
                            <div className="card border-outline shadow-sm">
                            <img src= { fistBump } alt="Sundae Social API" className= "bd-placeholder-img project-img card-img-top" />
                                <div className="card-body">
                                    <p className="card-text">Sundae Social API</p>
                                    <p> A social network built from scratch using MongoDB.</p>
                                    <p>Stay connected!!!</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button 
                                                type="button" 
                                                className="btn btn-sm btn-outline-secondary"
                                                onClick={()=> window.open('https://github.com/Moth668/the_money_pit', '_blank')} >GitHub Link</button>
                                            <button type="button"
                                                className="btn btn-sm btn-outline-secondary"
                                                onClick={()=> window.open('https://the-money-pit.onrender.com/')}>Deployed</button>
                                            </div>
                                        </div>
                                        <small className="text-body-secondary">
                                        <svg className="bi text-body-secondary flex-shrink-0 me03" fill="#ff0000" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="64px" height="64px" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" xmlSpace="preserve" stroke="#ff0000" strokeWidth="0.00512"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="2.048"></g><g id="SVGRepo_iconCarrier"> <g id="c133de6af664cd4f011a55de6b000d0b"> <path display="inline" d="M108.669,0.501h23.032v22.756h21.069V0.501h23.034V69.41h-23.032V46.334h-21.069V69.41h-23.032V0.501 H108.669z M206.091,23.353h-20.275V0.501h63.594v22.852h-20.285V69.41h-23.032V23.353H206.091z M259.502,0.501h24.02l14.771,24.213 l14.759-24.213h24.023V69.41h-22.938V35.256l-15.845,24.5h-0.395l-15.856-24.5V69.41h-22.539V0.501z M348.54,0.501h23.038v46.133 h32.391V69.41H348.54V0.501z M74.987,100.926l32.946,369.533l147.844,41.04L404.031,470.4l32.981-369.475H74.987z M368.289,188.62 l-2.063,22.977l-0.906,10.188h-0.149H256h-0.158h-63.956l4.142,46.407h59.814H256h92.98h12.214l-1.106,12.172l-10.65,119.32 l-0.682,7.652L256,433.045v0.008l-0.208,0.059l-92.839-25.774l-6.351-71.161h20.97h24.527l3.227,36.146l50.474,13.632l0.042-0.013 v-0.004l50.551-13.64l5.257-58.781H256h-0.158H154.578L143.439,188.62l-1.085-12.157h113.488H256h113.374L368.289,188.62z"> </path> </g> </g></svg>
                                        <svg className="bi text-body-secondary flex-shrink-0 me03" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8"></path> <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD"></path> <path d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z" fill="white"></path> </g></svg>
                                       
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 g-6">
                    <div className="col my-2">
                            <div className="card border-outline shadow-sm">
                            <img src= { books } alt="Tech Quiz" className= "bd-placeholder-img project-img card-img-top" />
                                <div className="card-body">
                                    <p className="card-text">Tech Quiz</p>
                                    <p> A fun quiz to test your tech knowledge.</p>
                                    <p>Test your knowledge!!!</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button 
                                                type="button" 
                                                className="btn btn-sm btn-outline-secondary"
                                                onClick={()=> window.open('https://github.com/UnknownKonflikt/TechQuiz', '_blank')} >GitHub Link</button>
                                            <button type="button"
                                                className="btn btn-sm btn-outline-secondary"
                                                onClick={()=> window.open('https://drive.google.com/file/d/1TaLQeo2tcaWdg5lzhQFmpXqhKj7SYAJi/view?usp=sharing')}>Deployed</button>
                                            </div>
                                        </div>
                                        <small className="text-body-secondary">
                                        <svg className="bi text-body-secondary flex-shrink-0 me03" fill="#ff0000" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="64px" height="64px" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" xmlSpace="preserve" stroke="#ff0000" strokeWidth="0.00512"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="2.048"></g><g id="SVGRepo_iconCarrier"> <g id="c133de6af664cd4f011a55de6b000d0b"> <path display="inline" d="M108.669,0.501h23.032v22.756h21.069V0.501h23.034V69.41h-23.032V46.334h-21.069V69.41h-23.032V0.501 H108.669z M206.091,23.353h-20.275V0.501h63.594v22.852h-20.285V69.41h-23.032V23.353H206.091z M259.502,0.501h24.02l14.771,24.213 l14.759-24.213h24.023V69.41h-22.938V35.256l-15.845,24.5h-0.395l-15.856-24.5V69.41h-22.539V0.501z M348.54,0.501h23.038v46.133 h32.391V69.41H348.54V0.501z M74.987,100.926l32.946,369.533l147.844,41.04L404.031,470.4l32.981-369.475H74.987z M368.289,188.62 l-2.063,22.977l-0.906,10.188h-0.149H256h-0.158h-63.956l4.142,46.407h59.814H256h92.98h12.214l-1.106,12.172l-10.65,119.32 l-0.682,7.652L256,433.045v0.008l-0.208,0.059l-92.839-25.774l-6.351-71.161h20.97h24.527l3.227,36.146l50.474,13.632l0.042-0.013 v-0.004l50.551-13.64l5.257-58.781H256h-0.158H154.578L143.439,188.62l-1.085-12.157h113.488H256h113.374L368.289,188.62z"> </path> </g> </g></svg>
                                        <svg className="bi text-body-secondary flex-shrink-0 me03" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8"></path> <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD"></path> <path d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z" fill="white"></path> </g></svg>
                                       
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col my-2">
                            <div className="card border-outline shadow-sm">
                            <img src= { mgrCommand } alt="GitHub Actions" className= "bd-placeholder-img project-img card-img-top" />
                                <div className="card-body">
                                    <p className="card-text">GitHub Actions</p>
                                    <p> An application that utilizes cypress testing and GitHub actions.</p>
                                    <p>Testing 1, 2, 3!!!</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button 
                                                type="button" 
                                                className="btn btn-sm btn-outline-secondary"
                                                onClick={()=> window.open('https://github.com/UnknownKonflikt/GitHubActions', '_blank')} >GitHub Link</button>
                                            <button type="button"
                                                className="btn btn-sm btn-outline-secondary"
                                                onClick={()=> window.open('https://githubactions-70n0.onrender.com')}>Deployed</button>
                                            </div>
                                        </div>
                                        <small className="text-body-secondary">
                                        <svg className="bi text-body-secondary flex-shrink-0 me03" fill="#ff0000" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="64px" height="64px" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" xmlSpace="preserve" stroke="#ff0000" strokeWidth="0.00512"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="2.048"></g><g id="SVGRepo_iconCarrier"> <g id="c133de6af664cd4f011a55de6b000d0b"> <path display="inline" d="M108.669,0.501h23.032v22.756h21.069V0.501h23.034V69.41h-23.032V46.334h-21.069V69.41h-23.032V0.501 H108.669z M206.091,23.353h-20.275V0.501h63.594v22.852h-20.285V69.41h-23.032V23.353H206.091z M259.502,0.501h24.02l14.771,24.213 l14.759-24.213h24.023V69.41h-22.938V35.256l-15.845,24.5h-0.395l-15.856-24.5V69.41h-22.539V0.501z M348.54,0.501h23.038v46.133 h32.391V69.41H348.54V0.501z M74.987,100.926l32.946,369.533l147.844,41.04L404.031,470.4l32.981-369.475H74.987z M368.289,188.62 l-2.063,22.977l-0.906,10.188h-0.149H256h-0.158h-63.956l4.142,46.407h59.814H256h92.98h12.214l-1.106,12.172l-10.65,119.32 l-0.682,7.652L256,433.045v0.008l-0.208,0.059l-92.839-25.774l-6.351-71.161h20.97h24.527l3.227,36.146l50.474,13.632l0.042-0.013 v-0.004l50.551-13.64l5.257-58.781H256h-0.158H154.578L143.439,188.62l-1.085-12.157h113.488H256h113.374L368.289,188.62z"> </path> </g> </g></svg>
                                        <svg className="bi text-body-secondary flex-shrink-0 me03" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8"></path> <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD"></path> <path d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z" fill="white"></path> </g></svg>
                                       
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 g-6">
                    <div className="col my-2">
                            <div className="card border-outline shadow-sm">
                            <img src= { alamo } alt="Kanban Flow" className= "bd-placeholder-img project-img card-img-top" />
                                <div className="card-body">
                                    <p className="card-text">Tech Quiz</p>
                                    <p> A kanban board to help flow of projects.</p>
                                    <p>Stay on track for deadlines!!!</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button 
                                                type="button" 
                                                className="btn btn-sm btn-outline-secondary"
                                                onClick={()=> window.open('https://github.com/UnknownKonflikt/KanbanFlow', '_blank')} >GitHub Link</button>
                                            <button type="button"
                                                className="btn btn-sm btn-outline-secondary"
                                                onClick={()=> window.open('https://kanbanflow-v5bd.onrender.com')}>Deployed</button>
                                            </div>
                                        </div>
                                        <small className="text-body-secondary">
                                        <svg className="bi text-body-secondary flex-shrink-0 me03" fill="#ff0000" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="64px" height="64px" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" xmlSpace="preserve" stroke="#ff0000" strokeWidth="0.00512"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="2.048"></g><g id="SVGRepo_iconCarrier"> <g id="c133de6af664cd4f011a55de6b000d0b"> <path display="inline" d="M108.669,0.501h23.032v22.756h21.069V0.501h23.034V69.41h-23.032V46.334h-21.069V69.41h-23.032V0.501 H108.669z M206.091,23.353h-20.275V0.501h63.594v22.852h-20.285V69.41h-23.032V23.353H206.091z M259.502,0.501h24.02l14.771,24.213 l14.759-24.213h24.023V69.41h-22.938V35.256l-15.845,24.5h-0.395l-15.856-24.5V69.41h-22.539V0.501z M348.54,0.501h23.038v46.133 h32.391V69.41H348.54V0.501z M74.987,100.926l32.946,369.533l147.844,41.04L404.031,470.4l32.981-369.475H74.987z M368.289,188.62 l-2.063,22.977l-0.906,10.188h-0.149H256h-0.158h-63.956l4.142,46.407h59.814H256h92.98h12.214l-1.106,12.172l-10.65,119.32 l-0.682,7.652L256,433.045v0.008l-0.208,0.059l-92.839-25.774l-6.351-71.161h20.97h24.527l3.227,36.146l50.474,13.632l0.042-0.013 v-0.004l50.551-13.64l5.257-58.781H256h-0.158H154.578L143.439,188.62l-1.085-12.157h113.488H256h113.374L368.289,188.62z"> </path> </g> </g></svg>
                                        <svg className="bi text-body-secondary flex-shrink-0 me03" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8"></path> <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD"></path> <path d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z" fill="white"></path> </g></svg>
                                       
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col my-2">
                            <div className="card border-outline shadow-sm">
                            <img src= { squirrel } alt="Coming Soon" className= "bd-placeholder-img project-img card-img-top" />
                                <div className="card-body">
                                    <p className="card-text">More Coming Soon</p>
                                    <p> Keep connected for more projects coming soon.</p>
                                    <p>Stay Tuned!!!</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button 
                                                type="button" 
                                                className="btn btn-sm btn-outline-secondary"
                                                onClick={()=> window.open('https://github.com/UnknownKonflikt/GitHubActions', '_blank')} >GitHub Link</button>
                                            <button type="button"
                                                className="btn btn-sm btn-outline-secondary"
                                                onClick={()=> window.open('https://githubactions-70n0.onrender.com')}>Deployed</button>
                                            </div>
                                        </div>
                                        <small className="text-body-secondary">
                                        <svg className="bi text-body-secondary flex-shrink-0 me03" fill="#ff0000" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="64px" height="64px" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" xmlSpace="preserve" stroke="#ff0000" strokeWidth="0.00512"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="2.048"></g><g id="SVGRepo_iconCarrier"> <g id="c133de6af664cd4f011a55de6b000d0b"> <path display="inline" d="M108.669,0.501h23.032v22.756h21.069V0.501h23.034V69.41h-23.032V46.334h-21.069V69.41h-23.032V0.501 H108.669z M206.091,23.353h-20.275V0.501h63.594v22.852h-20.285V69.41h-23.032V23.353H206.091z M259.502,0.501h24.02l14.771,24.213 l14.759-24.213h24.023V69.41h-22.938V35.256l-15.845,24.5h-0.395l-15.856-24.5V69.41h-22.539V0.501z M348.54,0.501h23.038v46.133 h32.391V69.41H348.54V0.501z M74.987,100.926l32.946,369.533l147.844,41.04L404.031,470.4l32.981-369.475H74.987z M368.289,188.62 l-2.063,22.977l-0.906,10.188h-0.149H256h-0.158h-63.956l4.142,46.407h59.814H256h92.98h12.214l-1.106,12.172l-10.65,119.32 l-0.682,7.652L256,433.045v0.008l-0.208,0.059l-92.839-25.774l-6.351-71.161h20.97h24.527l3.227,36.146l50.474,13.632l0.042-0.013 v-0.004l50.551-13.64l5.257-58.781H256h-0.158H154.578L143.439,188.62l-1.085-12.157h113.488H256h113.374L368.289,188.62z"> </path> </g> </g></svg>
                                        <svg className="bi text-body-secondary flex-shrink-0 me03" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8"></path> <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD"></path> <path d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z" fill="white"></path> </g></svg>
                                       
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
              </section>         
                        
                       
                     
                        
        </>
    );
}

export default ProjectSection;