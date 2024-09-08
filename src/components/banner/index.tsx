import * as Style from './style';
import React from 'react';
import banner1 from '@assets/banner1.png';
import banner2 from '@assets/banner2.png';

export function Banner() {
  return (
      <Style.Container>
      <Style.ScrollBanner horizontal={true} showsHorizontalScrollIndicator={false}>
      <Style.BannerPressable
          key="1"
          onPress={() => console.log('Clicou no banner 1')}
        >
          <Style.Image source={banner1}/>        
        </Style.BannerPressable> 

      <Style.ViewSeparator/>
        <Style.BannerPressable
          key="2"
          onPress={() => console.log('Clicou no banner 2')}
        >
          <Style.Image source={banner2}/>        
        </Style.BannerPressable> 
      </Style.ScrollBanner>
       </Style.Container>
  );
}


