import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import axios from 'axios';

const AddEditPropertyScreen = ({ route, navigation }) => {
  const [title, setTitle] = useState('');
  const [address, setAddress] = useState('');
  const [price, setPrice] = useState('');
  const isEditing = route.params?.property;

  const handleSubmit = async () => {
    const propertyData = { title, address, price: parseFloat(price) };

    try {
      if (isEditing) {
        await axios.put(`https://6149d2b0d6e6d30017a3772f.mockapi.io/properties/${isEditing.id}`, propertyData);
      } else {
        await axios.post('https://6149d2b0d6e6d30017a3772f.mockapi.io/properties', propertyData);
      }
      navigation.goBack();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <TextInput placeholder="Title" value={title} onChangeText={setTitle} />
      <TextInput placeholder="Address" value={address} onChangeText={setAddress} />
      <TextInput placeholder="Price" value={price} onChangeText={setPrice} keyboardType="numeric" />
      <Button title={isEditing ? "Update Property" : "Add Property"} onPress={handleSubmit} />
    </View>
  );
};

export default AddEditPropertyScreen;
