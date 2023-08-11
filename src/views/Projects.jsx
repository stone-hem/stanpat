import styled from "styled-components";
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
        <Project>
          <Bottom>
            <p>
              Mo Gas Supplier Limited Detailed Engineering Design, Statutory
              Approvals, Architectural Designs...
              Mo Gas Supplier Limited Detailed Engineering Design, Statutory
              Approvals, Architectural Designs...
            </p>
          </Bottom>
        </Project>
         <Project>
          <Bottom>
            <p>
              Mo Gas Supplier Limited Detailed Engineering Design, Statutory
              Approvals, Architectural Designs...
              Mo Gas Supplier Limited Detailed Engineering Design, Statutory
              Approvals, Architectural Designs...
            </p>
          </Bottom>
        </Project>
         <Project>
          <Bottom>
            <p>
              Mo Gas Supplier Limited Detailed Engineering Design, Statutory
              Approvals, Architectural Designs...
              Mo Gas Supplier Limited Detailed Engineering Design, Statutory
              Approvals, Architectural Designs...
            </p>
          </Bottom>
        </Project>
         <Project>
          <Bottom>
            <p>
              Mo Gas Supplier Limited Detailed Engineering Design, Statutory
              Approvals, Architectural Designs...
              Mo Gas Supplier Limited Detailed Engineering Design, Statutory
              Approvals, Architectural Designs...
            </p>
          </Bottom>
        </Project>
         <Project>
          <Bottom>
            <p>
              Mo Gas Supplier Limited Detailed Engineering Design, Statutory
              Approvals, Architectural Designs...
              Mo Gas Supplier Limited Detailed Engineering Design, Statutory
              Approvals, Architectural Designs...
            </p>
          </Bottom>
        </Project>
         <Project>
          <Bottom>
            <p>
              Mo Gas Supplier Limited Detailed Engineering Design, Statutory
              Approvals, Architectural Designs...
              Mo Gas Supplier Limited Detailed Engineering Design, Statutory
              Approvals, Architectural Designs...
            </p>
          </Bottom>
        </Project>
      </Featured>
    </Section>
  );
};

export default Projects;

const Bottom = styled.div`
  max-height: 40%;
  width: 100%;
  background-color: rgba(0,0,0,0.6);
  p{
    text-align: center;
  }
`;

const Project = styled.div`
  height: 200px;
  margin: 5px;
  background-image: url("construction.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: flex-end;
`;

const Featured = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  padding: 10px;
  margin-bottom: 40px;
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
