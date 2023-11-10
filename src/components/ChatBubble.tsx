// src/components/ChatBubble.tsx
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {globalStyles} from '../styles';

type ChatBubbleProps = {
  message: string;
  isGuru: boolean;
};

const ChatBubble: React.FC<ChatBubbleProps> = ({message, isGuru}) => {
  return (
    <View
      style={[
        styles.bubbleContainer,
        isGuru ? globalStyles.chatBubbleGuru : globalStyles.chatBubbleUser,
      ]}>
      <Text style={styles.messageText}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: '80%',
    borderRadius: 20,
    padding: 10,
    marginVertical: 4,
  },
  guru: {
    backgroundColor: '#ddd',
    alignSelf: 'flex-start',
  },
  user: {
    backgroundColor: '#007bff',
    alignSelf: 'flex-end',
  },
  message: {
    fontSize: 16,
  },
  bubbleContainer: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    flexShrink: 1, // allows the bubble to shrink to fit the text content
    borderRadius: 20,
    padding: 10,
    marginVertical: 4,
    marginHorizontal: 10,
    minWidth: '10%', // Minimum width for short messages
    maxWidth: '80%', // Maximum width for longer messages
    elevation: 2, // for Android shadow
    shadowColor: '#000', // for iOS shadow
    shadowOffset: {width: 0, height: 2}, // for iOS shadow
    shadowOpacity: 0.1, // for iOS shadow
    shadowRadius: 2, // for iOS shadow
  },
  guruBubble: {
    backgroundColor: '#E0E0E0',
    alignSelf: 'flex-start',
  },
  userBubble: {
    backgroundColor: '#FFDAB9',
    alignSelf: 'flex-end',
  },
  messageText: {
    fontSize: 16,
    color: '#333',
  },
});

export default ChatBubble;
