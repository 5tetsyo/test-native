import React from 'react';
import { View, Text, Button, Image } from 'react-native';

const PhotoFull = ({navigation, route}) => {
    return (
        <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '35%'}}>
            <Image style={{width: 360, height: 250}} source={{uri: route.params.photo.urls.regular}}></Image>
            <Text>{route.params.photo.user.bio}</Text>
            <Button onPress={() => {navigation.navigate('Home')}} title={'Go home'}></Button>
        </View>
    );
};

export default PhotoFull;