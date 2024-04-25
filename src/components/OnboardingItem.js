import React from "react";
import { View, Text, StyleSheet, Image, useWindowDimensions } from "react-native";

const OnboardingItem = ({ item }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width }]}>
      <Image source={item.imagem} style={styles.image} />

      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.descricao}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  image: {
    width: 250,
    height: '60%',
    resizeMode: "contain",
  },
  textContainer: {
    alignItems: "center",
    top: -30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  description: {
    fontSize: 15,
    textAlign: "left",
  },
});

export default OnboardingItem;
