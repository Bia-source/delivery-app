import { SizeDefault } from "@shared/styles/global";
import theme from "@theme/theme";
import styled from "styled-components/native";

export type SectionStyleProps = {
  size: SizeDefault;
};

export const Container = styled.View`
 display: flex;
 flex-direction: column;
`;

export const FirstView = styled.View`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 align-items: center;
`;

export const TitleSection = styled.Text<SectionStyleProps>`
  font-size: ${({ size })=> theme.FONT_SIZE[size]}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
`;

export const TextMore = styled.Text``;

export const Pressable = styled.Pressable``;

export const Image = styled.Image``;
