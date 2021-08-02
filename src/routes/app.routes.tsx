import 'react-native-gesture-handler';

import React from 'react'
import { Platform } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { useTheme } from 'styled-components'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Home } from '../pages/Home'


const { Navigator, Screen } = createBottomTabNavigator()

export function AppRoutes() {
  const theme = useTheme()

  return (
    <Navigator
      tabBarOptions={{
        activeTintColor: theme.colors.secondary,
        inactiveTintColor: theme.colors.text,
        labelPosition: "beside-icon",
        style: {
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          height: 60
        }
      }}
    >
      <Screen
        name="Listagem"
        component={Home}
        options={{
          tabBarIcon: (({ size, color }) =>
            <MaterialIcons
              name="format-list-bulleted"
              size={size}
              color={color}
            />
          )
        }}
      />



    </Navigator>
  )
}