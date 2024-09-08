import { Header } from '@components/header';
import * as Style from './style';
import Constants from 'expo-constants';
import { Banner } from '@components/banner';
import { Search } from '@components/search';
import { Section } from '@components/section';
import theme from '@theme/theme';
import { TrendingFoods } from '@components/trending';

export default function Home() {
  const statusBarHeight = Constants.statusBarHeight;

  return (
    <Style.Container showsVerticalScrollIndicator={false}>
      <Style.ViewHeader distanceMarginTop={statusBarHeight + 8}>
        <Header />
        <Banner />
        <Search />
      </Style.ViewHeader>

     <Style.SectionCards>
     <Section title="Comidas em alta" size="LG" label="Veja todas" action={() => {}} />
       <TrendingFoods/>
     </Style.SectionCards>
    </Style.Container>
  );
}
