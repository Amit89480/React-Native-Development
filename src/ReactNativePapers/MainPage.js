import React from 'react';
import { View, Text } from 'react-native';
import { Provider as PaperProvider, Button, Appbar } from 'react-native-paper';
import BannerComponent from './BannerComponent';

const MainPage = () => {
  return (
    <PaperProvider>
      <Appbar.Header>
        <Appbar.Content title="React Native Paper" />
      </Appbar.Header>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Hello, React Native Paper!</Text>
      <BannerComponent/>
      </View>
    </PaperProvider>
  );
};

export default MainPage;
