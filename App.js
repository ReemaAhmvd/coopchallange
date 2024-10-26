import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PropertyListScreen from './screens/PropertyListScreen';
import PropertyDetailScreen from './screens/PropertyDetailScreen';
import AddEditPropertyScreen from './screens/AddEditPropertyScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PropertyList">
        <Stack.Screen name="PropertyList" component={PropertyListScreen} />
        <Stack.Screen name="PropertyDetail" component={PropertyDetailScreen} />
        <Stack.Screen name="AddEditProperty" component={AddEditPropertyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
