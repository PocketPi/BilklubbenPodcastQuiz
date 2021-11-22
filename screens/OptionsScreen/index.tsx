import React, { useState } from "react";
import { TouchableOpacity, Text, View } from "react-native";

import { OptionSelectCallback } from '../../types';

import styles from '../../styles';

interface OptionProps {
  onSelectOption: OptionSelectCallback,
  name: string;
}

const Option = (props: OptionProps) => {
  const { name, onSelectOption } = props;

  return (
    <TouchableOpacity
      style={styles.option}
      onPress={() => {
        if (onSelectOption) {
          onSelectOption(name);
        }
      }}
    >
      <Text style={styles.optionText}>{name}</Text>
    </TouchableOpacity>
  )
}

interface OptionsScreenProps {
  onSelectOption: OptionSelectCallback;
}

export default function OptionsScreen(props: OptionsScreenProps) {

  const { onSelectOption } = props;

  return (
    <View style={styles.container}>
      <Option name="A" onSelectOption={onSelectOption} />
      <Option name="B" onSelectOption={onSelectOption} />
      <Option name="C" onSelectOption={onSelectOption} />
    </View>
  );
}