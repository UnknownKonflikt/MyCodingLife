import ReactMarkdown from 'react-markdown';
import resume from '../../src/assets/Anthony Gillespie Resume.md';

function ResumeSection() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <ReactMarkdown>{resume}</ReactMarkdown>
                </div>
            </div>
        </div>
    );
}

export default ResumeSection;