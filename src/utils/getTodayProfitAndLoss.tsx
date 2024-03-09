import { Holding } from '../hooks/useHoldings';

const getTodayProfitAndLoss = (holdings: Holding[]) => {
  if (holdings.length === 0) return 0;

  const todayProfitAndLoss = holdings.reduce((acc, holding) => {
    return acc + (holding.close - holding.ltp) * holding.quantity;
  }, 0);

  return todayProfitAndLoss;
};

export default getTodayProfitAndLoss;
