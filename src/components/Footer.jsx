import  styled from "styled-components"
import facebook from "../assets/images/facebook-1.png";
import instagram from "../assets/images/instagram.png";
import youtube from "../assets/images/youtube.png";
import steglitzer from "../assets/images/steglitzer.jpg";
import site from "../assets/images/site.jpg";

const Footer = () => {
  return (
    <Foot>
        <Bottom>
        <Middle>
        <img src={site} alt="" />
        </Middle>
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
      
        <Right>
          <img src={steglitzer} alt="" />
        </Right>
      </Bottom>
      <hr />
      <BottomText>
     
        <h5>@Copyright 2023, All rights preserved</h5>
      </BottomText>
    </Foot>
  )
}

export default Footer

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
  img{
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
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
  height: auto;
  width: 100%;
  background-color: #2e2e2e;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  @media screen and (max-width:768px){
    flex-direction: column;
  }
`;

const BottomText = styled.div`
  height: 40px;
  text-align: center;
`;
const Foot=styled.footer`
display: flex;
flex-direction: column;
gap: 20px;
align-items: center;
background-color: #2e2e2e;
hr{
  border: 1px solid grey;
  width: 95%;
}
`