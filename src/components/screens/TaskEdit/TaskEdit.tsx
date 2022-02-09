import { View, Text, StyleSheet } from 'react-native'
import React, { FC } from 'react'

const TaskEdit: FC = () => {
	return (
		<View style={styles.containerGlobal}>
			<Text>Task Edit</Text>
		</View>
	)
}
const styles = StyleSheet.create({
	containerGlobal: {
		height: 80,
		backgroundColor: '#61dafb',
	},
})

export default TaskEdit