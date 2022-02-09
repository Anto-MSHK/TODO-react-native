import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Navigation } from './src/navigation/Navigation';
import { useTailwind } from 'tailwind-rn';

export default function App() {
	const tailwind = useTailwind();
	return (
		<Navigation />
		// <View style={tailwind('h-full')}>
		// 	<Text>
		// 		sss
		// 	</Text>
		// </View>
	);
}
