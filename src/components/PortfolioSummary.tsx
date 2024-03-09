import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { Feather } from '@expo/vector-icons';
import useHoldings from '../hooks/useHoldings';
import { PortfolioSummaryListItem } from './PortfolioSummaryListItem';
import getTotalCurrentValue from '../utils/getTotalCurrentValue';
import getTotalInvestment from '../utils/getTotalInvestment';
import { currencyFormatter } from '../utils/currencyFormatter';
import getTodayProfitAndLoss from '../utils/getTodayProfitAndLoss';
import { COLORS } from '../../constants';

const PortfolioSummary = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const { data, isError, isLoading, error } = useHoldings();

  const totalCurrentValue = currencyFormatter(getTotalCurrentValue(data));
  const totalInvestmentValue = currencyFormatter(getTotalInvestment(data));
  const totalProfitAndLoss = currencyFormatter(
    getTotalCurrentValue(data) - getTotalInvestment(data)
  );
  const todayProfitAndLoss = currencyFormatter(getTodayProfitAndLoss(data));

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size='small' color={COLORS.PRIMARY} />
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.container}>
        <Text>{error.message}</Text>
      </View>
    );
  }

  return (
    <Animated.View style={styles.container}>
      <TouchableOpacity
        style={styles.handle}
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
          style={styles.collapsedBodyContainer}
        >
          <PortfolioSummaryListItem
            title='Current Value'
            value={totalCurrentValue}
          />
          <PortfolioSummaryListItem
            title='Total Investment'
            value={totalInvestmentValue}
          />
          <PortfolioSummaryListItem
            title="Today's Profit & Loss"
            value={totalProfitAndLoss}
          />
        </Animated.View>
      ) : null}

      <PortfolioSummaryListItem
        title='Profit & Loss'
        value={todayProfitAndLoss}
      />
    </Animated.View>
  );
};

export default PortfolioSummary;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    width: '100%',
    paddingBottom: 36,
    paddingHorizontal: 12,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderCurve: 'continuous',
  },
  handle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 4,
    paddingBottom: 16,
  },
  collapsedBodyContainer: {
    paddingBottom: 16,
    rowGap: 8,
  },
});
