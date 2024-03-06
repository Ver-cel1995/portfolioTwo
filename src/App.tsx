import React from "react";
import { Header } from "./layout/header/Header";
import styled from "styled-components";
import { Flexwrapper } from "./components/Flexwrapper";
import { SidebarLeft } from "./layout/leftAside/SidebarLeft";
import { SideBatRight } from "./layout/rigthAside/SideBatRight";

function App() {
  return (
    <div>
      <Flexwrapper gap="30px" justify={"center"}>
        <SidebarLeft/>
          <Header />
        <SideBatRight/>
      </Flexwrapper>
      
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
