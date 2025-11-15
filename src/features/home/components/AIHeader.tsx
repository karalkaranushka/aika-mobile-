import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { colors, spacing } from '../../../theme/HomeTheme';

export default function AIHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.avatar} />
      <Text style={styles.title}>AI Assistant</Text>
      <Text style={styles.subtitle}>How can I help you today?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: spacing(4),
    marginBottom: spacing(3),
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#3a4ebb',
    // subtle glow using shadow (iOS) and elevation + extra view on Android
    shadowColor: '#4ea3ff',
    shadowOpacity: 0.15,
    shadowRadius: 20,
    marginBottom: spacing(2),
  },
  title: {
    color: colors.textPrimary,
    fontSize: 26,
    fontWeight: '600',
    marginTop: spacing(1),
  },
  subtitle: {
    color: colors.textMuted,
    fontSize: 16,
    marginTop: 6,
  },
});