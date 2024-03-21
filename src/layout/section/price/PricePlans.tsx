import styled from "styled-components";
import { ItemsServicesPrice } from "./ListServicesPrice";
import { Button } from "../../../components/Button";
import { theme } from "../../../styles/Theme";

type PricePlansPropsType = {
  title?: string;
  price: string;
  text: string;
  isMostPopular?: boolean;
  items: any[];
};

export const PricePlans = (props: PricePlansPropsType) => {
  return (
    <StyledPricePlans>
      {/* {props.isMostPopular && (
        <MostPopularLabel>Most Popular</MostPopularLabel>
      )} */}
      <PriceTitle>{props.title}</PriceTitle>
      <Value>
        <ValuePrice>
          {props.price} <span>/Hour</span>
        </ValuePrice>
        <ValueText>{props.text}</ValueText>
      </Value>
      <ListServices>
        {props.items.map((i) => {
          return (
            <ItemsServicesPrice
              itemPrice={i.text}
              icon={i.icon}
              color={i.color}
            />
          );
        })}
      </ListServices>
      <Button text="order now" />
    </StyledPricePlans>
  );
};

// const MostPopularLabel = styled.div`
//   background-color: #FFB400;
//   height: 30px;
//   width: 100%;
// `

const StyledPricePlans = styled.div`
  background-color: ${theme.colors.white};
  padding: 54px 31px 25px;
  max-width: 310px;
  transition: all 0.5s ease-in-out;
  position: relative;
  border-radius: 15px;

  &:hover {
    box-shadow: ${theme.shadow.primary};
    cursor: pointer;

    button {
      background-color: ${theme.colors.yellow};
      color: ${theme.colors.white};
      border-radius: 30px;
    }
  }

  &:nth-child(2)::before {
    content: "Most Popular";
    width: 100%;
    height: 30px;
    font-size: 15px;
    background-color: ${theme.colors.yellow};
    position: absolute;
    left: 0;
    top: 15px;
    transform: translateY(-50%);
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }

  span {
    font-weight: 400;
    font-size: 15px;
  }

  button {
    width: 169px;
  }
`;

const PriceTitle = styled.h2``;

const Value = styled.div``;

const ValuePrice = styled.h2`
  margin: 19px 0 8px;
`;

const ValueText = styled.p``;

const ListServices = styled.ul`
  margin-top: 21px;
`;
