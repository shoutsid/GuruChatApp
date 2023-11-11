// src/screens/ChatScreen.tsx
import React, {useState} from 'react';
import {View, FlatList, StyleSheet, useColorScheme, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {createThread, getAIResponse} from '../api/chatService';
import ChatBubble from '../components/ChatBubble';
import InputField from '../components/InputField';
import TypingIndicator from '../components/TypingIndicator';
import {globalStyles} from '../styles';

const ChatScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const messages = useSelector((state: any) => state.messages);
  const user_id = useSelector((state: any) => state.user_id);
  const thread_id = useSelector((state: any) => state.thread_id);

  const [isGuruTyping, setIsGuruTyping] = useState(false);
  const scheme = useColorScheme();
  const isDarkMode = scheme === 'dark';

  const handleSend = async (msg: string) => {
    setIsGuruTyping(true);
    // const t_id = await createThread();
    // console.log('createThread result: ', t_id);
    // dispatch({type: 'UPDATE_THREAD_ID', payload: t_id});

    // Adding message to local state
    const sendTimestamp = new Date().toISOString();
    dispatch({
      type: 'SEND_MESSAGE',
      payload: {text: msg, isGuru: false, timestamp: sendTimestamp},
    });

    const reply_message = await getAIResponse(msg, user_id, thread_id);
    console.log(
      'Received response (sendMessage->getAIResponse): ',
      reply_message,
    );
    const reply = reply_message.content;
    const replyTimestamp = new Date().toISOString();
    dispatch({
      type: 'RECEIVE_MESSAGE',
      payload: {
        text: reply,
        isGuru: true,
        timestamp: replyTimestamp,
      },
    });
    setIsGuruTyping(false);
  };

  return (
    <View
      style={[
        styles.container,
        isDarkMode ? globalStyles.darkMode : globalStyles.lightMode,
      ]}>
      <FlatList
        data={messages}
        keyExtractor={(item, index) => `message-${index}`}
        renderItem={({item}) => (
          <ChatBubble
            message={item.text}
            isGuru={item.isGuru}
            timestamp={item.timestamp}
          />
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
  },
});

export default ChatScreen;
