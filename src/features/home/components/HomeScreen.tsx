import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useChat from '../hooks/useChat';
import AIHeader from './AIHeader';
import QuickActions from './QuickActions';
import ChatBubble from './ChatBubble';
import MessageInput from './MessageInput';
import { colors } from '../../../theme/HomeTheme';

export default function HomeScreen() {
  const { messages, send } = useChat([
    { id: 'init', 
      text: "Hello! I'm your AI assistant. How can I help you today?", 
      outgoing: false 
    },
  ]);

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <AIHeader />
        <QuickActions onPress={(a) => send(a)} />

        <View style={styles.chatArea}>
          {messages.map((m) => (
            <ChatBubble key={m.id} text={m.text} outgoing={!!m.outgoing} />
          ))}
        </View>
      </ScrollView>

      <View style={styles.inputContainer}>
        <MessageInput onSend={send} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.gradientStart },
  container: { paddingBottom: 100 },
  chatArea: { marginTop: 12, paddingHorizontal: 16 },
  inputContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
  },
});