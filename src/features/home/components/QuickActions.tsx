import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, spacing } from '../../../theme/HomeTheme';

const ACTIONS = ['Schedule meeting', 'Email summary', 'Set reminder', 'Write note'];

export default function QuickActions({ onPress }: { onPress?: (action: string) => void }) {
  return (
    <View style={styles.row}>
      {ACTIONS.map((a) => (
        <TouchableOpacity key={a} style={styles.btn} onPress={() => onPress?.(a)}>
          <Text style={styles.btnText}>{a}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10 as any,
    marginHorizontal: spacing(2),
  },
  btn: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 24,
    backgroundColor: 'rgba(255,255,255,0.03)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.03)',
    margin: 6,
  },
  btnText: {
    color: colors.textPrimary,
  },
});