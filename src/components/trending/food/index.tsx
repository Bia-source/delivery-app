import { FoodProps } from '@interface/food';
import * as Style from './style';
import { AntDesign } from '@expo/vector-icons';
import theme from '@theme/theme';

export function CardHorizontalFood({ food }: { food: FoodProps }) {
  return (
    <Style.Container>
        <Style.ViewImageBackground>
        <Style.Image source={{ uri: food.image }}/>
        <Style.ViewRating>
        <Style.RatingNumber>{food.rating}</Style.RatingNumber>
        <AntDesign name="star" size={14} color={theme.COLOR_ICON.YELLOW} />
        </Style.ViewRating>
        </Style.ViewImageBackground>
        
      <Style.ViewPrice>
        <Style.Price>R$ {food.price.toFixed(2).toString().replace(".", ",")}</Style.Price>
        <Style.OldPrice>R$ {food.price.toFixed(2).toString().replace(".", ",")}</Style.OldPrice>
      </Style.ViewPrice>

      <Style.Title>{food.name}</Style.Title>
      <Style.PreparationTime>{food.time} - {food.delivery.toFixed(2).toString().replace(".", ",")}</Style.PreparationTime>
    </Style.Container>
  );
}
