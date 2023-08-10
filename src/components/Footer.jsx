import  styled from "styled-components"

const Footer = () => {
  return (
    <Foot>
        <h5>@Copyright 2023 All rights reserved</h5>
    </Foot>
  )
}

export default Footer

const Foot=styled.footer`
background-color: #2E2E2E;
   height: 70px;
   display: flex;
   align-items: center;
   justify-content: center;
`