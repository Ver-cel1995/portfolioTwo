import styled from "styled-components";
import { theme } from "../../../../styles/Theme";

type ItemPortfoliosTypeProps = {
    items: string
}

export const ItemPortfolios = (props: ItemPortfoliosTypeProps) => {
    return (
        <StyledItemPortfolios>
            <StyledItemsPortfolios>{props.items}</StyledItemsPortfolios>
        </StyledItemPortfolios>
    );
};

const StyledItemPortfolios = styled.li`
    
`
const StyledItemsPortfolios = styled.a`

    &:hover {
        transition: all 0.5s ease-in-out;
        color: ${theme.colors.yellow};
        width: 500px;
    }
`