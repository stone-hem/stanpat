import styled from "styled-components";
const Services = () => {
  return (
    <Section>
      <h3>Our Services</h3>
      <p>
        Our services span the entire project life-cycle. We take the project
        management approach to execute client projects from the initial
        conception through to commissioning and facility management.
      </p>
      <Grid>
        <Service></Service>
        <Service></Service>
        <Service></Service>
        <Service></Service>
      </Grid>
    </Section>
  );
};

export default Services;

const Service=styled.div`
  height: 350px;
  border: 1px solid green;
`

const Grid=styled.div`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  width: 100%;
  padding: 20px;
`

const Section = styled.section`

  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  p{
    max-width: 50%;
    text-align: center;
  }
`;
