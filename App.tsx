import React, { useState, useCallback } from 'react';

import {
  OptionSelectCallback,
  WaitingSelectCallback,
  ResultSelectCallback,
} from './types';

import WelcomeScreen from './screens/WelcomeScreen';
import OptionsScreen from './screens/OptionsScreen';
import WaitingScreen from './screens/WaitingScreen';
import ResultScreen from './screens/ResultScreen';

enum Screen {
  WELCOME = 'WELCOME',
  OPTIONS = 'OPTIONS',
  WAITING = 'WAITING',
  RESULT = 'RESULT',
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(Screen.WELCOME);
  const [currentSelectedOption, setCurrentSelectedOption] = useState<
    string | null
  >(null);

  const onSelectWelcome = useCallback<ResultSelectCallback>(() => {
    setCurrentScreen(Screen.OPTIONS);
  }, []);

  const onSelectOption = useCallback<OptionSelectCallback>(
    (optionSelected: string) => {
      setCurrentSelectedOption(optionSelected);
      setCurrentScreen(Screen.WAITING);
    },
    []
  );

  const onSelectWaiting = useCallback<WaitingSelectCallback>(
    (optionSelected: boolean) => {
      if (optionSelected) {
        setCurrentScreen(Screen.RESULT);
      } else {
        setCurrentScreen(Screen.OPTIONS);
      }
    },
    []
  );

  const onSelectResult = useCallback<ResultSelectCallback>(() => {
    setCurrentScreen(Screen.OPTIONS);
  }, []);

  switch (currentScreen) {
    case Screen.WELCOME: {
      return <WelcomeScreen onSelectWelcome={onSelectWelcome} />;
    }

    case Screen.OPTIONS: {
      return <OptionsScreen onSelectOption={onSelectOption} />;
    }
    case Screen.WAITING: {
      return <WaitingScreen onSelectWaiting={onSelectWaiting} />;
    }
    case Screen.RESULT: {
      return (
        <ResultScreen
          onSelectResult={onSelectResult}
          value={currentSelectedOption}
        />
      );
    }
    default: {
      return null;
    }
  }
}
