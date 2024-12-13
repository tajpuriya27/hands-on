import { Link } from "react-router-dom";

function Error() {
  return (
    <div
      id="error-div"
      className="flex-col items-center h-screen justify-center flex"
    >
      <h1>Error page</h1>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Error;
