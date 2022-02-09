import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import TaskEdit from './../TaskEdit/TaskEdit';

export const ButtonInBottom: FC = () => {
	const navigation = useNavigation();
	return (
		<LinearGradient
			colors={['rgba(255,255,255,0)', 'rgba(255,255,255,0.7)', 'rgba(255,255,255,1)']}
			style={styles.containerGlobal}>
			<Button style={styles.button}
				title="Add Task"
				icon={{
					name: 'plus-square',
					type: 'font-awesome',
					size: 18,
					color: 'white',
				}}
				iconContainerStyle={{ marginRight: 10 }}
				titleStyle={{ fontFamily: 'Bold' }}
				buttonStyle={{
					backgroundColor: 'rgba(0, 0, 0, 1)',
					borderColor: 'transparent',
					borderWidth: 0,
					borderRadius: 30,
				}}
				containerStyle={{
					position: 'absolute',
					width: '100%',
					paddingRight: 40,
					paddingLeft: 40,
					bottom: 20

				}}
				onPress={() => { navigation.navigate('TaskEdit') }}
			/>
		</LinearGradient>
	)
}

const styles = StyleSheet.create({
	containerGlobal: {
		// flex: 1,

		width: '100%',
		height: '25%',
		position: 'absolute',
		bottom: 0,
	},
	button: {
		// flex: 1,
		margin: 0
	},
})