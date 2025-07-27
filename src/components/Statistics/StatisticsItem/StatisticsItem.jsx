import PropTypes from "prop-types";
export const StatisticsItem = ({ name, value }) => {
  return (
    <>
      <span>.{name}</span>
      <span>{value}%</span>
    </>
  );
};

StatisticsItem.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};