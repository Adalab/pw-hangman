import '../styles/Loading.scss';

const Loading = props => {
  return props.loading ? <span className="loading" /> : null;
};

export default Loading;
