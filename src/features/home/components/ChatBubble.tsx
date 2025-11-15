import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing } from '../../../theme/HomeTheme';

export default function ChatBubble({ text, outgoing = false }: { text: string; outgoing?: boolean }) {
  return (
    <View style={[styles.wrapper, outgoing ? styles.outgoing : styles.incoming]}>
      <Text style={[styles.text, outgoing ? styles.textOutgoing : styles.textIncoming]}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    maxWidth: '85%',
    marginVertical: 8,
    padding: spacing(2),
    borderRadius: 16,
  },
  incoming: {
    alignSelf: 'flex-start',
    backgroundColor: colors.bubbleIncoming,
  },
  outgoing: {
    alignSelf: 'flex-end',
    backgroundColor: colors.bubbleOutgoing,
  },
  text: {
    fontSize: 16,
  },
  textIncoming: { color: colors.textPrimary },
  textOutgoing: { color: colors.textPrimary },
});