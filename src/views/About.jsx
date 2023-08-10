import styled from "styled-components";
import about from "../assets/images/about.png";
import mission from "../assets/images/mission.png";
import purpose from "../assets/images/purpose.png";
import vision from "../assets/images/vision.png";
import facebook from "../assets/images/facebook-1.png";
import instagram from "../assets/images/instagram.png";
import youtube from "../assets/images/youtube.png";
import steglitzer from "../assets/images/steglitzer.jpg";

const About = () => {
  return (
    <Section>
      <h3>About Us</h3>
      <Container>
        <Content>
          <h3>Who We Are</h3>
          <p>
            We’re a leading engineering, technology and energy services company
            that helps our clients meet the world’s evolving energy needs. We
            use our engineering know-how and our consultancy expertise to
            design, build, and operate world-class energy and infrastructural
            facilities that are engineered for safety and optimal efficiency. We
            operate in a range of markets and work across the entire asset
            life-cycle – from design to decommissioning.
          </p>

          <p>
            These competencies, supported by flexible commercial models, robust
            local delivery, and a technology neutral approach, set us apart. Our
            operations are heavily dependent on our ability to attract, retain
            and lead the right level of skilled and experienced personnel. Core
            to our offering is our distinctive, delivery-focused culture.
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
      <Bottom>
        <Left>
          <h3>About Us</h3>
          <p>
            We’re a leading engineering, technology and energy services company
            that helps our clients meet the world’s evolving energy needs. We
            use our engineering know-how and our consultancy expertise to
            design, build, and operate world-class energy and infrastructural
            facilities that are engineered for safety and optimal efficiency
          </p>
          <Media>
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={youtube} alt="" />
          </Media>
        </Left>
        <Middle></Middle>
        <Right>
          <img src={steglitzer} alt="" />
        </Right>
      </Bottom>
    </Section>
  );
};

export default About;

const Right = styled.div`
  flex: 1;
  img{
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
`;
const Middle = styled.div`
  flex: 1;
`;

const Media=styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  img{
    width:50px;
  }
`
const Left = styled.div`
  height: 400px;
  padding: 40px;
  flex: 1;
`;

const Bottom = styled.div`
  height: 400px;
  width: 100%;
  background-color: #2e2e2e;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

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
`;

const Image = styled.section`
  border: 1px solid #0476d0;
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
`;

const Section = styled.section`
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 40px;
`;
