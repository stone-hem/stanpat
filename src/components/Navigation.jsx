import { useState } from "react";
import styled from "styled-components";
import menu from "../assets/icons/menu.png";
import logo from "../assets/icons/logo.png";
import { NavLink } from "react-router-dom";

export default function Navigation({ toggle }) {
  const [navColorChange, setNavColorChange] = useState(false);
  const changeNavColor = () => {
    window.scrollY >= 300 ? setNavColorChange(true) : setNavColorChange(false);
  };
  window.addEventListener("scroll", changeNavColor);

  return (
    <>
      <Header>
        <h5>Hello!!! Find us on +254712345678</h5>
      </Header>
      <Container className={navColorChange ? "changeColor" : ""}>
        <img src={logo} alt=""  className="logo"/>
        <Menu>
          <Item>
            <NavigationLink
              to="/home"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Home
            </NavigationLink>
          </Item>
          <Item>
            <NavigationLink to="/about">About</NavigationLink>
          </Item>
          <Item>
            <NavigationLink to="/services">Services</NavigationLink>
          </Item>
          <Item>
            <NavigationLink to="/projects">projects</NavigationLink>
          </Item>
          <Item>
            <NavigationLink to="/news">latest news</NavigationLink>
          </Item>
        </Menu>

        <Icon>
          <button>
            <NavigationLink to="/contacts">Contacts</NavigationLink>
          </button>
          <img src={menu} onClick={toggle} />
        </Icon>
      </Container>
    </>
  );
}

const Header = styled.header`
  height: 35px;
  background: #2E2E2E;
  display: flex;
  align-items: center;
  justify-content: center;
  h5 {
    text-align: center;
  }
`;

const Container = styled.nav`
  height: 120px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  background: black;
  .logo{
    width: 200px;
  }
  &.changeColor {
    background: black;
    color: white;
    transition: 1s ease-in-out;
  }
  @media screen and (max-width: 960px) {
    transition: 1s all ease;
  }
`;

const Menu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  /* margin-right: -22px; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Item = styled.li`
  height: 60px;
  &:hover {
    background: #0476D0;
    transition: 1s ease;
    transform: scale(1.05);
    border-radius: 1rem;
    color: white;
  }
`;

const NavigationLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    background: #0476D0;
    border-radius: 8px;
  }
`;

const Icon = styled.span`
  button {
    padding: 8px;
    border: none;
    border-radius: 8px;
    height: 60px;
    background-color: #0476D0;
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
  img {
    display: none;
    @media screen and (max-width: 768px) {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 60%);
      width: 2rem;
      border-radius: 50%;
      border: yellow;
      cursor: pointer;
      background-color: white;

      &.changeColor {
        color: white;
        transition: 2s ease-in-out;
      }
    }
  }
`;
