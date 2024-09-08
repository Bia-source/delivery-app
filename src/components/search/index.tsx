import theme from "@theme/theme";
import * as Style from "./style";
import { Feather } from "@expo/vector-icons";

export function Search(){

    return (
        <Style.Container>
            <Feather name="search" size={24} color={theme.COLOR_ICON.GRAY}/>
            <Style.InputSeach placeholder="Procure sua comida"/>
        </Style.Container>
    )
}