import { Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Animated, { FadeInDown, FadeOutDown } from 'react-native-reanimated';
import { Feather } from '@expo/vector-icons';
import useHoldings from '../hooks/useHoldings';
import { PortfolioSummaryListItem } from './PortfolioSummaryListItem';

const PortfolioSummary = () => {
  const { data, isError, isLoading, error } = useHoldings();

  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <Animated.View
      style={{
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'white',
        width: '100%',
        paddingBottom: 36,
        paddingHorizontal: 12,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        borderCurve: 'continuous',
      }}
    >
      <TouchableOpacity
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          // backgroundColor: 'grey',
          paddingTop: 4,
          paddingBottom: 16,
        }}
        onPress={() => {
          setIsCollapsed(!isCollapsed);
        }}
      >
        <Feather
          name={isCollapsed ? 'chevron-up' : 'chevron-down'}
          size={24}
          color='grey'
        />
      </TouchableOpacity>

      {!isCollapsed ? (
        <Animated.View
          entering={FadeInDown}
          style={{ paddingBottom: 16, rowGap: 4 }}
        >
          <PortfolioSummaryListItem
            title='Current Value'
            value={data?.quantity}
          />
          <PortfolioSummaryListItem
            title='Total Investment'
            value={data?.quantity}
          />
          <PortfolioSummaryListItem
            title="Today's Profit & Loss"
            value={data?.quantity}
          />
        </Animated.View>
      ) : null}

      <PortfolioSummaryListItem title='Profit & Loss' value={data?.quantity} />
    </Animated.View>
  );
};

export default PortfolioSummary;
