import styles from "./StatisticsList.module.scss";

import { StatisticsItem } from "../StatisticsItem/StatisticsItem";
export const StatisticsList = ({ stats }) => {
  return (
    <ul className={styles.statisticslist}>
      {stats.map(({ name, value }, index) => (
        <li className={styles.statisticslist__item} key={index}>
          <StatisticsItem name={name} value={value} />
        </li>
      ))}
    </ul>
  );
};