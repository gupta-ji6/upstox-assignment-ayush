import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import styles from './Holding.styles';
import useHoldings from '../../hooks/useHoldings';
import { Seperator } from '../../components/Seperator';
import PortfolioSummary from '../../components/PortfolioSummary';
import { currencyFormatter } from '../utils/currencyFormatter';

const Holding = () => {
  const { data, isError, isLoading, error, isRefetching, refetch } =
    useHoldings();

  const renderHoldings = ({ item }) => {
    return (
      <View
        style={{
          backgroundColor: 'white',
          paddingVertical: 16,
          paddingHorizontal: 12,
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
            {item.symbol}
          </Text>
          <Text style={{ fontSize: 14 }}>
            LTP:{' '}
            <Text style={{ fontWeight: 'bold', fontSize: 14 }}>
              {currencyFormatter(item.ltp)}
            </Text>
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Text style={{ fontSize: 12 }}>{item.quantity}</Text>
          <Text style={{ fontSize: 14 }}>
            P/L:{' '}
            <Text style={{ fontWeight: 'bold', fontSize: 14 }}>
              {item.profit}
            </Text>
          </Text>
        </View>
      </View>
    );
  };

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          gap: 10,
        }}
      >
        <ActivityIndicator size='large' />
        <Text>Loading your holdings...</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View>
        <Text>{JSON.stringify(error)}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderHoldings}
        ItemSeparatorComponent={Seperator}
        onRefresh={refetch}
        refreshing={isRefetching}
      />

      <PortfolioSummary />
    </View>
  );
};

export default Holding;
