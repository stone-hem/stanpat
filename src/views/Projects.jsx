import styled  from "styled-components"
import project from "../assets/images/project-management.jpg";
const Projects = () => {
  return (
    <Section>
      <h3>Our Projects</h3>
      <Container>
        <h3>Project Execution Process</h3>
        <img src={project} alt="" />
      </Container>
      <h3>All Projects</h3>
      <Featured>
        <Project></Project>
        <Project></Project>
        <Project></Project>
        <Project></Project>
        <Project></Project>
        <Project></Project>
      </Featured>
    </Section>
    
  )
}

export default Projects

const Project=styled.div`
  border: 1px solid green;
  height: 200px;
`

const Featured=styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  width: 100%;
`

const Container=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  img{
    width: 50%;
  }
`

const Section =styled.section`
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`