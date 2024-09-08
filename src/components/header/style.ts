import theme from "@theme/theme";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Pressable = styled.Pressable`
   background-color: ${theme.COLORS.WHITE};
   border-radius: 90%;
   width: 11%;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
`;

export const ViewLocalization = styled.View`
   display: flex;
   flex-direction: row;
   align-items: center;
   gap: 3%;
`;

export const ViewLocalizationGenaral = styled.View`
   gap: 3%;
   display: flex;
   align-items: center;
`;

export const TitletLocalization = styled.Text`
  font-size: ${theme.FONT_SIZE.SM}px;
  color: ${theme.COLORS.GRAY_300};
`;


export const TextLocalization = styled.Text`
  font-size: ${theme.FONT_SIZE.MD}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
`;





