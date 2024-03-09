import { View, Text } from 'react-native';
import React from 'react';

export const PortfolioSummaryListItem = ({ title, value }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
      }}
    >
      <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{title}:</Text>
      <Text>{value ?? '-'}</Text>
    </View>
  );
};
