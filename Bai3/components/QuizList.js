import React from 'react';
import { Animated, View, Text, StyleSheet } from 'react-native';
import QuizItem from './QuizItem';

const ListHeader = () => (
  <View style={styles.listHeader}>
    <Text style={styles.listHeaderTitle}>Popular Quizes</Text>
  </View>
);

const QuizList = ({ quizzes, scrollY, headerMaxHeight }) => {
  return (
    <Animated.FlatList
      data={quizzes}
      renderItem={({ item }) => <QuizItem item={item} />}
      keyExtractor={item => item.id}
      contentContainerStyle={[styles.listContainer, { paddingTop: headerMaxHeight }]}
      ListHeaderComponent={ListHeader}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: false }
      )}
      scrollEventThrottle={16}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingBottom: 20,
  },
  listHeader: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  listHeaderTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default QuizList;