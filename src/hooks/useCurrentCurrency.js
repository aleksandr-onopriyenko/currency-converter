import { useFetchCurrencyQuery } from '../api/sliceAPI';
import formatDateFromUnix from '../utils/date-formater';

const useCurrentCurrency = () => {
  const { data, isLoading } = useFetchCurrencyQuery('UAH');
  const currentCurrency = !isLoading && Object.keys(data.conversion_rates).filter((currency) => currency === 'USD' || currency === 'EUR').map((currency) => ({ currency, rate: data.conversion_rates[currency] }));
  const timeUpdateCurrentCurrency = !isLoading && formatDateFromUnix(data.time_last_update_unix);

  return { currentCurrency, timeUpdateCurrentCurrency, isLoading };
};

export default useCurrentCurrency;
