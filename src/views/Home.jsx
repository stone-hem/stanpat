import styled from "styled-components";

const Home = () => {
  return (
    <Section>
      <Container>
        <h3>This is home jshujhnojdiwodjpiodjdojlkdkod</h3>
      </Container>
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
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </Body>
      </Featured>
    </Section>
  );
};

export default Home;

const Card=styled.div`
    width: 200px;
    height: 200px;
    border: 1px solid #0476D0;
    border-radius: 8px;
`

const Body=styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
`

const Featured=styled.div`
width: 70%;
height: 600px;
border: 2px solid #0476D0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 20px;
border-radius: 8px;
`

const About = styled.section`
padding: 0 20px;
h3:first-of-type{
    padding: 20px;
}
p{
    padding: 20px 0px;
}
 text-align: center;
`;

const Container = styled.div`
  height: 90vh;
  width: 100%;
  border: 2px solid white;
  background-image: url("firm.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Section = styled.section`
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;
