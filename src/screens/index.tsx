import { Stack } from 'expo-router';
import { Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from "styled-components/native";
import theme from '@shared/theme/theme';
import { useFonts, NunitoSans_700Bold, NunitoSans_400Regular} from '@expo-google-fonts/nunito-sans';

export default function Index() {
  const [fonstLoad] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <ThemeProvider theme={theme}>
       <StatusBar
         backgroundColor="transparent"
         translucent
       />
       { fonstLoad ? <Text> Home</Text> : <Text> Carregando </Text> }
    </ThemeProvider>
    </>
  );
}
