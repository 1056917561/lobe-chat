import {
  chatsMessageString,
  currentChats,
  currentChatsWithGuideMessage,
  currentChatsWithHistoryConfig,
  getChatsById,
} from './chat';
import { currentTopics, getTopicMessages } from './topic';

export const chatSelectors = {
  chatsMessageString,
  currentChats,
  currentChatsWithGuideMessage,
  currentChatsWithHistoryConfig,
  getChatsById,
};

export const topicSelectors = {
  currentTopics,
  getTopicMessages,
};
