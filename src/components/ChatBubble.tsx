// src/components/ChatBubble.tsx
import React from 'react';
import {View, Text, StyleSheet, useColorScheme, Image} from 'react-native';
import themeColors from '../styles';

type ChatBubbleProps = {
  message: string;
  isGuru: boolean;
  timestamp: string;
};

function formatTimestamp(timestamp?: string): string {
  if (!timestamp) {
    return '';
  }

  const date = new Date(timestamp);
  if (isNaN(date.getTime())) {
    console.error(`Invalid date object created from timestamp: ${timestamp}`);
    return '';
  }

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 || 12;
  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
  return `${formattedHours}:${formattedMinutes} ${ampm}`;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({
  message,
  isGuru,
  timestamp,
}) => {
  const scheme = useColorScheme();
  const isDarkMode = scheme === 'dark';
  const colors = isDarkMode ? themeColors.dark : themeColors.light;

  return (
    <View
      style={[
        styles.messageRow,
        // {backgroundColor: colors.background}, // Apply the background color based on the theme
        isGuru ? styles.guruRow : styles.userRow,
      ]}>
      {isGuru && (
        <Image source={require('../guru.png')} style={styles.avatar} />
      )}
      <View
        style={[
          styles.bubbleContainer,
          {backgroundColor: isGuru ? colors.bubbleGuru : colors.bubbleUser},
        ]}>
        <Text style={[styles.messageText, {color: colors.primaryText}]}>
          {message}
        </Text>
        <Text style={[styles.timestamp, {color: colors.secondaryText}]}>
          {formatTimestamp(timestamp)}
        </Text>
      </View>
      {!isGuru && (
        <Image source={require('../user.png')} style={styles.avatar} />
      )}
      {/* Placeholder for read receipts */}
      {/* {!isGuru && <Text style={styles.readReceipt}>✓✓</Text>} */}
    </View>
  );
};

const styles = StyleSheet.create({
  messageRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginVertical: 4,
  },
  guruRow: {
    justifyContent: 'flex-start',
  },
  userRow: {
    justifyContent: 'flex-end',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginHorizontal: 8,
  },
  timestamp: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
    alignSelf: 'flex-end',
  },
  readReceipt: {
    fontSize: 10,
    color: '#888',
    marginLeft: 5,
  },
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
    marginVertical: 1,
    // marginHorizontal: 10,
    minWidth: '10%', // Minimum width for short messages
    maxWidth: '80%', // Maximum width for longer messages
    elevation: 2, // for Android shadow
    shadowColor: '#000', // for iOS shadow
    shadowOffset: {width: 0, height: 2}, // for iOS shadow
    shadowOpacity: 0.1, // for iOS shadow
    shadowRadius: 2, // for iOS shadow
    alignSelf: 'flex-start',
  },
  guruBubble: {
    backgroundColor: '#E0E0E0',
    alignSelf: 'flex-end',
  },
  userBubble: {
    backgroundColor: '#FFDAB9',
  },
  messageText: {
    fontSize: 16,
    color: '#333',
  },
});

export default ChatBubble;
