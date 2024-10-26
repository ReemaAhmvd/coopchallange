import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, TouchableOpacity } from 'react-native';
import axios from 'axios';

const PropertyListScreen = ({ navigation }) => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const response = await axios.get('https://6149d2b0d6e6d30017a3772f.mockapi.io/properties');
      setProperties(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <FlatList
        data={properties}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('PropertyDetail', { propertyId: item.id })}>
            <Text>{item.title}</Text>
            <Text>{item.address}</Text>
            <Text>${item.price}</Text>
          </TouchableOpacity>
        )}
      />
      <Button title="Add Property" onPress={() => navigation.navigate('AddEditProperty')} />
    </View>
  );
};

export default PropertyListScreen;
