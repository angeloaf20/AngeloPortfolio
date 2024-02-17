import { FunctionComponent } from "preact";

interface ProjectInfo {
    pictureUrl: string,
    name: string,
    description: string,
    link: string
}

const descriptions = {
    sercheDesc: `break into places n shi`,
    sftDesc: ``,
    swhDesc: ``
}

const ProjectCard: FunctionComponent<ProjectInfo> = ({pictureUrl, name, description, link}) => {
    const altText = `${name} screenshot`;

    return (
        <div class="project-card">
            <img src={pictureUrl} alt={altText} class="project-card-img"/>
            <h5 style="font-size: 1em;">{name}</h5>
            <p>{description}</p>
            <a href={link}>Link to {name}</a>
        </div>
    );
};

export function Projects() {
    return (
        <div className="projects-container" id="projects">
            <h1 className="section-heading">My projects</h1>
            <div className="project-card-container">
            <ProjectCard pictureUrl="../assets/project-ss/serche3.png" name="Serche" description = {descriptions.sercheDesc} link = ""/>
            <ProjectCard pictureUrl="../assets/project-ss/shrimpfriedtyccon-3.png" name="Shrimp Fried Tycoon" description = {descriptions.sercheDesc} link = ""/>
            <ProjectCard pictureUrl="../assets/project-ss/swh1.png" name="Simple Walk Home" description = {descriptions.sercheDesc} link = ""/>
            
            </div>
        </div>
    );
}