import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { colors, spacing } from '../../../theme/HomeTheme';

const SendIcon = () => (
  <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
    <Path
      d="M2 21L23 12L2 3V10L17 12L2 14V21Z"
      fill="#fff"
    />
  </Svg>
);

const MicIcon = () => (
  <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"
      fill="#fff"
    />
    <Path
      d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"
      fill="#fff"
    />
  </Svg>
);

export default function MessageInput({ onSend }: { onSend: (text: string) => void }) {
  const [text, setText] = useState('');

  const send = () => {
    if (!text.trim()) return;
    onSend(text.trim());
    setText('');
  };

  const record = () => {
    console.log('Recording voice...');
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Type a message..."
        placeholderTextColor={colors.textMuted}
        style={styles.input}
      />
      <TouchableOpacity style={styles.micBtn} onPress={record}>
        <MicIcon />
      </TouchableOpacity>
      <TouchableOpacity style={styles.sendBtn} onPress={send}>
        <SendIcon />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: spacing(2),
    marginVertical: spacing(2),
  },
  input: {
    flex: 1,
    padding: 18,
    paddingVertical: 18,
    borderRadius: 30,
    backgroundColor: 'rgba(255,255,255,0.03)',
    color: colors.textPrimary,
    marginRight: 6,
  },
  micBtn: {
    width: 52,
    height: 52,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007AFF',
    marginLeft: 8,
  },
  sendBtn: {
    width: 52,
    height: 52,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7c3aed',
    marginLeft: 8,
  },
});