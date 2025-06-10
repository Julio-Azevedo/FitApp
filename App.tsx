// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaLogin from './src/screens/TelaLogin';
import TelaCode from './src/screens/TelaCode';
import TelaHome from './src/screens/TelaHome';
import ColetaInfo from './src/screens/TelaUsuarioInfo';
import TelaColetaPerfil from './src/screens/TelaColetaPerfil';

// Cria o navegador
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown: false
        }}
        initialRouteName="Login" // Define Login como tela inicial
      >
        <Stack.Screen name="Login" component={TelaLogin} />
        <Stack.Screen name="Code" component={TelaCode} />
        <Stack.Screen name="Home" component={TelaHome} />
        <Stack.Screen name="ColetaInfo" component={ColetaInfo} />
        <Stack.Screen name="TelaColetaPerfil" component={TelaColetaPerfil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
