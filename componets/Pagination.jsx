import { View, StyleSheet, Text } from "react-native";

export default function Pagination({ activeIndex, dataLength }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {activeIndex + 1} / {dataLength}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0.1,
        backgroundColor: "#000",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 25,
        color: "#fff",
    }
});
