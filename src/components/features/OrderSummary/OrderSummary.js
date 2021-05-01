import React from 'react';
import PropTypes from 'prop-types';

import styles from './OrderSummary.scss';
import { formatPrice } from './../../../utils/formatPrice';
import { calculateTotal } from './../../../utils/calculateTotal';

const OrderSummary = (props, options) => {
  return (
    <h2 className={styles.component}>
      Total:
      {/* Czego nie rozumiem? Najpierw pisą tak:

       Wykorzystamy do tego funkcje z katalogu utils – formatPrice oraz calculateTotal. Druga z nich otrzyma jako argument wynik wywołania tej pierwszej.

      Czyli według opisu powinno być tak...?
      calculateTotal(formatPrice(props.tripCost), options)

      A potem piszą:
      Następnie, w kodzie JSX, wywołaj funkcję formatPrice. Jako jej argument podaj wywołanie funkcji calculateTotal, która ma otrzymać dwa argumenty – koszt wycieczki i opcje ze stanu aplikacji.

      Czyli tak: formatPrice(calculateTotal(props.tripCost, options))

      Czy mi coś umyka?
      W sumie ta pierwsza opcja wywala błąd, ale jest napisane jak jest napisane a wiec juz nie wiem czy ja nie umiem czytac czy co?

      Ta druga opcja błędu nie wywala ale nie liczy ceny więc powaliłem coś z options tylko teraz dojdź co 👅
       */}
      <strong>{formatPrice(calculateTotal(props.tripCost, options))}</strong>
    </h2>
  );
};

OrderSummary.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.array,
};

export default OrderSummary;
