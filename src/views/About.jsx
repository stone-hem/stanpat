import styled from "styled-components";
import about from "../assets/images/about.png";
import mission from "../assets/images/mission.png";
import purpose from "../assets/images/purpose.png";
import vision from "../assets/images/vision.png";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <Section>
       <Helmet>
        <title>About Us - Stanpat Global Limited</title>
        <meta
          name="About Us"
          content="We’re a leading engineering, technology and energy services
          company that helps our clients meet the world’s evolving energy
          needs. We use our engineering know-how and our consultancy
          expertise to design, build, and operate world-class energy and
          infrastructural facilities that are engineered for safety and
          optimal efficiency."
        />
      </Helmet>
      <h3>About Us</h3>
      <Container>
        <Content>
          <h3>Who We Are</h3>
          <p>
            StanPat Global Ltd was registered in 2013 under the Companies Act
            (Cap.486) (Registration No. CPR/2013/109589). We specialize in
            offering Mechanical and Electrical Engineering services to our
            clients. Our team of professionals includes Mechanical Engineers,
            Electrical Engineers, and Environmental Professionals, Project
            managers, droughts-men and other support staff. We are equipped with
            the latest technology softwares for design and simulations including
            Air conditioning, Pump sizing, AutoCAD and ArchiCAD.
          </p>
          <p>
            The varied experiences of the staff and Consultants we engage at
            StanPat Global Ltd give the firm a blend of unique capabilities in
            the fields of practice. At different times various clients have
            contracted us to render professional services for projects of
            varying nature, which we have successfully executed.
          </p>
        </Content>
        <Image>
          <img src={about} alt="" />
        </Image>
      </Container>
      <Values>
        <Card>
          <img src={mission} alt="" />
          <h3>Our Mission</h3>
          <p>
            To be a leading multi-disciplinary services firm globally as we
            nurture the next generation of industry professionals and leaders.
          </p>
        </Card>
        <Card>
          <img src={purpose} alt="" />
          <h3>Our Purpose</h3>
          <p>
            Our Purpose statement captures the essence of who we are and why we
            do business. (We will break boundaries together to translate the
            priorities of today into tangible and sustainable actions to benefit
            our clients, people, communities, and planet.) It demonstrates our
            passion and defines what we contribute to the world. It combines our
            heritage with the demands and dynamics of the present and future,
            and provides consistency and direction for the long term.
          </p>
        </Card>
        <Card>
          <img src={vision} alt="" />
          <h3>Our Vision</h3>
          <p>
            To be a leading multi-disciplinary services firm globally as we
            nurture the next generation of industry professionals and leaders.
          </p>
        </Card>
      </Values>
    </Section>
  );
};

export default About;

const Card = styled.section`
  border: 1px solid #0476d0;
  border-radius: 8px;
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  img {
    width: 50px;
  }
`;

const Values = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 30px;
  margin-bottom: 40px;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 30px;
  }
`;

const Image = styled.section`
  flex: 1;
  border-radius: 8px;
  img {
    width: 100%;
    object-fit: cover;
  }
`;

const Content = styled.section`
  border: 1px solid #0476d0;
  flex: 1;
  padding: 20px;
  border-radius: 8px;
`;

const Container = styled.section`
  display: flex;
  gap: 20px;
  padding: 20px 100px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 5px;
  }
`;

const Section = styled.section`
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 40px;
`;
