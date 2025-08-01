import styles from "./Statistics.module.scss";

import PropTypes from "prop-types";
import { Title } from "./Title/Title";
import { StatisticsList } from "./StatisticsList/StatisticsList";
export const Statistics = ({ title = "", stats }) => {
  return (
    <section className={styles.statistics}>
      <Title title={title} />
      <StatisticsList stats={stats} />
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.object.isRequired,
};