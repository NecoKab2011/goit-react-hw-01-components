import PropTypes from "prop-types";
import styles from "./TransactionItem.module.scss";

export const TransactionItem = ({ type, amount, currency }) => {
  return (
    <>
      <td className={styles.info}>{type}</td>
      <td className={styles.info}>{amount}</td>
      <td className={styles.info}>{currency}</td>
    </>
  );
};

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};