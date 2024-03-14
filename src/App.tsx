import React from "react";
import { Header } from "./layout/header/Header";
import styled from "styled-components";
import { Flexwrapper } from "./components/Flexwrapper";
import { SidebarLeft } from "./layout/leftAside/SidebarLeft";
import { Sidebar } from "./layout/rigthAside/SideBatRight";
import { MyServices } from "./layout/section/services/MyServices";
import { Price } from "./layout/section/price/Price";
import { Recommendations } from "./layout/section/recommendations/Recommendations";
import { Education } from "./layout/section/education/Education";
import { WorkHistory } from "./layout/section/workHistory/WorkHistory";
import { Portfolio } from "./layout/section/portfolio/Portfolio";
import { Blog } from "./layout/section/blog/Blog";
import { Contact } from "./layout/section/Contact/Contact";
import { Footer } from "./layout/footer/Footer";

function App() {
  return (
    <div>
      {/* <Flexwrapper gap="30px" justify={"space-between"}>
        <SidebarLeft/>
        <Main>
          <Header />
          <MyServices />
          <Price />
          <Recommendations/>
          <Education/>
          <WorkHistory/>
          <Portfolio/>
          <Blog/>
        </Main>
        <SideBatRight/>
      </Flexwrapper> */}
      <MainContainer>
        <Flexwrapper gap="30px">
        <Sidebar/>
          <Main>
            <Header />
            <MyServices />
            <Price />
            <Recommendations />
            <Education />
            <WorkHistory />
            <Portfolio />
            <Blog />
            <Contact />
            <Footer />
          </Main>
        </Flexwrapper>
      </MainContainer>
    </div>
  );
}

export default App;

const MainContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;
const Main = styled.div``;

