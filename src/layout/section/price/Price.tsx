import styled from "styled-components";
import { WrapSectionTittle } from "../../../components/WrapSectionTittle";
import { Container } from "../../../components/Container";
import { Flexwrapper } from "../../../components/Flexwrapper";
import { PricePlans } from "./PricePlans";
import { silverItems } from "../../../components/massivePrice/SilverIems";
import { goldItems } from "../../../components/massivePrice/GoldItems";
import { dimondItems } from "../../../components/massivePrice/DimondItems";



export const Price = () => {
  return (
    <StyledPrice>
      <Container>
        <WrapSectionTittle
          title={"Price plans"}
          text={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"
          }
        />
        <Flexwrapper justify="space-between" gap="21px" align="center">
          <PricePlans
            title={"Silver"}
            price="$0,00"
            text="For most businesses that want to optimize web queries"
            items={silverItems}
          />

          <PricePlans
            isMostPopular={true}
            title={"Gold"}
            price="$50,00"
            text="For most businesses that want to optimize web queries"
            items={goldItems}
          />
          <PricePlans
            title={"Dimond"}
            price="$80,00"
            text="For most businesses that want to optimize web queries"
            items={dimondItems}
          />
        </Flexwrapper>
      </Container>
    </StyledPrice>
  );
};

const StyledPrice = styled.section``;
