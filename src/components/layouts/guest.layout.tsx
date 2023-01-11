import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ILayout from '@Type/layout'

const GuestLayout: React.FC<ILayout> = ({classnames, children }) => {
	return (
		<SafeAreaView className={'px-5 '+classnames}>
			{ children }
		</SafeAreaView>
	)
}

export default GuestLayout