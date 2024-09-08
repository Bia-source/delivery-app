import theme from '@theme/theme';
import * as Style from './style';
import { Ionicons, Feather } from '@expo/vector-icons';

export function Header() {
  return (
    <Style.Container>
      <Style.Pressable>
        <Ionicons name="menu" size={20} color={theme.COLOR_ICON.BLACK} />
      </Style.Pressable>

      <Style.ViewLocalizationGenaral>
        <Style.TitletLocalization>Localização</Style.TitletLocalization>
        <Style.ViewLocalization>
            <Feather name="map-pin" size={14} color={theme.COLOR_ICON.RED} />
          <Style.TextLocalization>Campo Grande</Style.TextLocalization>
        </Style.ViewLocalization>
      </Style.ViewLocalizationGenaral>

      <Style.Pressable>
        <Feather name="bell" size={20} color={theme.COLOR_ICON.BLACK} />
      </Style.Pressable>
    </Style.Container>
  );
}
