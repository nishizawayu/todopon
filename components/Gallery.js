import React, { useState, useEffect } from 'react';
import { View, Button, Image, FlatList } from 'react-native';
import * as FileSystem from 'expo-file-system';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ImageGalleryApp = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    retrieveStoredImages();
  }, []);

  const saveImagesToStorage = async () => {
    const imageArray = [
      './path/to/image1.jpg',
      './path/to/image2.jpg',
      './path/to/image3.jpg',
      // Add other image paths if needed
    ];

    const imagePaths = await Promise.all(
      imageArray.map(async (path) => {
        const fileInfo = await FileSystem.getInfoAsync(path);
        if (fileInfo.exists) {
          return fileInfo.uri;
        }
      })
    );

    await AsyncStorage.setItem('storedImages', JSON.stringify(imagePaths));
    setImages(imagePaths);
  };

  const retrieveStoredImages = async () => {
    const storedImages = await AsyncStorage.getItem('storedImages');
    if (storedImages) {
      setImages(JSON.parse(storedImages));
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Show Images" onPress={saveImagesToStorage} />
      <FlatList
        data={images}
        numColumns={3}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={{ width: 100, height: 100, margin: 5 }} />
        )}
      />
    </View>
  );
};

export default ImageGalleryApp;
