import React, {useEffect} from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getPhotos } from '../redux/asyncPhotos';
import PhotoBlockHome from './PhotoBlockHome';

const HomePage = ({navigation}) => {
    const styles = StyleSheet.create({
        imageWrapper: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }
    })
    const dispatch = useDispatch()
    const photoArray = useSelector(state=>state.photos)
    useEffect(()=>{
    getPhotos(dispatch)
  },[])
    return (
        <ScrollView contentContainerStyle={styles.imageWrapper}>
            {photoArray.map(photo =>  <PhotoBlockHome  key={photo.id}photo={photo} navigation={navigation}></PhotoBlockHome>)}
        </ScrollView>
    );
};

export default HomePage;