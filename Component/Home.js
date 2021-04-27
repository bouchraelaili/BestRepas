import React from 'react'
import {View, ImageBackground, StyleSheet } from 'react-native'


const image = { uri: "https://image.freepik.com/vecteurs-libre/conception-cartes-festival-ramadan-kareem_1017-31111.jpg" };
export default function Home() {
    return (
        <View >
        <ImageBackground source={image} style={styles.img} >
      

        </ImageBackground>
      
      </View>
    )
}


const styles = StyleSheet.create({
img: {
    width: 400,
    height: '100%'
}
});


