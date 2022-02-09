import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Navigation } from './src/navigation/Navigation';

import {
	Oswald_300Light,
	Oswald_400Regular,
	Oswald_600SemiBold,
} from '@expo-google-fonts/oswald'
import { useFonts } from '@expo-google-fonts/oswald';
import AppLoading from 'expo-app-loading';

export default function App() {
	let [fontsLoaded, error] = useFonts({
		Oswald_300Light,
		Oswald_400Regular,
		Oswald_600SemiBold,
		'Bold': require('./assets/fonts/Calmius-Sans-SemiBold.ttf'),
		'Regular': require('./assets/fonts/Calmius-Sans-Medium.ttf'),
		'Light': require('./assets/fonts/Calmius-Sans-Low.ttf')
	})

	if (!fontsLoaded) {
		return <AppLoading />
	}
	return (
		<Navigation />
		// <View style={tailwind('h-full')}>
		// 	<Text>
		// 		sss
		// 	</Text>
		// </View>
	);
}


