import styled from "styled-components";
import electricity from "../assets/images/electricity.jpg";
import light from "../assets/images/light.jpg";
import workers from "../assets/images/workers.jpg";
import plumb from "../assets/images/plumb.jpg";

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
          <Image><img src={light}alt="" /></Image>
          <h2>Electrical and mechanical consulting services</h2>
          <p>We have the experience on services design, preparation of Bills of Quantities,tendering supervising and testing and commissioning Project.</p>
          <button>Read More...</button>
        </Service>
        <Service>
          <Image><img src={electricity}alt="" /></Image>
          <h2>Energy Audit</h2>
          <p>We offer services to determine the status of your power and advice on the best way to reduce consumption and improve the power.</p>
          <button>Read More...</button>
        </Service>
        <Service>
          <Image><img src={workers}alt="" /></Image>
          <h2>Electrical Installations</h2>
          <p>Coupled with engineers and qualified technicians we offer quality and value to your project .We design and build to your satisfaction.</p>
          <button>Read More...</button>
        </Service>
        <Service>
          <Image><img src={plumb}alt="" /></Image>
          <h2>Plumbing Installations</h2>
          <p>Coupled with engineers and qualified technicians we offer quality and value to your project .We design and build to your satisfaction.</p>
          <button>Read More...</button>
        </Service>
      </Grid>
    </Section>
  );
};

export default Services;

const Image=styled.div`
  flex:5;
  height: 250px;
  width: 100%;
  img{
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
`

const Service=styled.div`
  height: 400px;
  width: 100%;
  border: 1px solid green;
  border-radius: 8px;
  display:flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-direction:column;
  h2{
    height: 50px;
    text-align: center;
  }
  p{
    height: 50px;
    min-width: 80%;
    text-align: center;
    @media screen and (max-width:768px){
      width: 100%;
  }
  }
  button{
    width: 100%;
    height: 50px;
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
