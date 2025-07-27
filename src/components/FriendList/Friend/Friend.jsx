import PropTypes from "prop-types";
export const Friend = ({ avatar, name, isOnline }) => {
  return (
    <>
      <span>{isOnline ? "online" : "offline"}</span>
      <img width={200} src={avatar} alt={name} />
      <p>{name}</p>
    </>
  );
};

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};