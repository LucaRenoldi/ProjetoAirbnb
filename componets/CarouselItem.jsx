import React from 'react';
import { View, Image, StyleSheet, useWindowDimensions } from 'react-native';
import {scale} from "../assets/Scale";

export default function CarouselItem ({ item }) {
    return (
        <View style={styles.container}>
            <Image 
                source={item.img} 
                style={styles.image}
                resizeMode="cover" 
            />
        </View>
    );
    
    
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: "#000",
        width: scale(380),
        borderWidth: 4,
        alignContent: "center",
        justifyContent: "center",
        marginHorizontal: scale(6),
    },
    image: {
        height: '100%',
        width: "100%",
        
    },
});