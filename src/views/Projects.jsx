import styled from "styled-components";
import project from "../assets/images/project.jpg";
import { projectData } from "../../data";
import { Helmet } from "react-helmet-async";
const Projects = () => {
  return (
    <Section>
       <Helmet>
        <title>Projects - Stanpat Global Limited</title>
        <meta
          name="Projects"
          content="We use our engineering know-how and our consultancy
          expertise to design, build, and operate world-class energy and
          infrastructural facilities that are engineered for safety and
          optimal efficiency."
        />
      </Helmet>
      <h3>Our Projects</h3>
      <Container>
        <h3>Project Execution Process</h3>
        <img src={project} alt="" />
      </Container>
      <h3>Our Projects</h3>
      <Featured>
        {
          projectData.map((item)=>(
            <Project key={item.id}>
            <img src={item.image} alt="" />
            <p>{item.desc}</p>
          </Project>
          ))
        }
      </Featured>
    </Section>
  );
};

export default Projects;


const Project = styled.div`
  height: 200px;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    position: absolute;
    bottom: 0;
    background-color: rgba(0,0,0,0.7);
    width: 100%;
  }
`;

const Featured = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  padding: 10px;
  margin-bottom: 40px;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 5;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  img {
    width: 50%;
  }
`;

const Section = styled.section`
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;
