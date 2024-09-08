import theme from "@theme/theme";
import styled from "styled-components/native";

type HomeStyleProps = {
 distanceMarginTop: number;
}

export const Container = styled.ScrollView`
  flex: 1; 
  background-color: ${theme.COLORS.GRAY_600};
  display: flex;
  aling-items: center;
  flex-direction: column;
`;

export const SectionCards = styled.View`
  margin-top: 6%;
  padding-left: 3%;
  padding-right: 3%;
`;

export const ViewHeader = styled.View<HomeStyleProps>`
  margin-top: ${({ distanceMarginTop })=> distanceMarginTop}px;
  padding-left: 3%;
  padding-right: 3%;
  display: flex;
  gap: 15%;
  width: 100%;
`;