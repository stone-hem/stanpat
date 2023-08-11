import styled from "styled-components";
import project from "../assets/images/project.jpg";
const Projects = () => {
  return (
    <Section>
      <h3>Our Projects</h3>
      <Container>
        <h3>Project Execution Process</h3>
        <img src={project} alt="" />
      </Container>
      <h3>Our Projects</h3>
      <Featured>
        <Project>
          <Bottom>
            <p>
              Two Rivers Development Limited Infrastructure, Retail
              entertainment and Lifestyle, and Parking Silo at Runda, Nairobi
            </p>
          </Bottom>
        </Project>
        <Project>
          <Bottom>
            <p>
              Britam Towers for British American Insurance Ltd (Kenya) at Upper
              hill Nairobi.
            </p>
          </Bottom>
        </Project>
        <Project>
          <Bottom>
            <p>Tenwek Mission Hospital Eye and Dental Clini</p>
          </Bottom>
        </Project>
        <Project>
          <Bottom>
            <p>
              Lusail Expressway Artscape in Doha City–Design Engineer
              responsible for the design review of all the streetlighting,
              intelligent information systems as well as the
              landscaping/artscape lighing systems and local utility authorities
              liasion.
            </p>
          </Bottom>
        </Project>
        <Project>
          <Bottom>
            <p>
              Al Farjan Projects, four sports facilities (stadia) for the Qatar
              Olympic Committee: AECOM Project.
            </p>
          </Bottom>
        </Project>
        <Project>
          <Bottom>
            <p>
              American Community School- Admin block, Tuition Blocks, Libraries
              and Sports facilities
            </p>
          </Bottom>
        </Project>
        <Project>
          <Bottom>
            <p>
            St Theresa&apos;s Girls Hostel - Eastligh Nairobi – Complete
            </p>
          </Bottom>
        </Project>
        <Project>
          <Bottom>
            <p>
            60 Ruaka Apartments - for Safaricom Investment Company- Complete
            </p>
          </Bottom>
        </Project>
        <Project>
          <Bottom>
            <p>
            KCB bank -Advantage Gold branches -UN Gigiri – Complete
            </p>
          </Bottom>
        </Project>
        <Project>
          <Bottom>
            <p>
            Nursery Expansion -Loreto Msongari – Complete
            </p>
          </Bottom>
        </Project>
        <Project>
          <Bottom>
            <p>
            Naivas Hotel - Naivas Supermarket-Done
            </p>
          </Bottom>
        </Project>
        <Project>
          <Bottom>
            <p>
            25 Parklane Executive Apartments-Parklands – ongoing
            </p>
          </Bottom>
        </Project>
      </Featured>
    </Section>
  );
};

export default Projects;

const Bottom = styled.div`
  max-height: 50%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  p {
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
