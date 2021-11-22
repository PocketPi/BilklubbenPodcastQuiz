import React from "react";
import { TouchableOpacity, Text, View } from "react-native";

import { ResultSelectCallback } from '../../types';

import styles from '../../styles';

interface OptionProps {
  onSelectResult: ResultSelectCallback,
  text: String
}

const Option = (props: OptionProps) => {
  const { onSelectResult, text } = props;

  return (
    <TouchableOpacity
      style={styles.option}
      onPress={() => {
        if (onSelectResult) {
          onSelectResult();
        }
      }}
    >
      <Text style={styles.optionText}>{text}</Text>
    </TouchableOpacity>
  )
}

interface ResultProps {
  text: String | null;
}

const Result = (props: ResultProps) => {
  const { text } = props;
  return (
    <TouchableOpacity
      style={styles.option}
    >
      <Text style={styles.optionText}>{text}</Text>
    </TouchableOpacity>
  )
}


interface OptionsScreenProps {
  onSelectResult: ResultSelectCallback;
  value: String | null;
}

export default function ResultScreen(props: OptionsScreenProps) {

  const { onSelectResult, value } = props;

  return (
    <View style={styles.container}>
      <Result text={value} />
      <Option text="Næste Spørgsmål" onSelectResult={onSelectResult} />
    </View>
  );
}