import React from "react";
import { Header } from "./layout/header/Header";
import styled from "styled-components";
import { Flexwrapper } from "./components/Flexwrapper";
import { SidebarLeft } from "./layout/leftAside/SidebarLeft";
import { SideBatRight } from "./layout/rigthAside/SideBatRight";
import { MyServices } from "./layout/section/services/MyServices";
import { Price } from "./layout/section/price/Price";
import { Recommendations } from "./layout/section/recommendations/Recommendations";
import { Education } from "./layout/section/education/Education";

function App() {
  return (
    <div>
      {/* <Flexwrapper gap="30px" justify={"center"}>
        <SidebarLeft/>
          <Header />
        <SideBatRight/>
      </Flexwrapper> */}
      <Header />
      <MyServices />
      <Price />
      <Recommendations/>
      <Education/>
    </div>
  );
}

export default App;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 305px 970px 108px;
  gap: 30px;
  font-weight: 800;
  font-size: 12px;
  text-align: center;
`;
