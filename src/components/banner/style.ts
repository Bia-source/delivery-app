import theme from "@theme/theme";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
`;

export const ScrollBanner = styled.ScrollView`
  display: flex;
  flex-direction: row;
`;

export const BannerPressable = styled.Pressable`
`;

export const Image = styled.Image`
width: 368px;
height: 160px;
border-radius: 15%;
`;

export const ViewSeparator = styled.View`
 background-color: ${theme.COLORS.GRAY_500};
 height: 160px;
 width: 15px;
`;

export const Text = styled.Text``;
