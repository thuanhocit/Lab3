import React from 'react';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { styles } from './style';

const AnimatedBox = ({ offset }) => {
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: offset.value }],
  }));

  return <Animated.View style={[styles.box, animatedStyles]} />;
};

export default AnimatedBox;