// Desc: Resume Section of the Portfolio


const ResumeSection = () => {
    const skills = ['JavaScript', 'React', 'Node', 'Express', 'MongoDB', 'PostgreSQL', 'HTML', 'CSS', 'Bootstrap'];
       
        return (
            <section className= "resume">
                <h2>Resume</h2>
               <p>
                <a href="/AGResume.pdf" download>Download PDF</a>
               </p>
               <h3>Proficiencies</h3>
                <ul>
                    {skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </section>
        );
    }
export default ResumeSection;