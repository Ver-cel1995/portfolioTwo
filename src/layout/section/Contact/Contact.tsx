import styled from "styled-components";
import { Container } from "../../../components/Container";
import { Flexwrapper } from "../../../components/Flexwrapper";
import { ContactInput } from "./contactInput/ContactInput";
import { ContactInfo } from "./contactInfo/ContactInfo";
import { Partners } from "./partners/Partners";

export const Contact = () => {
  return (
    <Styledcontact>
      <Container>
        <Flexwrapper justify="center" gap="30px">
          <ContactInput />
          <ContactInfo />
        </Flexwrapper>
          <Cart src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60031.28772452685!2d-122.47212112930892!3d37.743005444400424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2z0KHQsNC9LdCk0YDQsNC90YbQuNGB0LrQviwg0JrQsNC70LjRhNC-0YDQvdC40Y8sINCh0KjQkA!5e0!3m2!1sru!2sru!4v1710342293709!5m2!1sru!2sru" width="100%" height="300"/>
          <Partners/>
      </Container>
    </Styledcontact>
  );
};

const Styledcontact = styled.section``;
const Cart = styled.iframe`
  border: 0;
  margin: 70px 0;
`
