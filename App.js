import React, { useRef, useState } from 'react';
import { View, StatusBar, Animated, StyleSheet } from 'react-native';
import Header from './Bai3/components/Header';
import QuizList from './Bai3/components/QuizList';
import { QUIZZES, TABS } from './Bai3/data/mockData';

const HEADER_MAX_HEIGHT = 200;
const HEADER_MIN_HEIGHT = 70;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export default function App() {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [activeTab, setActiveTab] = useState(0);

  // Interpolate header height based on scroll position
  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: 'clamp',
  });

  // Interpolate avatar opacity and scale
  const avatarOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 0.5, 0],
    extrapolate: 'clamp',
  });

  const avatarScale = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 0.8, 0.5],
    extrapolate: 'clamp',
  });

  // Interpolate greeting text opacity and position
  const greetingOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 0.5, 0],
    extrapolate: 'clamp',
  });

  const greetingTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, -20],
    extrapolate: 'clamp',
  });

  // Interpolate tabs position
  const tabsTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, -HEADER_SCROLL_DISTANCE + 30],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      <Header 
        headerHeight={headerHeight}
        avatarOpacity={avatarOpacity}
        avatarScale={avatarScale}
        greetingOpacity={greetingOpacity}
        greetingTranslateY={greetingTranslateY}
        tabsTranslateY={tabsTranslateY}
        tabs={TABS}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      
      <QuizList 
        quizzes={QUIZZES}
        scrollY={scrollY}
        headerMaxHeight={HEADER_MAX_HEIGHT}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});