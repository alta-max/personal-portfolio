import React from 'react'
import "./Projects.css"

const projects = [
    {
        Icon: <i class="fal fa-newspaper projects-icon"></i>,
        Title: "Tech News",
        Desc: "Search for news and latest articles on your favourite technologies.",
        Link: "https://confident-bohr-98e677.netlify.app/",
        SrcCode: "https://github.com/alta-max/News-Project"

    },
    {
        Icon: <i class="fas fa-wine-glass-alt projects-icon"></i>,
        Title: "CockTailsDB",
        Desc: "Search Your Favourite Cocktail with all its ingredients and instructions.",
        Link: "https://musing-saha-d3e527.netlify.app/",
        SrcCode: "https://github.com/alta-max/api-project"

    },
    {
        Icon: <i class="fas fa-film projects-icon"></i>,
        Title: "Search-Flix",
        Desc: "Search Your Favourite movies.",
        Link: "https://search-flix.netlify.app/",
        SrcCode: "https://github.com/alta-max/searchMovies"

    },
    {
        Icon: <i class="fab fa-github-alt footer-icons projects-icon"></i>,
        Title: "GithubSearch",
        Desc: "Statistics of any user of Github.",
        Link: "https://searchusersofgithub.netlify.app/",
        SrcCode: "https://github.com/alta-max/searchGithubUsers"

    }
];


const Projects = () => {
    return (<>

        <div className="projects-heading">
            <h1>Projects</h1>
        </div>
        <section className="projects">
            {projects.map((item, index) => {
                const { Icon, Title, Desc, Link, SrcCode } = item;
                return <div className="projects-container">
                    {Icon}
                    <h1>{Title}</h1>
                    <p>{Desc}</p>
                    <h3><a href={Link}>CLICK HERE</a> to visit</h3>
                    <h3>Source Code: <a href={SrcCode}> <i class="fab fa-github footer-icons"></i></a></h3>
                </div>
            })}

        </section></>
    )
}

export default Projects
