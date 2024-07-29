import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

//create an 404 page here using organge-500 color for the heading text
const NotFound = () => {
  return (
    <div className="flex items-center justify-center py-32 flex-col">
      <Helmet>
        <title>404 Not Found</title>
      </Helmet>
      <h1 className="text-orange-500 text-[6rem] font-bold">404 Not Found</h1>
      <p className="text-gray-500 text-lg">
        The page you are looking for does not exist.
      </p>
      <Link to="/" className="mt-4 text-orange-500 hover:underline">
        Go back to home
      </Link>
    </div>
  );
};

export default NotFound;
