import styled from "styled-components";
import { serviceData } from "../../data";
import { useState } from "react";
import { useEffect } from "react";

const Services = () => {
  const [isModal, setIsModal] = useState(false);
  const setModal = (item) => {
    useEffect(() => {
      
    },[]);
  };
  return (
    <Section>
      <h3>Our Services</h3>
      <p>
        Our services span the entire project life-cycle. We take the project
        management approach to execute client projects from the initial
        conception through to commissioning and facility management.
      </p>
      <Grid>
        {serviceData.map((item) => (
          <Service key={item.id}>
            <Image>
              <img src={item.image} alt="" />
            </Image>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button onClick={() => setIsModal(true)}>Read More...</button>
          </Service>
        ))}
        {isModal && (
          <div className="modal">
            <div className="modal-title">My Public Github Links</div>
            <div className="modal-body"></div>
            <button onClick={() => setIsModal(false)}>close</button>
          </div>
        )}
      </Grid>
    </Section>
  );
};

export default Services;

const Image = styled.div`
  flex: 5;
  height: 250px;
  width: 100%;
  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
`;

const Service = styled.div`
  height: 400px;
  width: 100%;
  border: 1px solid green;
  border-radius: 8px;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h2 {
    height: 50px;
    text-align: center;
  }
  p {
    height: 50px;
    min-width: 80%;
    text-align: center;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
  button {
    width: 100%;
    height: 50px;
    color: white;
    background: #0476d0;
    border: none;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  width: 100%;
  padding: 20px;
  margin-bottom: 40px;
  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    max-width: 100%;
    height: 400px;
    max-height: 100%;
    background: white;
    box-shadow: 3px 3px 10px rgba(0 0 0 / 0.5);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 5;
  }
`;

const Section = styled.section`
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  p {
    max-width: 50%;
    text-align: center;
    @media screen and (max-width: 768px) {
      max-width: 90%;
    }
  }
`;
