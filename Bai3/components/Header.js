import React from 'react';
import { Animated, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Header = ({ 
  headerHeight, 
  avatarOpacity, 
  avatarScale, 
  greetingOpacity, 
  greetingTranslateY, 
  tabsTranslateY,
  tabs,
  activeTab,
  setActiveTab
}) => {
  return (
    <Animated.View style={[styles.header, { height: headerHeight }]}>
      <Animated.View 
        style={[
          styles.headerContent, 
          { 
            opacity: greetingOpacity,
            transform: [{ translateY: greetingTranslateY }] 
          }
        ]}
      >
        <Animated.Image 
          source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }} 
          style={[
            styles.avatar,
            {
              opacity: avatarOpacity,
              transform: [{ scale: avatarScale }]
            }
          ]} 
        />
        <Animated.View style={styles.greeting}>
          <Text style={styles.greetingText}>Mornin' Mark!</Text>
          <Text style={styles.subGreetingText}>Ready for a quiz?</Text>
        </Animated.View>
      </Animated.View>
      
      {/* Tabs */}
      <Animated.View 
        style={[
          styles.tabsContainer,
          { transform: [{ translateY: tabsTranslateY }] }
        ]}
      >
        {tabs.map((tab, index) => (
          <TouchableOpacity 
            key={index}
            style={[styles.tab, activeTab === index && styles.activeTab]}
            onPress={() => setActiveTab(index)}
          >
            <Text 
              style={[styles.tabText, activeTab === index && styles.activeTabText]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#0D9F6F',
    overflow: 'hidden',
    zIndex: 10,
  },
  headerContent: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.5)',
  },
  greeting: {
    flex: 1,
  },
  greetingText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  subGreetingText: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 16,
    marginTop: 4,
  },
  tabsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  tab: {
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginRight: 5,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: 'white',
  },
  tabText: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontWeight: '500',
  },
  activeTabText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Header;