import * as Style from './style';
import { SizeDefault } from '@shared/styles/global';

export type SectionProps = {
  title: string;
  size: SizeDefault;
  label: string;
  action: () => void;
};

export function Section({ title, size, label, action }: SectionProps) {
  return (
    <Style.Container>
      <Style.FirstView>
        <Style.TitleSection size={size}>{title}</Style.TitleSection>
        <Style.Pressable onPress={action}>
            <Style.TextMore>{label}</Style.TextMore>
        </Style.Pressable>
      </Style.FirstView>
    </Style.Container>
  );
}
