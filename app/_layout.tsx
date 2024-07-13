import { Stack } from "expo-router";
import { useFonts } from "expo-font";

export default function RootLayout() {
  useFonts({
    'outfit':require('./../assets/fonts/Outfit-Regular.ttf')
  })
  return (
    <Stack screenOptions={{headerShown:false}}>
        <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
