// src/styles.ts
import {StyleSheet, useColorScheme} from 'react-native';

export const themeColors = {
  light: {
    background: '#F0F0F0', // Light grey for light mode background
    primaryText: '#2E2E2E', // Nearly black for text in light mode
    secondaryText: '#595959', // Dark grey for secondary text in light mode
    bubbleUser: '#FFFFFF', // White for user chat bubble in light mode
    bubbleGuru: '#EAEAEA', // Light grey for guru chat bubble in light mode
    // Define other colors as needed for light mode
  },
  dark: {
    background: '#121212', // Very dark grey for dark mode background
    primaryText: '#FFFFFF', // White for text in dark mode
    secondaryText: '#B3B3B3', // Light grey for secondary text in dark mode
    bubbleUser: '#1E1E1E', // Darker grey for user chat bubble in dark mode
    bubbleGuru: '#2C2C2C', // Even darker grey for guru chat bubble in dark mode
    // Define other colors as needed for dark mode
  },
};

export const Colors = {
  light: {
    primary: '#8E44AD', // Purple
    text: '#333333', // Almost black
    background: '#FFFFFF', // White
    // Define other colors as needed
  },
  dark: {
    primary: '#9B59B6', // Slightly lighter purple for contrast
    text: '#ECF0F1', // Almost white
    background: '#17202A', // Almost black
    // Define other colors as needed
  },
};

export const globalStyles = StyleSheet.create({
  chatBubble: {
    padding: 10,
    borderRadius: 20,
    maxWidth: '80%',
    alignSelf: 'flex-start',
    margin: 5,
    // Other styles for chat bubble
  },
  chatBubbleText: {
    fontSize: 16,
    // Other text styles
  },
  lightMode: {
    chatBubbleGuru: '#E0E0E0', // Light gray for Guru chat bubble
    chatBubbleUser: '#FFDAB9', // Light peach for User chat bubble
    text: '#333333', // Dark gray for text
    // ... other light mode colors
    backgroundColor: '#FAF0E6',
  },
  lightModeAlt: {
    chatBubbleGuru: '#E0E0E0', // Light gray for Guru chat bubble
    chatBubbleUser: '#FFDAB9', // Light peach for User chat bubble
    text: '#FFDAB9',
    // ... other light mode colors
    backgroundColor: '#F0F0F0',
  },

  // Define dark mode colors
  darkMode: {
    chatBubbleGuru: '#37474F', // Dark gray for Guru chat bubble
    chatBubbleUser: '#607D8B', // Blue Gray for User chat bubble
    text: '#FFFFFF', // White for text
    backgroundColor: '#17202A',
    // ... other dark mode colors
  },
  container: {
    flex: 1,
  },
  // Define other global styles as needed
});
export default themeColors;

// Function to get styles based on the theme
export const getThemedStyles = (isDarkMode: any) => {
  StyleSheet.create({
    chatBubble: {
      ...globalStyles.chatBubble,
      backgroundColor: isDarkMode ? Colors.dark.primary : Colors.light.primary,
    },
    chatBubbleText: {
      ...globalStyles.chatBubbleText,
      color: isDarkMode ? Colors.dark.text : Colors.light.text,
    },
    // Other components' styles that depend on the theme
  });
}

export function useAppColorScheme() {
  const scheme = useColorScheme();
  return scheme === 'dark' ? globalStyles.darkMode : globalStyles.lightMode;
}
