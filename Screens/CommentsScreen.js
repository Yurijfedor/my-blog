import React from "react";
import { View, Text, StyleSheet } from "react-native";
const Comment = () => {
  return (
    <View style={styles.container}>
      <Text>Comment Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Comment;