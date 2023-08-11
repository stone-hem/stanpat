import styled from "styled-components";
import location from "../assets/images/location.png";
import email from "../assets/images/email.png";
import address from "../assets/images/address.png";
import call from "../assets/images/call.png";
const Contacts = () => {
  return (
    <Section>
      <h3>Contact Us</h3>
      <Container>
        <Contact>
          <img src={location} alt="" />
          <p>
            Along, Eastern By-pass, at Karuguru area, Next to RFH Hospital on
            Pondo Arcade, 3rd floor, Suite AC3.
          </p>
        </Contact>
        <Contact>
        <img src={address} alt="" />
          <p>P.O. Box 50692 - 00200, Nairobi Kenya</p>
        </Contact>
        <Contact>
        <img src={call} alt="" />
          <p>+254 729 389 494 -</p>
        </Contact>
        <Contact>
        <img src={email} alt="" />
          <p>info@rnemoderntechnologies.com</p>
        </Contact>
      </Container>
      <hr />
      <MapForm>
        <Map></Map>
        <Form>
          <Flex>
            <label htmlFor="firstName">
              First Name <input type="text" />
            </label>
            <label htmlFor="lastName">
              Last Name <input type="text" />
            </label>
          </Flex>
          <Flex>
            <label htmlFor="email">
              Email*
              <input type="email" />
            </label>
            <label htmlFor="phone">
              Phone Number <input type="text" />
            </label>
          </Flex>
          <label htmlFor="subject">
            Subject <input type="text" />
          </label>

          <label htmlFor="message">
            Your Message*
            <textarea name="message" id="message" cols="30" rows="10"></textarea>
          </label>
          <button>Submit</button>
        </Form>
      </MapForm>
    </Section>
  );
};

export default Contacts;

const Flex = styled.div`
  display: flex;
  gap: 20px;
`;
const Form = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  textarea{
    border-radius:8px;
    color: black;
    padding: 10px;
  }
  button{
    background-color: #0476D0;
    color: black;
    border: none;
    padding: 8px;
    border-radius: 8px;
  }
  label {
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex: 1;
  }
  input {
    flex: 1;
    padding: 8px;
    border-radius: 8px;
    color: black;
  }
`;
const Map = styled.div`
  flex: 1;
  border: 1px solid yellow;
`;
const MapForm = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  padding: 20px;
`;
const Contact = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  img{
    width:50px;
    height: 50px;
  }
`;

const Container = styled.div`
  display: flex;
  gap: 20px;
  padding: 90px;
`;

const Section = styled.section`
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  hr {
    width: 90%;
  }
`;
