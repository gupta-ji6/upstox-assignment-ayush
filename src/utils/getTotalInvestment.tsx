import type { Holding } from '../hooks/useHoldings';
import { getInvestmentValue } from './getInvestmentValue';

const getTotalInvestment = (holdings: Holding[]) => {
  const totalInvestmentValue = holdings.reduce((acc, holding) => {
    return acc + getInvestmentValue(holding.avgPrice, holding.quantity);
  }, 0);

  return totalInvestmentValue;
};

export default getTotalInvestment;
