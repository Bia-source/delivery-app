import { FoodProps } from '@interface/food';
import * as Styled from './style';
import { useState, useEffect } from 'react';
import { CardHorizontalFood } from './food';

export function TrendingFoods() {
  const [foods, setFoods] = useState<FoodProps[]>([]);

  useEffect(() => {
    getFoods();
  }, []);

  async function getFoods() {
    try {
      const response = await fetch(`${process.env.BASE_URL_API}/foods`).then((res) => res.json());
      setFoods(response);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Styled.Container>
      <Styled.FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={foods}
        renderItem={({ item }) => <CardHorizontalFood food={item} />}
      />
    </Styled.Container>
  );
}
