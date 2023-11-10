// TypingIndicator.tsx

import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const TypingIndicator = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="small" />
      <Text style={styles.text}>Guru is typing...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  text: {
    marginLeft: 10,
    fontSize: 14,
    color: '#666',
  },
});

export default TypingIndicator;
