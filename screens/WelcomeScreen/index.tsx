import React from "react";
import { TouchableOpacity, Text, View } from "react-native";

import { ResultSelectCallback } from '../../types';

import styles from '../../styles';

interface OptionProps {
  onSelectWelcome: ResultSelectCallback,
  text: String
}

const Option = (props: OptionProps) => {
  const { onSelectWelcome, text } = props;

  return (
    <TouchableOpacity
      style={styles.option}
      onPress={() => {
        if (onSelectWelcome) {
          onSelectWelcome();
        }
      }}
    >
      <Text style={styles.optionText}>{text}</Text>
    </TouchableOpacity>
  )
}

interface OptionsScreenProps {
  onSelectWelcome: ResultSelectCallback;
}

export default function WelcomeScreen(props: OptionsScreenProps) {

  const { onSelectWelcome } = props;

  return (
    <View style={styles.container}>
      <Option text="(LOGO) Bilklubbens Internationale Quiz" onSelectWelcome={onSelectWelcome} />
    </View>
  );
}