import React from 'react';
import { View, Text, Image, StyleSheet, TouchableHighlight } from 'react-native';

const PhotoBlockHome = ({navigation, photo, h}) => {
    const styles = StyleSheet.create({
        image: {
            width: 300,
            height: 200,
            margin: 10
        },
        viewImage: {
            width: 350,
            marginVertical: 10
        }
    })
    return (
    <View style={styles.viewImage}>
        <TouchableHighlight onPress={() => {navigation.navigate('Full', { photo })}}>
            <Image style={styles.image} source={{uri: photo.urls.small_s3}}></Image>
        </TouchableHighlight>
        <Text>{photo.user.bio}</Text>
        <Text>{photo.user.first_name + '' + photo.user.last_name}</Text>
    </View>
    );
};

export default PhotoBlockHome;