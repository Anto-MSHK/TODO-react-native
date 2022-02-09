import { View, Text, StyleSheet } from 'react-native'
import React, { FC } from 'react'

type HeaderT = {
	nameTitle: string
}

export const Header: FC<HeaderT> = ({ nameTitle }) => {

	// useFontsCustom()
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{nameTitle}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		height: 90,
		// backgroundColor: '#61dafb',

	},
	text: {
		fontSize: 20,
		marginTop: 40,
		fontFamily: 'Bold',
		textAlign: 'center',
	}
})
