import styled from "styled-components";
import { Icon } from "../../../../components/Icon";
import profile1 from "../../../assets/img/Profile.png";
import { theme } from "../../../../styles/Theme";

type RecommendationPropsType = {
  title: string;
  text: string;
  photo?: string;
  name: string;
  specialization: string;
};

export const RecommendationsList = (props: RecommendationPropsType) => {
  return (
    <StyledRecommendationsList>
      <WrapStar>
        <Icon iconId="star" width="20px" height="20" viewbox="0 0 20 20" />
        <Icon iconId="star" width="20px" height="20" viewbox="0 0 20 20" />
        <Icon iconId="star" width="20px" height="20" viewbox="0 0 20 20" />
        <Icon iconId="star" width="20px" height="20" viewbox="0 0 20 20" />
        <Icon iconId="star" width="20px" height="20" viewbox="0 0 20 20" />
      </WrapStar>
      <TitleRecommendations>{props.title}</TitleRecommendations>
      <TextRecommendations>{props.text}</TextRecommendations>
      <WrapAuthor>
        <PhotoAuthor src={props.photo} />
        <WrapDescription>
          <NameAuthor>{props.name}</NameAuthor>
          <SpecializationAuthour>{props.specialization}</SpecializationAuthour>
        </WrapDescription>
      </WrapAuthor>
    </StyledRecommendationsList>
  );
};

const StyledRecommendationsList = styled.div`
  background-color: ${theme.colors.white};
  padding: 25px;
  width: 310px;
`;
const WrapStar = styled.div``;
const TitleRecommendations = styled.h3``;
const TextRecommendations = styled.p`
  margin: 18px 0 30px;
  color: ${theme.colors.grey};
`;
const WrapAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;
const WrapDescription = styled.div``;
const PhotoAuthor = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;
const NameAuthor = styled.h3``;
const SpecializationAuthour = styled.span`
  color: ${theme.colors.grey};
`;
