import React from 'react';
import { View, Image, StyleSheet } from 'react-native';


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
        width:'!00%',
        borderWidth: 4,
        alignContent: "center",
        justifyContent: "center",
        marginHorizontal: 20,
    },
    image: {
        height: '100%',
        width: "100%",
        
    },
});