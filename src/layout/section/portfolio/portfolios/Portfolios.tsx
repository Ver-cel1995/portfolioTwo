import styled from "styled-components";
import { Flexwrapper } from "../../../../components/Flexwrapper";
import { ItemPortfolios } from "./ItemPortfolios";
import { PhotoItems } from "./PhotoItems";
import portfolio1 from "../../../../assets/img/portfolio1.png";
import portfolio2 from "../../../../assets/img/portfolio2.png";
import portfolio3 from "../../../../assets/img/portfolio3.png";
import portfolio4 from "../../../../assets/img/portfolio4.png";
import portfolio5 from "../../../../assets/img/portfolio5.png";
import portfolio6 from "../../../../assets/img/portfolio6.png";
import portfolio7 from "../../../../assets/img/portfolio7.png";
import portfolio8 from "../../../../assets/img/portfolio8.png";
import portfolio9 from "../../../../assets/img/portfolio9.png";

export const Portfolios = () => {
    return (
    <StyledPortfolios>
        <MainPortfolios>
            <ItemPortfolios items="All categories" />
            <ItemPortfolios items="UI Design" />
            <ItemPortfolios items="Web Templates" />
            <ItemPortfolios items="Logo" />
            <ItemPortfolios items="Branding" />
        </MainPortfolios>
        <WrapperPortfolios>
            <Flexwrapper wrap="wrap" gap="20px" justify="center">
                <PhotoItems srcPhoto={portfolio1}/>
                <PhotoItems srcPhoto={portfolio2}/>
                <PhotoItems srcPhoto={portfolio3}/>
                <PhotoItems srcPhoto={portfolio4}/>
                <PhotoItems srcPhoto={portfolio5}/>
                <PhotoItems srcPhoto={portfolio6}/>
                <PhotoItems srcPhoto={portfolio7}/>
                <PhotoItems srcPhoto={portfolio8}/>
                <PhotoItems srcPhoto={portfolio9}/>
            </Flexwrapper>
        </WrapperPortfolios>
    </StyledPortfolios>
    );
};

const StyledPortfolios = styled.div`
    margin: 50px auto;
`;
const MainPortfolios = styled.ul`
    display: flex;
    justify-content: space-between;
    max-width: 610px;
    width: 100%;
    margin: 0 auto 40px;
    font-weight: bold;
`

const WrapperPortfolios = styled.div`
    
`