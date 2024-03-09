import { View, Text } from 'react-native';
import React from 'react';
import useHoldings from '../hooks/useHoldings';

const PortfolioSummary = () => {
  const { data, isError, isLoading, error } = useHoldings();

  return (
    <View
      style={{
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'white',
        width: '100%',
        paddingBottom: 36,
        paddingTop: 16,
        paddingHorizontal: 12,
      }}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>^</Text>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Profit & Loss</Text>
        <Text>{data?.quantity ? data.quantity : '-'}</Text>
      </View>
    </View>
  );
};

export default PortfolioSummary;
