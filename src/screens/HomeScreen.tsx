/* eslint-disable react-native/no-inline-styles */
// path/filename: src/screens/HomeScreen.tsx
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import the icon component
import Video from 'react-native-video';

import {globalStyles} from '../styles';
import {useColorScheme} from 'react-native';
import {createUser} from '../api/chatService';

const {width, height} = Dimensions.get('window');
const video = require('./../intro.webm');

const HomeScreen = ({navigation}) => {
  const scheme = useColorScheme();
  const isDarkMode = scheme === 'dark';
  const avatarScale = useSharedValue(1); // Animated values for pulsating effect
  const [muted, setMuted] = React.useState(false);
  const dispatch = useDispatch();
  const user_id = useSelector((state: any) => state.user_id);
  const thread_id = useSelector((state: any) => state.thread_id);

  // If you uncomment this, you delete all local backups of your conversation
  // dispatch({type: 'RESET', payload: {}});
  navigation.addListener(
    'focus',
    async (uid: Object) => {
      console.log('HomeScreen focused');
      console.log('uid: ', uid);
      console.log('user_id: ', user_id);
      if (user_id === undefined) {
        console.log('No User found, creating new user');
        const id = await createUser();
        console.log('User created, user_id: ', id);
        dispatch({type: 'UPDATE_USER_ID', payload: id});
      }
    },
    [user_id],
  );

  // Set up the animation
  React.useEffect(() => {
    avatarScale.value = withRepeat(
      withTiming(1.05, {duration: 1000, easing: Easing.inOut(Easing.ease)}),
      -1, // repeat indefinitely
      true, // and reverse
    );
  }, [avatarScale]);

  const animatedAvatarStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: avatarScale.value}],
    };
  });

  // Dynamic styles for dark mode
  const dynamicStyles = StyleSheet.create({
    text: {
      color: globalStyles.darkMode.text,
    },
    button: {
      backgroundColor: isDarkMode ? '#374151' : '#60A5FA',
      padding: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: isDarkMode ? '#F9FAFB' : '#1F2937',
      fontWeight: 'bold',
    },
  });

  return (
    <View style={styles.container}>
      <Video
        source={video}
        style={styles.backgroundVideo}
        muted={muted}
        repeat={true}
        resizeMode={'cover'}
        rate={1.0}
        ignoreSilentSwitch={'obey'}
        playInBackground={true}
        controls={true}
        onBuffer={() => {
          console.log('buffering');
        }}
        onError={e => {
          console.error(e);
        }}
      />
      <Text style={[styles.title, dynamicStyles.text]}>
        Welcome to Guru Chat
      </Text>
      {user_id && (
        <Text style={{left: 10, top: 35, position: 'absolute'}}>
          User ID: {user_id}
        </Text>
      )}
      {thread_id && (
        <Text style={{left: 10, top: 50, position: 'absolute'}}>
          Thread ID: {thread_id}
        </Text>
      )}

      <Animated.View style={[styles.gradient, animatedAvatarStyle]}>
        <TouchableOpacity
          style={[styles.button, dynamicStyles.button]}
          onPress={() => {
            setMuted(true);
            navigation.navigate('Chat');
          }}>
          <Text style={dynamicStyles.buttonText}>Go to Chat</Text>
        </TouchableOpacity>
      </Animated.View>

      <TouchableOpacity
        style={styles.muteButton}
        onPress={() => {
          setMuted(!muted);
        }}>
        <Icon
          name={muted ? 'volume-off' : 'volume-up'}
          size={32}
          style={{position: 'absolute', bottom: 20, right: 20}}
          color={
            isDarkMode
              ? globalStyles.darkMode.text
              : globalStyles.lightMode.text
          }
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  muteButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    padding: 10,
  },
  backgroundVideo: {
    height: height,
    width: width,
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'stretch',
    bottom: 0,
    right: 0,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  avatar: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 100,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 20,
    position: 'absolute',
    bottom: 10,
  },
});

export default HomeScreen;
