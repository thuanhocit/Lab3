// components/ListItem.js
import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, Animated, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const ListItem = React.memo(({ item, viewableItems }) => {
  const opacity = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0.8)).current;
  const translateY = useRef(new Animated.Value(20)).current;

  // Check if this item is visible in the viewable items array
  const isVisible = () => {
    return viewableItems.some(
      viewableItem => viewableItem.isViewable && viewableItem.item.id === item.id
    );
  };

  useEffect(() => {
    if (isVisible()) {
      // Item is visible, animate in
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 1,
          duration: 350,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 0,
          duration: 350,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      // Item is not visible, animate out (optional)
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 0.8,
          duration: 350,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 20,
          duration: 350,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [viewableItems]);

  const animatedStyle = {
    opacity,
    transform: [
      { scale },
      { translateY }
    ],
  };

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <Text style={styles.title}>{item.title}</Text>
    </Animated.View>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7DD3FC', // Light blue color
    borderRadius: 12,
    padding: 20,
    marginBottom: 12,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#0C4A6E',
  },
});

export default ListItem;