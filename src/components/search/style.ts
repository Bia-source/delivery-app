import theme from "@theme/theme";
import styled from "styled-components/native";


export const Container = styled.View`
 width: 100%;
 display: flex;
 flex-direction: row;
 gap: 10%;
 border-radius: 19%;
 border: solid 1.2px;
 border-color: ${theme.COLORS.GRAY_400};
 height: 15%;
 padding: 2% 2% 2% 5%;
`;

export const InputSeach = styled.TextInput`
flex: 1;
`;
