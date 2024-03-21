import { styled } from "styled-components";

type ListServicesPropsType = {
  itemPrice?: string;
  icon?: React.ReactNode;
  color: string;
};

export const ItemsServicesPrice = (props: ListServicesPropsType) => {
  return (
    <ItemListServices color={props.color}>
      <div>
        {props.icon}
        {props.itemPrice}
      </div>
    </ItemListServices>
  );
};

const ItemListServices = styled.li<ListServicesPropsType>`
  margin-bottom: 16px;
  text-align: start;
  color: ${(props) => props.color};

  & > div {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;
