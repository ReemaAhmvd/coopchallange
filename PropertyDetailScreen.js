import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';

const PropertyDetailScreen = ({ route, navigation }) => {
  const { propertyId } = route.params;
  const [property, setProperty] = useState(null);

  useEffect(() => {
    fetchProperty();
  }, []);

  const fetchProperty = async () => {
    try {
      const response = await axios.get(`https://6149d2b0d6e6d30017a3772f.mockapi.io/properties/${propertyId}`);
      setProperty(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`https://6149d2b0d6e6d30017a3772f.mockapi.io/properties/${propertyId}`);
      navigation.goBack();
    } catch (error) {
      console.error(error);
    }
  };

  if (!property) return null;

  return (
    <View>
      <Text>{property.title}</Text>
      <Text>{property.address}</Text>
      <Text>${property.price}</Text>
      <Button title="Delete Property" onPress={handleDelete} />
      <Button title="Edit Property" onPress={() => navigation.navigate('AddEditProperty', { property })} />
    </View>
  );
};

export default PropertyDetailScreen;
