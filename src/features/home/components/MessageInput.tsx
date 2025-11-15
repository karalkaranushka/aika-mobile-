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

export default function MessageInput({ onSend }: { onSend: (text: string) => void }) {
  const [text, setText] = useState('');

  const send = () => {
    if (!text.trim()) return;
    onSend(text.trim());
    setText('');
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
      <TouchableOpacity style={styles.iconBtn} onPress={send}>
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
    padding: 14,
    borderRadius: 30,
    backgroundColor: 'rgba(255,255,255,0.03)',
    color: colors.textPrimary,
    marginRight: 10,
  },
  iconBtn: {
    width: 52,
    height: 52,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7c3aed',
  },
});