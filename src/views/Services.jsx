import styled from "styled-components";
import service from "../assets/images/service.jpg";
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
        <Service>
          <Image><img src={service}alt="" /></Image>
          <h2>Multidisciplinary Engineering Capability</h2>
          <p>Our teams provide engineering solutions across the asset life cycle. From conceptual studies and FEED, to ...</p>
          <button>Read More...</button>
        </Service>
        <Service>
          <Image><img src={service}alt="" /></Image>
          <h2>Multidisciplinary Engineering Capability</h2>
          <p>Our teams provide engineering solutions across the asset life cycle. From conceptual studies and FEED, to ...</p>
          <button>Read More...</button>
        </Service>
        <Service>
          <Image><img src={service}alt="" /></Image>
          <h2>Multidisciplinary Engineering Capability</h2>
          <p>Our teams provide engineering solutions across the asset life cycle. From conceptual studies and FEED, to ...</p>
          <button>Read More...</button>
        </Service>
        <Service>
          <Image><img src={service}alt="" /></Image>
          <h2>Multidisciplinary Engineering Capability</h2>
          <p>Our teams provide engineering solutions across the asset life cycle. From conceptual studies and FEED, to ...</p>
          <button>Read More...</button>
        </Service>
      </Grid>
    </Section>
  );
};

export default Services;

const Image=styled.div`
  flex:5;
  max-width: 200px;
  max-height: 100%;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const Service=styled.div`
  height: 400px;
  border: 1px solid green;
  border-radius: 8px;
  display:flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-direction:column;
  h2{
    flex:1;
    text-align: center;
  }
  p{
    flex:1;
    text-align: center;
  }
  button{
    width: 100%;
    flex:1;
    color:white;
    background:#0476d0;
    border:none;
  }
`

const Grid=styled.div`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  width: 100%;
  padding: 20px;
  margin-bottom: 40px;
  @media screen and (max-width:768px){
    grid-template-columns: repeat(1,1fr);
    padding: 5;
  }
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
    @media screen and (max-width:768px){
    max-width: 90%;
  }
  }
`;
