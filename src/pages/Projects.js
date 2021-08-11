import React from 'react'
import styled from 'styled-components';

const projects = [
    {
        Icon: <i class="fas fa-shopping-cart projects-icon"></i>,
        Title: "JustBuyIt",
        Desc: "Everything you need.",
        Link: "https://justbuyit.netlify.app/",
        SrcCode: "https://github.com/alta-max/Cloth-Store"
    },
    {
        Icon: <i class="fal fa-newspaper projects-icon"></i>,
        Title: "Tech News",
        Desc: "Search for news and latest articles on your favourite technologies.",
        Link: "https://reacttechnews.netlify.app/",
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
        Icon: <i class="fab fa-github-alt footer-icons projects-icon"></i>,
        Title: "GithubSearch",
        Desc: "Statistics of any user of Github.",
        Link: "https://searchusersofgithub.netlify.app/",
        SrcCode: "https://github.com/alta-max/searchGithubUsers"

    }
];


const Projects = () => {
    return (<Wrapper>

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
                    <h3><a href={Link}>CLICK <u>HERE</u></a> to visit</h3>
                    <h3>Source Code: <a href={SrcCode}> <i class="fab fa-github footer-icons"></i></a></h3>
                </div>
            })}

        </section></Wrapper>
    )
}

const Wrapper = styled.section`
h1{
    font-size: 1.5rem;
}
.projects {
  background-color: black;
  padding: 2rem 10rem 10rem 10rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.projects-container {
  text-align: center;
  background-color: white;
  width: 30rem;
  height: 20rem;
  margin: 2rem;
  border-radius: 5rem;
}

.projects-icon {
  font-size: 8rem;
  padding: 0.5rem;
}

.projects h1 {
  font-family: "Josefin Sans", sans-serif;
}

.projects h3 {
  font-family: "Montserrat", sans-serif;
  padding: 0.5rem;
}

.projects p {
  font-family: "Raleway", sans-serif;
  padding-top: 0.5rem;
}

.projects-heading {
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  padding-top: 3rem;
  text-align: center;
  background-color: black;
  color: #fff;
  font-size: 1rem;
}

@media (max-width: 425px) {
  .projects-container {
    height: 18rem;
  }
  .projects-icon {
    font-size: 4rem;
    width: 100%;
  }
  .projects {
    padding: 2rem;
  }
}

`

export default Projects
