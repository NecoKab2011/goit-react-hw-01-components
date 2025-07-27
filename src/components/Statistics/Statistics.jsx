import PropTypes from "prop-types";
import { Title } from "./Title/Title";
import { StatisticsList } from "./StatisticsList/StatisticsList";
export const Statistics = ({ title = "", stats }) => {
  return (
    <section>
      <Title title={title} />
      <StatisticsList stats={stats} />
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.object.isRequired,
};