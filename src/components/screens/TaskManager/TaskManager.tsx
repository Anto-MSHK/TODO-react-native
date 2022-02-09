import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { FC } from 'react'
import { Header } from './Header'
import { Task } from '../Task/Task'
import { ButtonInBottom } from '../Button/ButtonInBottom'



const TaskManager: FC = () => {

	return (
		<View style={styles.containerGlobal}>
			<Header nameTitle='Task Manager' />
			<ScrollView>
				<Task title='Сходить в магазин' isDone={false} />
				<Task title='Сходить в магазин' isDone={false} />
				<Task title='Сходить в магазин' isDone={false} />
				<Task title='Сходить в магазин' isDone={false} />
				<Task title='Сходить в магазин' isDone={false} />
				<Task title='Сходить в магазин' isDone={false} />
				<Task title='Сходить в магазин' isDone={false} />
				<Task title='Сходить в магазин' isDone={false} />
				<Task title='Сходить в магазин' isDone={false} />
				<Task title='Сходить в магазин' isDone={false} />
				<Task title='Сходить в магазин' isDone={false} />
				<Task title='Сходить в магазин' isDone={false} />
				<Task title='Сходить в магазин' isDone={false} />
				<Task title='Сходить в магазин' isDone={false} />
				<Task title='Сходить в магазин' isDone={false} />
				<Task title='Сходить в магазин' isDone={false} />
			</ScrollView>
			<ButtonInBottom />

		</View >
	)
}
const styles = StyleSheet.create({
	containerGlobal: {
		flex: 1,
		backgroundColor: '#fff'
	},
})
export default TaskManager