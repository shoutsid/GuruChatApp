// src/screens/ChatScreen.tsx
import React, {useState} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {sendMessage} from '../store';
import ChatBubble from '../components/ChatBubble';
import InputField from '../components/InputField';
import TypingIndicator from '../components/TypingIndicator';

const ChatScreen = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state: any) => state.messages);
  const [isGuruTyping, setIsGuruTyping] = useState(false);

  const handleSend = async (message: any) => {
    setIsGuruTyping(true);
    dispatch(sendMessage(message, updateIsGuruTyping));
  };

  const updateIsGuruTyping = async () => {
    setIsGuruTyping(false);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item, index) => `message-${index}`}
        renderItem={({item}) => (
          <ChatBubble message={item.text} isGuru={item.isGuru} />
        )}
        inverted // To start the chat from the bottom of the screen
      />
      {isGuruTyping && <TypingIndicator />}
      <InputField onSend={handleSend} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF0E6',
  },
});

export default ChatScreen;
