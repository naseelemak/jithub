import React from "react";
import { View, Text, Button } from "react-native";

export default function RepoDetails({ navigation }) {
  return (
    <View>
      <Text>RepoDetails</Text>
      <Button
        title="Back Home"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
    </View>
  );
}
