import { View, Text } from 'react-native'
import React, { FC } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TaskManager from './../components/screens/TaskManager/TaskManager';
import TaskEdit from '../components/screens/TaskEdit/TaskEdit';

const Stack = createNativeStackNavigator()

export const Navigation: FC = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name='TaskManager' component={TaskManager} />
				<Stack.Screen name='TaskEdit' component={TaskEdit} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default Navigation