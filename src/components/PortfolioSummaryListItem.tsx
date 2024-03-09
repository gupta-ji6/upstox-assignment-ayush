import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export const PortfolioSummaryListItem = ({ title, value }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}:</Text>
      <Text>{value ?? '-'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
