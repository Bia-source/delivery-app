import theme from "@theme/theme";
import styled from "styled-components/native";

type HomeStyleProps = {
 distanceMarginTop: number;
}

export const Container = styled.ScrollView`
  flex: 1; 
  background-color: ${theme.COLORS.GRAY_500};
  display: flex;
  aling-items: center;
`;

export const Teste = styled.View``;

export const ViewHeader = styled.View<HomeStyleProps>`
  margin-top: ${({ distanceMarginTop })=> distanceMarginTop}px;
  padding-left: 3%;
  padding-right: 3%;
  display: flex;
  gap: 15%;
`;