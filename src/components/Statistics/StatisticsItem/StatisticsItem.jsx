import styles from "./StatisticsItem.module.scss";

import PropTypes from "prop-types";
export const StatisticsItem = ({ name, value }) => {
  return (
    <>
      <span className={styles.name}>.{name}</span>
      <span className={styles.value}>{value}%</span>
    </>
  );
};

StatisticsItem.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};