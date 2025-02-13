// Desc: Resume Section of the Portfolio


const ResumeSection = () => {
    const skills = ['JavaScript', 'React', 'Node', 'Express', 'MongoDB', 'PostgreSQL', 'HTML', 'CSS', 'Bootstrap'];
       
        return (
            <section id="ResumeSection">
            <section className= "resume">
                <h2>Resume</h2>
               <p>
                <a href="https://docs.google.com/document/d/19_QWMJ63d-RGdSD83VQNGDgi2bqM-A3jtWkKVxA3MPY/export?format=pdf" download>Download PDF</a>
               </p>
               <h3>Proficiencies</h3>
                <ul>
                    {skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </section>
            </section>
        );
    }
export default ResumeSection;