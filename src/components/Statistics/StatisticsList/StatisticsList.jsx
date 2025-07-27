import { StatisticsItem } from "../StatisticsItem/StatisticsItem";
export const StatisticsList = ({ stats }) => {
  return (
    <ul>
      {stats.map(({ name, value }, index) => (
        <li key={index}>
          <StatisticsItem name={name} value={value} />
        </li>
      ))}
    </ul>
  );
};