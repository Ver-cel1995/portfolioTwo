import styled from "styled-components";
import { PhotoItems } from "../../portfolio/portfolios/PhotoItems";
import { theme } from "../../../../styles/Theme";
import vector from "../../../../assets/vectorImg/vector.svg";

type WrapBlogPropsType = {
  photo?: string;
  title: string;
  text: string;
  link: string;
};

export const WrapBlog = (props: WrapBlogPropsType) => {
  return (
    <StyledWrapBlog>
      <PhotoItems srcPhoto={props.photo} />
      <WrapDescription>
        <TitleBlog>{props.title}</TitleBlog>
        <TextBlog>{props.text}</TextBlog>
        <LinkBlog>{props.link}</LinkBlog>
      </WrapDescription>
    </StyledWrapBlog>
  );
};

const StyledWrapBlog = styled.div`
  background-color: ${theme.colors.white};
  width: 310px;
`;
const WrapDescription = styled.div`
  padding: 25px 36px 18px 25px;
`;
const TitleBlog = styled.h3``;
const TextBlog = styled.p`
  margin: 8px 0;
  color: ${theme.colors.grey};
`;
const LinkBlog = styled.a`
  color: ${theme.colors.yellow};
  font-size: 18px;
  font-weight: 500;
  position: relative;

&::after {
    content: "";
    width: 5px;
    height: 7px;
    background: url(${vector});
    position: absolute;
    bottom: 5px;
    right: -15px;
    transform: translateX(-100%);
    transition: transform 0.5s ease, opacity 0.5s ease;
    opacity: 0;

}
 &:hover::after {
    transform: translateX(0); 
    opacity: 1;
 }

`;
