import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button, Modal } from "react-native";

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };
  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goals"
          style={styles.inputBox}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="Add" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    // flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  inputBox: {
    borderBottomColor: "black",
    borderWidth: 1,
    padding: 2,
    width: "90%",
    marginBottom: 15
  },
  buttonContainer: {
    width: "60%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  button: {
    width: "40%"
  }
});
export default GoalInput;
