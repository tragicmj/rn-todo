import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
const GoalItem = props => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={props.onDelete.bind(this, props.id)}
    >
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: "#f9f9f9",
    marginTop: 10,
    shadowColor: "#274f75",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.3
  }
});
export default GoalItem;
