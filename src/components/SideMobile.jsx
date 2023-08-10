import styled from 'styled-components'
import close from '../assets/icons/close.png'

function SideMobile({isOpen,toggle}) {
  return (
    <Container isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <img src={close} alt="" />
        </Icon>
        <Wrap>
            <Menu>
                <SideLink to="home" onClick={toggle}>Home</SideLink>
                <SideLink to="about" onClick={toggle}>About</SideLink>
                <SideLink to="skills" onClick={toggle}>Skills</SideLink>
                <SideLink to="services" onClick={toggle}>Services</SideLink>
                <SideLink to="portfolio" onClick={toggle}>Portfolio</SideLink>
                <SideLink to="contact" onClick={toggle}>Contact</SideLink>
            </Menu>
        </Wrap>
    </Container>
  )
}

export default SideMobile

const Container=styled.aside`
position:fixed;
z-index:999;
width:50%;
height:auto;
background-color:black;
display:grid;
align-items:center;
top:0;
right:0;
transition:1s ease-in-out;
opacity:${({isOpen})=>(isOpen ? '100%':'0')};
top:${({isOpen})=>(isOpen ? '0':'-100%')};

`

const Icon=styled.div`
position:absolute;
top:1.2rem;
right:1.5rem;
background:white;
font-size:1.5rem;
cursor:pointer;
color: white;
outline:none;
`


const Wrap=styled.div`
color:white;
`

const Menu=styled.div`
display:grid;
grid-template-columns:1fr;
grid-template-rows:repeat(6,60px);
text-align:center;
justify-content:center;

@media screen and(max-width:480px){
    grid-template-rows:repeat(6,40px);
}

`

const SideLink=styled.a`
display:flex;
align-items:center;
justify-content:center;
font-size:1rem;
text-decoration:none;
list-style:none;
transition:0.5s ease-in-out;
color:white;
cursor:pointer;
&:hover{
   transform:scale(1.05);
    transition:0.4s ease-in-out;
}
`




