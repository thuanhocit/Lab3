import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const QuizItem = ({ item }) => (
  <View style={styles.quizItem}>
    <View style={styles.quizContent}>
      <Text style={styles.quizCategory}>{item.category}</Text>
      <Text style={styles.quizTitle}>{item.title}</Text>
      <View style={styles.authorContainer}>
        <Image source={{ uri: item.authorAvatar }} style={styles.authorAvatar} />
        <Text style={styles.authorName}>{item.author}</Text>
      </View>
    </View>
    <View style={[
      styles.questionBadge, 
      item.category === 'Project Management' ? styles.redBadge : styles.purpleBadge
    ]}>
      <Text style={styles.questionCount}>{item.questions}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  quizItem: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginBottom: 15,
    borderRadius: 12,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  quizContent: {
    flex: 1,
  },
  quizCategory: {
    fontSize: 12,
    color: '#888',
    marginBottom: 4,
  },
  quizTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  authorAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 8,
  },
  authorName: {
    fontSize: 13,
    color: '#666',
  },
  questionBadge: {
    width: 30,
    height: 30,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBadge: {
    backgroundColor: '#6C63FF',
  },
  redBadge: {
    backgroundColor: '#FF6B6B',
  },
  questionCount: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
});

export default QuizItem;