import { styleGuest } from '@Screen/styles'
import { NativeStackNavigationOptions } from '@react-navigation/native-stack'

export const guestOptions: NativeStackNavigationOptions = {
	contentStyle: styleGuest.view,
	headerTitle: '',
	headerTransparent: true
}

export const userOptions: NativeStackNavigationOptions = {
	headerTitle: ''
}