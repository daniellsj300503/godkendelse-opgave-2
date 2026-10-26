// Appens navigation og skærme.

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HjemSkaerm from './screens/HjemSkaerm';
import ListeSkaerm from './screens/ListeSkaerm';
import DetaljeSkaerm from './screens/DetaljeSkaerm';
import BookingSkaerm from './screens/BookingSkaerm';
import KortSkaerm from './screens/KortSkaerm';
import { farver } from './styles';

const Stack = createNativeStackNavigator();

// Bygger appens navigation mellem alle skærme.
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Stack.Navigator
        initialRouteName="Hjem"
        screenOptions={{
          headerStyle: { backgroundColor: farver.baggrund },
          headerTintColor: farver.tekst,
          contentStyle: { backgroundColor: farver.baggrund },
        }}
      >
        <Stack.Screen
          name="Hjem"
          component={HjemSkaerm}
          options={{ title: 'Find din tatovør' }}
        />
        <Stack.Screen
          name="Liste"
          component={ListeSkaerm}
          options={{ title: 'Tatovører' }}
        />
        <Stack.Screen
          name="Detaljer"
          component={DetaljeSkaerm}
          options={{ title: 'Profil' }}
        />
        <Stack.Screen
          name="Booking"
          component={BookingSkaerm}
          options={{ title: 'Book tid' }}
        />
        <Stack.Screen
          name="Kort"
          component={KortSkaerm}
          options={{ title: 'Nærmeste tatovør' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
