import { Holding } from '../hooks/useHoldings';
import { getCurrentValue } from './getCurrentValue';

const getTotalCurrentValue = (holdings: Holding[]) => {
  const totalCurrentValue = holdings.reduce((acc, holding) => {
    return acc + getCurrentValue(holding.ltp, holding.quantity);
  }, 0);

  return totalCurrentValue;
};

export default getTotalCurrentValue;
