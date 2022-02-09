import { View, Text, StyleSheet } from 'react-native'
import React, { FC, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { CheckBox } from 'react-native-elements'

type TaskT = {
	title: string
	isDone: boolean
}
export const Task: FC<TaskT> = ({ title, isDone }) => {
	const [check, setCheck] = useState(false)
	return (
		<LinearGradient
			// Button Linear Gradient
			colors={['#fbe114', '#fff414']}
			style={styles.containerGlobal}>
			<Text style={styles.textRegular}>{title}</Text>
			<View style={styles.containerBottom}>
				<Text>{'01.01.2001'}</Text>
				<View style={styles.containerCheckBox}>
					<Text style={styles.textLight}>{check ? 'выполнено!' : 'ещё не выполнено'}</Text>
					<CheckBox
						containerStyle={styles.check}
						checked={check}
						uncheckedColor={'black'}
						checkedColor={'black'}
						onPress={() => { setCheck(!check) }} />
				</View>
			</View>
		</LinearGradient>
	)
}


const styles = StyleSheet.create({
	containerGlobal: {
		justifyContent: 'center',
		margin: 10,
		padding: 15,
		borderRadius: 10
	},
	containerBottom: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderRadius: 10
	},
	containerCheckBox: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	textRegular: {
		// marginBottom: -10,
		fontSize: 20,
		fontFamily: 'Regular',

	},
	textLight: {
		// marginBottom: -10,
		fontSize: 15,
		fontFamily: 'Light',
		marginRight: 5

	},
	check: {
		padding: 0,
		marginRight: 0,
		marginLeft: 0,
		marginTop: 0,
		marginBottom: 0,
		backgroundColor: 'transparent',
		borderColor: 'transparent',
	},
	checkText: {
		fontSize: 10
	}

})