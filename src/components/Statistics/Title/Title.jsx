export const Title = ({ title }) => {
  if (!title) {
    return <></>;
  } else {
    return <h2>{title}</h2>;
  }
};