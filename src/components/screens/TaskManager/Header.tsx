import { View, Text, StyleSheet } from 'react-native'
import React, { FC } from 'react'

type HeaderT = {
	nameTitle: string
}

export const Header: FC<HeaderT> = ({ nameTitle }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{nameTitle}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		height: 80,
		backgroundColor: '#61dafb',

	},
	text: {
		fontSize: 30,
		textAlign: 'center',
	}
})
