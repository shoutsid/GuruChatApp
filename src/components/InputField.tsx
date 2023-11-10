// src/components/InputField.tsx
import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import the icon component

type InputFieldProps = {
  onSend: (message: string) => void;
};

const InputField: React.FC<InputFieldProps> = ({onSend}) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim().length > 0) {
      onSend(message);
      setMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={message}
        onChangeText={setMessage}
        placeholder="Type your message here..."
        placeholderTextColor="#999"
      />
      <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
        <Icon name="send" size={24} color="#FFDAB9" />
        {/* <Text style={styles.sendButtonText}>Send</Text> */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#f7f7f7',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  input: {
    color: '#333',
    flex: 1,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    borderRadius: 25,
    padding: 10,
    backfaceVisibility: 'hidden',
  },
  sendButton: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  sendButtonText: {
    color: '#FFDAB9', // Text color matching the user bubble
    fontSize: 16,
  },
});

export default InputField;
