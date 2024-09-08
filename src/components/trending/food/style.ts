import theme from '@theme/theme';
import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  margin: 10px;
  gap: 3%;
`;

export const ViewPrice = styled.View`
  display: flex;
  flex-direction: row;
  gap: 6%;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${theme.FONT_FAMILY.BOLD};
`;

export const Image = styled.Image`
 width: 100%;
 height: 100%;
 border-radius: 10%;
`;

export const Price = styled.Text`
  color: ${theme.COLORS.GREEN_DARK};
  font-size: ${theme.FONT_SIZE.XMD}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
`;

export const OldPrice = styled.Text`
  color: ${theme.COLORS.GRAY_300};
  font-size: ${theme.FONT_SIZE.XSM}px;
  text-decoration: line-through;
`;

export const PreparationTime = styled.Text`
  color: ${theme.COLORS.GRAY_300};
`;

export const ViewRating = styled.View`
  background-color: ${theme.COLORS.GRAY_100};
  border-radius: 10%;
  display: flex;
  flex-direction: row-reverse;
  position: absolute;
  align-self: flex-end;
  width: 29%;
  height: 15%;
  align-items: center;
  justify-content: center;
  gap: 3%;
  margin-top: 10px;
  right: 3%;
`;

export const ViewImageBackground = styled.View`
 width: 170px;
 height: 50%;
 border-radius: 10%;
 display: flex;
`

export const RatingNumber = styled.Text`
 color: ${theme.COLORS.WHITE};
 font-size: ${theme.FONT_SIZE.SM}
`;

