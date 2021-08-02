import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components'
import AppLoading from 'expo-app-loading'

import { theme } from './src/global/styles/theme'
import { AppRoutes } from './src/routes/app.routes'

import gilroyregular from './src/assets/gilroyregular.ttf'
import gilroymedium from './src/assets/gilroymedium.ttf'
import gilroybold from './src/assets/gilroybold.ttf'

import { useFonts } from 'expo-font'

export default function App() {
  const [fontsloaded] = useFonts({
    gilroy_400: gilroyregular,
    gilroy_500: gilroymedium,
    gilroy_600: gilroybold
  })

  if (!fontsloaded) {
    return <AppLoading />
  }


  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <ThemeProvider theme={theme} >
        <NavigationContainer>

          <AppRoutes />

        </NavigationContainer>
      </ThemeProvider>
    </>
  )
}


