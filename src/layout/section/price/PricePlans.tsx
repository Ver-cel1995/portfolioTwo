import styled from "styled-components";
import { ListServicesPrice } from "./ListServicesPrice";


type PricePlansPropsType = {
  title?: string;
  price: string;
  text: string;
};

export const PricePlans = (props: PricePlansPropsType) => {
  return (
    <StyledPricePlans>
      <PriceTitle>{props.title}</PriceTitle>
      <Value>
        <ValuePrice>{props.price} <span>/Hour</span></ValuePrice>
        <ValueText>{props.text}</ValueText>
      </Value>
      <ListServicesPrice itemPrice="UI Design"/>
      <ListServicesPrice itemPrice="Web Development"/>
      <ListServicesPrice itemPrice="Logo Design"/>
      <ListServicesPrice itemPrice="Seo Optimization"/>
      <ListServicesPrice itemPrice="WordPress Integration" />
      <ListServicesPrice itemPrice="5 Websites"/>
      <ListServicesPrice itemPrice="Unlimited User"/>
      <ListServicesPrice itemPrice="20 GB Bandwith"/>
      <ButtonPrice>ORDER NOW</ButtonPrice>
    </StyledPricePlans>
  );
};

const StyledPricePlans = styled.div`
  background-color: #fff;
  padding: 54px 31px 25px;
  transition: all 0.5s ease-in-out;

  &:hover  {
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
    transition: all 0.5s ease-in-out;
}

  span {
    font-weight: 400;
    font-size: 15px;
  }
`;

const PriceTitle = styled.h3``;

const Value = styled.div``;

const ValuePrice = styled.h2`
  margin: 19px 0 8px;
`;

const ValueText = styled.p``;

const ButtonPrice = styled.button`
    border-radius: 30px;
    box-shadow: 0px 0 10px 0px rgba(0, 0, 0, 0.15);
    padding: 11px 0 10px;
    width: 170px;
`;
