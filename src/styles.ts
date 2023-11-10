// src/styles.ts
import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    guruTheme: {
        backgroundColor: '#F3E8FF', // A light purple background for a calming effect
        color: '#6B46C1', // A darker purple for text to provide a good contrast
    },
    chatBubbleGuru: {
        backgroundColor: '#D6BCFA', // A softer purple for the Guru's chat bubbles
    },
    chatBubbleUser: {
        backgroundColor: '#BEE3F8', // A soft blue for the user's chat bubbles
    },
    inputField: {
        backgroundColor: '#FAF5FF', // A very light purple for the input field background
        color: '#553C9A', // Dark purple for the input text
    },
    // ... other styles
});
