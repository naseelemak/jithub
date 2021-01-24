import React, { useState } from "react";
import styles from "./my-button.styles";
import { Text, Animated, TouchableHighlight } from "react-native";
// import { TouchableNativeFeedback } from "react-native-gesture-handler";

const MyButton = ({ onPress, title }) => {
  const [isPressed, setPressed] = useState(false);

  return (
    // animate button's style change when you have time
    <Animated.View style={styles.container}>
      <TouchableHighlight
        activeOpacity={1}
        underlayColor="#0366d6"
        style={isPressed ? styles.buttonPressed : styles.buttonNormal}
        onHideUnderlay={() => setPressed(false)}
        onShowUnderlay={() => setPressed(true)}
        onPress={onPress}
      >
        <Text
          style={isPressed ? styles.buttonTextPressed : styles.buttonTextNormal}
        >
          {title}
        </Text>
      </TouchableHighlight>
    </Animated.View>
  );
};

export default MyButton;
