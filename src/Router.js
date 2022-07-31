import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from 'pages/Login'
import Home from 'pages/Home'
import Categories from 'pages/Categories'
import Products from 'pages/Products'
import ProductDetail from 'pages/ProductDetail'
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginScreen" component={Login} />
        <Stack.Screen name="HomeScreen" component={Home} />
        <Stack.Screen name="CategoriesScreen" component={Categories} />
        <Stack.Screen name="ProductsScreen" component={Products} />
        <Stack.Screen name="ProductDetailScreen" component={ProductDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;