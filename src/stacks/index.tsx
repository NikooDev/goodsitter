import React, { useCallback, useState } from 'react'
import { guestOptions, userOptions } from './options'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeGuestScreen, GuideScreen, LoginScreen, SignupScreen } from '@Screen/guest'
import HomeClientScreen from '@Screen/client/home.screen'
import HomePetsitterScreen from '@Screen/petsitter/home.screen'

const Stack = createNativeStackNavigator()

const StackRoutes = () => {
	const [isAuth] = useState(false)
	const [isRole] = useState('client')

	const handleInitRoute = useCallback((): string => {
		let route: string

		if (isAuth && isRole === 'client') {
			route = 'Client'
		} else if (isAuth && isRole === 'petsitter') {
			route = 'Petsitter'
		} else {
			route = 'Home'
		}

		return route
	}, [isAuth, isRole])

	const renderStacks = useCallback(() => {
		if (isAuth) {
			switch (isRole) {
				case 'client':
					return (
						<Stack.Group screenOptions={userOptions}>
							<Stack.Screen name="Client" component={HomeClientScreen}/>
						</Stack.Group>
					)
				case 'petsitter':
					return (
						<Stack.Group screenOptions={userOptions}>
							<Stack.Screen name="Petsitter" component={HomePetsitterScreen}/>
						</Stack.Group>
					)
			}
		} else {
			return (
				<Stack.Group screenOptions={guestOptions}>
					<Stack.Screen name="Home" component={HomeGuestScreen}/>
					<Stack.Screen name="Guide" component={GuideScreen}/>
					<Stack.Screen name="Login" component={LoginScreen}/>
					<Stack.Screen name="Signup" component={SignupScreen}/>
				</Stack.Group>
			)
		}
	}, [isAuth, isRole])

	return (
		<Stack.Navigator initialRouteName={handleInitRoute()}>
			{ renderStacks() }
		</Stack.Navigator>
	)
}

export default StackRoutes