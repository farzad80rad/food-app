import { Link } from "react-router-dom";
import "../assets/appHeader";
// cart from store

const AppToast = (props) => {
  const { content } = props;
  return <div className="toast">{content}</div>;
};

export default AppToast;
