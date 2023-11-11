// src/api/chatService.js

// This is a mock URL, replace it with the actual API endpoint

// 10.0.2.2 is the default IP address for localhost the Android emulator
//
// const AI_ENDPOINT = 'http://10.0.2.2:8000/ai/response';

import {DefaultService, OpenAPI} from '../client';
import {User} from '../client/models/user';
OpenAPI.BASE = 'https://nearby-ghoul-simple.ngrok-free.app';

export const createUser = () => {
  console.log('createUser');
  let user: User = {
    username: 'sid',
    discriminator: '0',
    avatar: 'http://www.gravatar.com/avatar/?d=identicon', // TODO: Change this to a real avatar
  };
  return DefaultService.createUserAiUserPost(user)
    .then(resp => {
      console.log('Received response (createUser): ', resp);
      if (!resp.id) {
        throw new Error('Network response was not ok.');
      }
      return resp.id;
    })
    .catch(error => {
      console.log('Error in createUser: ', error);
      return undefined;
    });
};

export const createThread = () => {
  console.log('createThread');
  return DefaultService.createThreadAiThreadPost({})
    .then(resp => {
      console.log('Received response (createThread): ', resp);
      if (!resp.id) {
        throw new Error('Network response was not ok.');
      }
      return resp.id;
    })
    .catch(error => {
      console.log(error);
      return null;
    });
};

export const getAIResponse = (
  message: string,
  user_id: number,
  thread_id: number | undefined,
) => {
  console.log('getAIResponse', message, user_id, thread_id);
  const msg = {content: message, role: 'user'};
  return DefaultService.createResponseAiResponsePost(user_id, msg, thread_id)
    .then(resp => {
      console.log(resp);
      if (!resp.content) {
        throw new Error('Network response was not ok.');
      }
      return resp;
    })
    .catch(error => {
      console.log(error);
      const _e = {
        content:
          "I'm sorry, but it looks like I encoured an error while trying to respond to you. Please try again later.",
        role: 'guru',
      };
      return _e;
    });
};
