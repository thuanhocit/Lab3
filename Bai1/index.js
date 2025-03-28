import React, { useCallback } from 'react';
import { View, Button } from 'react-native';
import { useSharedValue, withTiming, Easing } from 'react-native-reanimated';
import { styles } from './style';
import { getRandomPosition } from './utils';
import AnimatedBox from './AnimatedBox';

const MoveBox = () => {
  const offset = useSharedValue(0);

  const moveBox = useCallback(() => {
    offset.value = withTiming(getRandomPosition(), {
      duration: 600,
      easing: Easing.out(Easing.exp),
    });
  }, []);

  return (
    <View style={styles.container}>
      <Button title="Move" onPress={moveBox} color="#6200ea" />
      <AnimatedBox offset={offset} />
    </View>
  );
};

export default MoveBox;