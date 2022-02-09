import { View, Text } from 'react-native'
import React, { FC } from 'react'
import { Header } from './Header'



const TaskManager: FC = () => {

	return (
		<View >
			<Header nameTitle='Task Manager' />
		</View>
	)
}

export default TaskManager