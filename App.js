import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import AddTimerScreen from './screens/AddTimerScreen';

import authContext from './context';
import { SCREENS } from './variables';

const Stack = createNativeStackNavigator();

const screens = [
  {
    name: SCREENS.LOGIN,
    component: LoginScreen
  },
  {
    name: SCREENS.HOME,
    component: HomeScreen
  },
  {
    name: SCREENS.ADD_TIMER,
    component: AddTimerScreen
  }
]

export default function App() {
  const [currentUser, setCurrentUser] = useState(false);
  return (
    <authContext.Provider value={{ currentUser, setCurrentUser }}>
      <NavigationContainer>
        <Stack.Navigator>
          {screens.map(screen => {
            return (
              <Stack.Screen
                options={{ headerShown: false }}
                name={screen.name}
                component={screen.component}
                key={Date.now()}
              />
            )
          })}
        </Stack.Navigator>
      </NavigationContainer>
    </authContext.Provider>
  );
};