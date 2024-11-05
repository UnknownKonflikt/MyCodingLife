import squirrel from '../../src/assets/img/squirrel.jpg';
import pokemonMEM from '../../src/assets/img/pokemonMEM.jpg';
import weather from '../../src/assets/img/weather.png';
import carBuyer from '../../src/assets/img/carBuyer.jpg';
import books from '../../src/assets/img/books.jpg';

import mgrCommand from '../../src/assets/img/mgrCommand.jpg';


function ProjectSection() {
    return (
        <>
          <h1 id="projects" className="text-center display-6 fw-bold text-body-emphasis lh-1 mb-3">A collection of some of my recent projects and links to view them.</h1>
            <div className="full-screen-height album py-5">
                <div className="container">

                    <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 g-6">
                        <div className="col my-2">
                            <div className="card border-outline shadow-sm">
                                <img src= { mgrCommand } alt="Manager Command" className= "bd-placeholder-img project-img card-img-top" />
                                
                                <div className="card-body">
                                    <p className="card-text">Manager_Command</p>
                                    <p>A command line application to assist managers track their employess.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button 
                                                type="button" 
                                                className="btn btn-sm btn-outline-secondary"
                                                onClick={()=> window.open('https://github.com/UnknownKonflikt/Manager_Command', '_blank')}>GitHub Link</button>
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Deployed</button>
                                        </div>
                                        <small className="text-body-secondary">
                                        <svg className="bi text-body-secondary flex-shrink-0 me03" fill="#ff0000" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="64px" height="64px" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" xmlSpace="preserve" stroke="#ff0000" strokeWidth="0.00512"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="2.048"></g><g id="SVGRepo_iconCarrier"> <g id="c133de6af664cd4f011a55de6b000d0b"> <path display="inline" d="M108.669,0.501h23.032v22.756h21.069V0.501h23.034V69.41h-23.032V46.334h-21.069V69.41h-23.032V0.501 H108.669z M206.091,23.353h-20.275V0.501h63.594v22.852h-20.285V69.41h-23.032V23.353H206.091z M259.502,0.501h24.02l14.771,24.213 l14.759-24.213h24.023V69.41h-22.938V35.256l-15.845,24.5h-0.395l-15.856-24.5V69.41h-22.539V0.501z M348.54,0.501h23.038v46.133 h32.391V69.41H348.54V0.501z M74.987,100.926l32.946,369.533l147.844,41.04L404.031,470.4l32.981-369.475H74.987z M368.289,188.62 l-2.063,22.977l-0.906,10.188h-0.149H256h-0.158h-63.956l4.142,46.407h59.814H256h92.98h12.214l-1.106,12.172l-10.65,119.32 l-0.682,7.652L256,433.045v0.008l-0.208,0.059l-92.839-25.774l-6.351-71.161h20.97h24.527l3.227,36.146l50.474,13.632l0.042-0.013 v-0.004l50.551-13.64l5.257-58.781H256h-0.158H154.578L143.439,188.62l-1.085-12.157h113.488H256h113.374L368.289,188.62z"> </path> </g> </g></svg>
                                        <svg className="bi text-body-secondary flex-shrink-0 me03" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8"></path> <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD"></path> <path d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z" fill="white"></path> </g></svg>
                                        <svg className="bi text-body-secondary flex-shrink-0 me03" xmlns="http://www.w3.org/2000/svg" aria-label="JavaScript" role="img" viewBox="0 0 512 512" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><rect width="512" height="512" rx="15%" fill="#f7df1e"></rect><path d="M324 370c10 17 24 29 47 29c20 0 33-10 33 -24c0-16 -13 -22 -35 -32l-12-5c-35-15 -58 -33 -58 -72c0-36 27 -64 70 -64c31 0 53 11 68 39l-37 24c-8-15 -17 -21 -31 -21c-14 0-23 9 -23 21c0 14 9 20 30 29l12 5c41 18 64 35 64 76c0 43-34 67 -80 67c-45 0-74 -21 -88 -49zm-170 4c8 13 14 25 31 25c16 0 26-6 26 -30V203h48v164c0 50-29 72 -72 72c-39 0-61 -20 -72 -44z"></path></g></svg>
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col my-2">
                            <div className="card border-outline shadow-sm">
                            <img src= { pokemonMEM } alt="pokemonMEM" className= "bd-placeholder-img project-img card-img-top" />
                                <div className="card-body">
                                    <p className="card-text">Pokemon Memoire Game</p>
                                    <p>A simple memory game utilizing characters from Pokemon.</p>
                                    <p>Gotta match them all!!!</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button 
                                                type="button" 
                                                className="btn btn-sm btn-outline-secondary"
                                                onClick={()=> window.open('https://github.com/Nuchicken/memoire-game', '_blank')} >GitHub Link</button>
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Deployed</button>
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
                            <img src= { weather } alt="weather" className= "bd-placeholder-img project-img card-img-top" />
                                <div className="card-body">
                                    <p className="card-text">Second Opinion Weather Forecaster</p>
                                    <p>Weather application that provides a second opinion on the weather.</p>
                                    <p>Never trust a weather person again and get the REAL updates up to 5 days ahead.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button 
                                            type="button" 
                                            className="btn btn-sm btn-outline-secondary"
                                            onClick={()=> window.open('https://github.com/UnknownKonflikt/Second-Opinion-Weather', '_blank')}>GitHub Link</button>
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Deployed</button>
                                        </div>
                                        <small className="text-body-secondary">
                                        <svg className="bi text-body-secondary flex-shrink-0 me03" fill="#ff0000" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="64px" height="64px" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" xmlSpace="preserve" stroke="#ff0000" strokeWidth="0.00512"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="2.048"></g><g id="SVGRepo_iconCarrier"> <g id="c133de6af664cd4f011a55de6b000d0b"> <path display="inline" d="M108.669,0.501h23.032v22.756h21.069V0.501h23.034V69.41h-23.032V46.334h-21.069V69.41h-23.032V0.501 H108.669z M206.091,23.353h-20.275V0.501h63.594v22.852h-20.285V69.41h-23.032V23.353H206.091z M259.502,0.501h24.02l14.771,24.213 l14.759-24.213h24.023V69.41h-22.938V35.256l-15.845,24.5h-0.395l-15.856-24.5V69.41h-22.539V0.501z M348.54,0.501h23.038v46.133 h32.391V69.41H348.54V0.501z M74.987,100.926l32.946,369.533l147.844,41.04L404.031,470.4l32.981-369.475H74.987z M368.289,188.62 l-2.063,22.977l-0.906,10.188h-0.149H256h-0.158h-63.956l4.142,46.407h59.814H256h92.98h12.214l-1.106,12.172l-10.65,119.32 l-0.682,7.652L256,433.045v0.008l-0.208,0.059l-92.839-25.774l-6.351-71.161h20.97h24.527l3.227,36.146l50.474,13.632l0.042-0.013 v-0.004l50.551-13.64l5.257-58.781H256h-0.158H154.578L143.439,188.62l-1.085-12.157h113.488H256h113.374L368.289,188.62z"> </path> </g> </g></svg>
                                        <svg className="bi text-body-secondary flex-shrink-0 me03" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8"></path> <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD"></path> <path d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z" fill="white"></path> </g></svg>
                                        <svg className="bi text-body-secondary flex-shrink-0 me03" xmlns="http://www.w3.org/2000/svg" aria-label="JavaScript" role="img" viewBox="0 0 512 512" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><rect width="512" height="512" rx="15%" fill="#f7df1e"></rect><path d="M324 370c10 17 24 29 47 29c20 0 33-10 33 -24c0-16 -13 -22 -35 -32l-12-5c-35-15 -58 -33 -58 -72c0-36 27 -64 70 -64c31 0 53 11 68 39l-37 24c-8-15 -17 -21 -31 -21c-14 0-23 9 -23 21c0 14 9 20 30 29l12 5c41 18 64 35 64 76c0 43-34 67 -80 67c-45 0-74 -21 -88 -49zm-170 4c8 13 14 25 31 25c16 0 26-6 26 -30V203h48v164c0 50-29 72 -72 72c-39 0-61 -20 -72 -44z"></path></g></svg>
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col my-2">
                            <div className="card border-outline shadow-sm">
                            <img src= { carBuyer } alt="carBuyer" className= "bd-placeholder-img project-img card-img-top" />
                                <div className="card-body">
                                    <p className="card-text">Car Buyers Guide</p>
                                    <p>TypeScript command-line application that builds and uses cars to include additional options for motorbikes and trucks. </p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button 
                                            type="button" 
                                            className="btn btn-sm btn-outline-secondary"
                                            onClick={()=> window.open('https://github.com/UnknownKonflikt/Challenge8--Car-Buyers', '_blank')}>GitHub Link</button>
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Deployed</button>
                                        </div>
                                        <small className="text-body-secondary">
                                        <svg className="bi text-body-secondary flex-shrink-0 me03" fill="#ff0000" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="64px" height="64px" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" xmlSpace="preserve" stroke="#ff0000" strokeWidth="0.00512"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="2.048"></g><g id="SVGRepo_iconCarrier"> <g id="c133de6af664cd4f011a55de6b000d0b"> <path display="inline" d="M108.669,0.501h23.032v22.756h21.069V0.501h23.034V69.41h-23.032V46.334h-21.069V69.41h-23.032V0.501 H108.669z M206.091,23.353h-20.275V0.501h63.594v22.852h-20.285V69.41h-23.032V23.353H206.091z M259.502,0.501h24.02l14.771,24.213 l14.759-24.213h24.023V69.41h-22.938V35.256l-15.845,24.5h-0.395l-15.856-24.5V69.41h-22.539V0.501z M348.54,0.501h23.038v46.133 h32.391V69.41H348.54V0.501z M74.987,100.926l32.946,369.533l147.844,41.04L404.031,470.4l32.981-369.475H74.987z M368.289,188.62 l-2.063,22.977l-0.906,10.188h-0.149H256h-0.158h-63.956l4.142,46.407h59.814H256h92.98h12.214l-1.106,12.172l-10.65,119.32 l-0.682,7.652L256,433.045v0.008l-0.208,0.059l-92.839-25.774l-6.351-71.161h20.97h24.527l3.227,36.146l50.474,13.632l0.042-0.013 v-0.004l50.551-13.64l5.257-58.781H256h-0.158H154.578L143.439,188.62l-1.085-12.157h113.488H256h113.374L368.289,188.62z"> </path> </g> </g></svg>
                                        <svg className="bi text-body-secondary flex-shrink-0 me03" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8"></path> <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD"></path> <path d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z" fill="white"></path> </g></svg>
                                        <svg className="bi text-body-secondary flex-shrink-0 me03" xmlns="http://www.w3.org/2000/svg" aria-label="JavaScript" role="img" viewBox="0 0 512 512" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><rect width="512" height="512" rx="15%" fill="#f7df1e"></rect><path d="M324 370c10 17 24 29 47 29c20 0 33-10 33 -24c0-16 -13 -22 -35 -32l-12-5c-35-15 -58 -33 -58 -72c0-36 27 -64 70 -64c31 0 53 11 68 39l-37 24c-8-15 -17 -21 -31 -21c-14 0-23 9 -23 21c0 14 9 20 30 29l12 5c41 18 64 35 64 76c0 43-34 67 -80 67c-45 0-74 -21 -88 -49zm-170 4c8 13 14 25 31 25c16 0 26-6 26 -30V203h48v164c0 50-29 72 -72 72c-39 0-61 -20 -72 -44z"></path></g></svg>
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col my-2">
                            <div className="card border-outline shadow-sm">
                            <img src= { books } alt="Books" className= "bd-placeholder-img project-img card-img-top" />
                                <div className="card-body">
                                    <p className="card-text">Professional README</p>
                                    <p>Quickly and easily generate a README file by using a command-line application to generate one. This allows the project creator to devote more time working on the project.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button 
                                            type="button" 
                                            className="btn btn-sm btn-outline-secondary"
                                            onClick={()=> window.open('https://github.com/UnknownKonflikt/Professional-README', '_blank')}>GitHub Link</button>
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Deployed</button>
                                        </div>
                                        <small className="text-body-secondary">
                                        <svg className="bi text-body-secondary flex-shrink-0 me03" fill="#ff0000" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="64px" height="64px" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" xmlSpace="preserve" stroke="#ff0000" strokeWidth="0.00512"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="2.048"></g><g id="SVGRepo_iconCarrier"> <g id="c133de6af664cd4f011a55de6b000d0b"> <path display="inline" d="M108.669,0.501h23.032v22.756h21.069V0.501h23.034V69.41h-23.032V46.334h-21.069V69.41h-23.032V0.501 H108.669z M206.091,23.353h-20.275V0.501h63.594v22.852h-20.285V69.41h-23.032V23.353H206.091z M259.502,0.501h24.02l14.771,24.213 l14.759-24.213h24.023V69.41h-22.938V35.256l-15.845,24.5h-0.395l-15.856-24.5V69.41h-22.539V0.501z M348.54,0.501h23.038v46.133 h32.391V69.41H348.54V0.501z M74.987,100.926l32.946,369.533l147.844,41.04L404.031,470.4l32.981-369.475H74.987z M368.289,188.62 l-2.063,22.977l-0.906,10.188h-0.149H256h-0.158h-63.956l4.142,46.407h59.814H256h92.98h12.214l-1.106,12.172l-10.65,119.32 l-0.682,7.652L256,433.045v0.008l-0.208,0.059l-92.839-25.774l-6.351-71.161h20.97h24.527l3.227,36.146l50.474,13.632l0.042-0.013 v-0.004l50.551-13.64l5.257-58.781H256h-0.158H154.578L143.439,188.62l-1.085-12.157h113.488H256h113.374L368.289,188.62z"> </path> </g> </g></svg>
                                        <svg className="bi text-body-secondary flex-shrink-0 me03" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8"></path> <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD"></path> <path d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z" fill="white"></path> </g></svg>
                                        <svg className="bi text-body-secondary flex-shrink-0 me03" xmlns="http://www.w3.org/2000/svg" aria-label="JavaScript" role="img" viewBox="0 0 512 512" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><rect width="512" height="512" rx="15%" fill="#f7df1e"></rect><path d="M324 370c10 17 24 29 47 29c20 0 33-10 33 -24c0-16 -13 -22 -35 -32l-12-5c-35-15 -58 -33 -58 -72c0-36 27 -64 70 -64c31 0 53 11 68 39l-37 24c-8-15 -17 -21 -31 -21c-14 0-23 9 -23 21c0 14 9 20 30 29l12 5c41 18 64 35 64 76c0 43-34 67 -80 67c-45 0-74 -21 -88 -49zm-170 4c8 13 14 25 31 25c16 0 26-6 26 -30V203h48v164c0 50-29 72 -72 72c-39 0-61 -20 -72 -44z"></path></g></svg>
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col my-2">
                            <div className="card border-outlinenshadow-sm">
                            <img src= { squirrel } alt="squirrel" className= "bd-placeholder-img project-img card-img-top" />
                                <div className="card-body">
                                    <p className="card-text"> More projects coming soon.....</p>
                                    <p>Stay tuned for more projects to come.</p>
                                    <p>Could one of your projects be featured here?</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button 
                                            type="button" 
                                            className="btn btn-sm btn-outline-secondary"
                                            onClick={()=> window.open('https://github.com/UnknownKonflikt', '_blank')}>GitHub Link</button>
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Deployed</button>
                                        </div>
                                        <small className="text-body-secondary">
                                        <svg className="bi text-body-secondary flex-shrink-0 me03" fill="#ff0000" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="64px" height="64px" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" xmlSpace="preserve" stroke="#ff0000" strokeWidth="0.00512"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="2.048"></g><g id="SVGRepo_iconCarrier"> <g id="c133de6af664cd4f011a55de6b000d0b"> <path display="inline" d="M108.669,0.501h23.032v22.756h21.069V0.501h23.034V69.41h-23.032V46.334h-21.069V69.41h-23.032V0.501 H108.669z M206.091,23.353h-20.275V0.501h63.594v22.852h-20.285V69.41h-23.032V23.353H206.091z M259.502,0.501h24.02l14.771,24.213 l14.759-24.213h24.023V69.41h-22.938V35.256l-15.845,24.5h-0.395l-15.856-24.5V69.41h-22.539V0.501z M348.54,0.501h23.038v46.133 h32.391V69.41H348.54V0.501z M74.987,100.926l32.946,369.533l147.844,41.04L404.031,470.4l32.981-369.475H74.987z M368.289,188.62 l-2.063,22.977l-0.906,10.188h-0.149H256h-0.158h-63.956l4.142,46.407h59.814H256h92.98h12.214l-1.106,12.172l-10.65,119.32 l-0.682,7.652L256,433.045v0.008l-0.208,0.059l-92.839-25.774l-6.351-71.161h20.97h24.527l3.227,36.146l50.474,13.632l0.042-0.013 v-0.004l50.551-13.64l5.257-58.781H256h-0.158H154.578L143.439,188.62l-1.085-12.157h113.488H256h113.374L368.289,188.62z"> </path> </g> </g></svg>
                                        <svg className="bi text-body-secondary flex-shrink-0 me03" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8"></path> <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD"></path> <path d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z" fill="white"></path> </g></svg>
                                        <svg className="bi text-body-secondary flex-shrink-0 me03" xmlns="http://www.w3.org/2000/svg" aria-label="JavaScript" role="img" viewBox="0 0 512 512" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><rect width="512" height="512" rx="15%" fill="#f7df1e"></rect><path d="M324 370c10 17 24 29 47 29c20 0 33-10 33 -24c0-16 -13 -22 -35 -32l-12-5c-35-15 -58 -33 -58 -72c0-36 27 -64 70 -64c31 0 53 11 68 39l-37 24c-8-15 -17 -21 -31 -21c-14 0-23 9 -23 21c0 14 9 20 30 29l12 5c41 18 64 35 64 76c0 43-34 67 -80 67c-45 0-74 -21 -88 -49zm-170 4c8 13 14 25 31 25c16 0 26-6 26 -30V203h48v164c0 50-29 72 -72 72c-39 0-61 -20 -72 -44z"></path></g></svg>
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectSection;