import React from "react";
import { TouchableOpacity, Text, View } from "react-native";

import { WaitingSelectCallback } from '../../types';

import styles from '../../styles';

interface WaitingProps {
  onSelectWaiting: WaitingSelectCallback,
  name: string,
  showResult: boolean;
}

const Option = (props: WaitingProps) => {
  const { showResult, name, onSelectWaiting } = props;

  return (
    <TouchableOpacity
      style={styles.option}
      onPress={() => {
        if (onSelectWaiting) {
          onSelectWaiting(showResult);
        }
      }}
    >
      <Text style={styles.optionText}>{name}</Text>
    </TouchableOpacity>
  )
}


interface WaitingScreenProps {
  onSelectWaiting: WaitingSelectCallback;
}

export default function OptionsScreen(props: WaitingScreenProps) {

  const { onSelectWaiting } = props;

  return (
    <View style={styles.container}>
      <Option name="Vis Resultat" showResult={true} onSelectWaiting={onSelectWaiting} />
      <Option name="Jeg ombestemte mig" showResult={false} onSelectWaiting={onSelectWaiting} />
    </View>
  );
}