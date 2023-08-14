import styled from "styled-components";
import location from "../assets/images/location.png";
import email from "../assets/images/email.png";
import address from "../assets/images/address.png";
import call from "../assets/images/call.png";
const Contacts = () => {
  return (
    <Section>
       <Helmet>
        <title>Contact Us - Stanpat Global Limited</title>
        <meta
          name="Contact Us"
          content="Reach us easily on info@stanaptglobal.co.ke"
        />
      </Helmet>
      <h3>Contact Us</h3>
      <Container>
        <Contact>
          <img src={location} alt="" />
          <p>Muthaiga Suites - Thika Road</p>
        </Contact>
        <Contact>
          <img src={address} alt="" />
          <p>Farm Practice International, Muthaiga Suites, Thika Rd, Nairobi</p>
        </Contact>
        <Contact>
          <img src={call} alt="" />
          <p>+254 723810154</p>
        </Contact>
        <Contact>
          <img src={email} alt="" />
          <p>info@stanaptglobal.co.ke</p>
        </Contact>
      </Container>
      <hr />
      <MapForm>
        <Map>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.848160715492!2d36.83572258885497!3d-1.2635471999999732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173be55aaaab%3A0x78ab134a6a99ca00!2sMuthaiga%20Suites%20-%20Thika%20Road!5e0!3m2!1sen!2ske!4v1691847724377!5m2!1sen!2ske"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Map>
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
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
            ></textarea>
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
  textarea {
    border-radius: 8px;
    color: black;
    padding: 10px;
  }
  button {
    background-color: #0476d0;
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
  img {
    width: 50px;
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
