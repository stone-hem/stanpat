import styled from "styled-components";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Home = () => {
  return (
    <Section>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Container>
            <h2>Welcome to</h2>
            <h2>Stanpat Global Limited</h2>
            <button>About Us</button>
            <Values>
              <Value>
                <h3>Our Mission</h3>
                <p>
                  We’re a leading engineering, technology and energy services
                  company that helps our clients meet the world’s evolving
                  energy needs
                </p>
              </Value>
              <Value>
              <h3>Our Vision</h3>
                <p>
                  We’re a leading engineering, technology and energy services
                  company that helps our clients meet the world’s evolving
                  energy needs
                </p>
              </Value>
              <Value>
              <h3>Our Purpose</h3>
                <p>
                  We’re a leading engineering, technology and energy services
                  company that helps our clients meet the world’s evolving
                  energy needs
                </p>
              </Value>
            </Values>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <Container>
          <h2>Welcome to</h2>
          <h2>Stanpat Global Limited</h2>
          <p className="slide-2-p">
          We’re a leading engineering, technology and energy services company
          that helps our clients meet the world’s evolving energy needs. We use
          our engineering know-how and our consultancy expertise to design,
          build, and operate world-class energy and infrastructural facilities
          that are engineered for safety and optimal efficiency. We operate in a
          range of markets and work across the entire asset life-cycle – from
          design to decommissioning.
        </p>
          </Container>
        </SwiperSlide>
      </Swiper>

      <About>
        <h3>About</h3>
        <h3>Stanpat Global Limited</h3>
        <p>
          We’re a leading engineering, technology and energy services company
          that helps our clients meet the world’s evolving energy needs. We use
          our engineering know-how and our consultancy expertise to design,
          build, and operate world-class energy and infrastructural facilities
          that are engineered for safety and optimal efficiency. We operate in a
          range of markets and work across the entire asset life-cycle – from
          design to decommissioning.
        </p>

        <hr />
      </About>
      <Featured>
        <h3>Featured Projects</h3>
        <Body>
          <Card>
            <Top><h4>2018</h4></Top>
            <Bottom>
              <p>Kenya Pipeline Company</p>
            </Bottom>
          </Card>
          <Card>
            <Top><h4>2019</h4></Top>
            <Bottom><p>Kenya Pipeline Company</p></Bottom>
          </Card>
          <Card>
            <Top><h4>2020</h4></Top>
            <Bottom><p>Kenya Pipeline Company</p></Bottom>
          </Card>
          <Card>
            <Top><h4>2021</h4></Top>
            <Bottom><p>Kenya Pipeline Company</p></Bottom>
          </Card>
          <Card>
            <Top><h4>2022</h4></Top>
            <Bottom><p>Kenya Pipeline Company</p></Bottom>
          </Card>
          <Card>
            <Top><h4>Currently</h4></Top>
            <Bottom><p>Kenya Pipeline Company</p></Bottom>
          </Card>
        </Body>
      </Featured>
    </Section>
  );
};

export default Home;


const Values = styled.div`
  display: flex;
  gap: 20px;
  width: 60%;
  @media screen and (max-width:768px){
    display: none;
  }
`;

const Value = styled.div`
  border: 1px solid black;
  height: 180px;
  padding: 10px;
  flex: 1;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.3);
  &:hover{
    background-color: #8AFFFF;
  }
  h3{
    text-align: center;
    color: black;
  }
  p{
    color: black;
  }
`;

const Bottom=styled.div`
  flex: 3;
  background-color: #0476d0;
  padding: 10px;
  p{
    text-align: center;
  }
`

const Top=styled.div`
  flex: 1;
  background-color: white;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  h4{
    color: black;
    text-align: center;
    padding: 10px;
  }
`

const Card = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  @media screen and (max-width:768px){
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Featured = styled.div`
  width: 60%;
  border: 2px solid #0476d0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 40px;
  @media screen and (max-width:768px){
    width: 90%;
  }
`;

const About = styled.section`
  padding: 0 20px;
  h3:first-of-type {
    padding: 20px;
  }
  p {
    padding: 20px 0px;
  }
  text-align: center;
`;

const Container = styled.div`
  height: 90vh;
  width: 100vw;
  border: 2px solid white;
  background-image: url("home.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .slide-2-p{
    max-width: 60%;
  }
  h2 {
    color: yellow;
  }
  button {
    border: 1px solid black;
    border-radius: 8px;
    padding: 8px;
    color: black;
    background-color: #ffff8a;
  }
`;

const Section = styled.section`
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  .swiper {
    width: 100%;
    height: 100%;
  }
`;
