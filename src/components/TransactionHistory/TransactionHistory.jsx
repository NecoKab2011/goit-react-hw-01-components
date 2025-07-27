import PropTypes from "prop-types";
import { TransactionItem } from "./TransactionItem/TransactionItem";
export const TransactionHistory = ({ transactions }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <TransactionItem type={type} amount={amount} currency={currency} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.object.isRequired,
};