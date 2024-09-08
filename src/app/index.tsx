import { Stack } from 'expo-router';
import { Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from "styled-components/native";
import theme from '@theme/theme';
import { useFonts, NunitoSans_700Bold, NunitoSans_400Regular} from '@expo-google-fonts/nunito-sans';
import Home from '@screens/Home';

export default function App() {
  const [fonstLoad] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <ThemeProvider theme={theme}>
       <StatusBar
         backgroundColor="transparent"
         translucent
       />
        <Home/>
    </ThemeProvider>
    </>
  );
}
