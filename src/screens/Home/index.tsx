import { Header } from "@components/header"
import * as Style from "./style";
import  Constants  from "expo-constants";

export default function Home(){

    const statusBarHeight = Constants.statusBarHeight;
    
    return (
        <Style.Container showsVerticalScrollIndicator={false}>
            <Style.ViewHeader distanceMarginTop={statusBarHeight + 8}>
                <Header/>
            </Style.ViewHeader>
        </Style.Container>
    )
}