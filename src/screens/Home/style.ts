import theme from "@theme/theme";
import styled from "styled-components/native";

type HomeStyleProps = {
 distanceMarginTop: number;
}

export const Container = styled.ScrollView`
  flex: 1; 
  background-color: ${theme.COLORS.GRAY_500};
`;

export const ViewHeader = styled.View<HomeStyleProps>`
  margin-top: ${({ distanceMarginTop })=> distanceMarginTop}px;
  padding-left: 3%;
  padding-right: 3%;
`;