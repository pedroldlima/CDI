import React from "react";
import { View, Text, StyleSheet } from "react-native";


const Pagination = ({ data, scrollX }) => {
    return (
        <View style={styles.container}>
            {data.map((_, i) => {
                const inputRange = [(i - 1) * 300, i * 300, (i + 1) * 300];
                const dotOpacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.3, 1, 0.3],
                    extrapolate: "clamp"
                });
                return (
                    <Animated.View
                        key={i}
                        style={[styles.dot, { opacity: dotOpacity }]}
                    />
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: "#007AFF",
        marginHorizontal: 5,
    },
});

export default Pagination;
