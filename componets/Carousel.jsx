import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, FlatList, View, TouchableWithoutFeedback } from "react-native";
import Slides from "../assets/Slides";
import CarouselItem from "../componets/CarouselItem";

export default function Carousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const flatListRef = useRef(null);
    const pauseDuration = 6000;

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isPaused) {
                setActiveIndex(prevIndex => (prevIndex + 1) % Slides.length);
            }
        }, 4000); 

        return () => clearInterval(interval);
    }, [isPaused]);

    useEffect(() => {
        if (flatListRef.current) {
            flatListRef.current.scrollToIndex({ index: activeIndex, animated: true });
        }
    }, [activeIndex]);

    const handlePress = () => {
        setIsPaused(true);
        setTimeout(() => {
            setIsPaused(false);
        }, pauseDuration);
    };

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={handlePress}>
                <FlatList
                    ref={flatListRef}
                    data={Slides}
                    renderItem={({ item }) => <CarouselItem item={item} />}
                    keyExtractor={item => item.id.toString()} 
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 20 }}
                    onMomentumScrollEnd={(event) => {
                        const index = Math.floor(event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width);
                        setActiveIndex(index);
                    }}
                />
            </TouchableWithoutFeedback>

            <View style={styles.dotsContainer}>
                {Slides.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.dot,
                            index === activeIndex ? styles.dotActive : styles.dotInactive,
                        ]}
                    />
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },
    dot: {
        height: 10,
        width: 10,
        margin: 5,
        borderRadius: 5,
    },
    dotActive: {
        backgroundColor: 'black',
    },
    dotInactive: {
        backgroundColor: 'gray',
    },
});

