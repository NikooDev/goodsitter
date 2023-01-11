import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import StackRoutes from './src/stacks'


const App = () => {
	return (
		<SafeAreaProvider>
			<StatusBar animated={true} style="light"/>
			<NavigationContainer>
				<StackRoutes/>
			</NavigationContainer>
		</SafeAreaProvider>
	)
}

export default App