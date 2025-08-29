import { useRouteError, Link } from "react-router";

const Error = () => {
  const err = useRouteError();
  console.error(err);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6">
      <h1 className="text-6xl font-bold text-red-500 mb-4">
        {err.status || "⚠️"}
      </h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        {err.statusText || "Something went wrong"}
      </h2>
      <p className="text-gray-500 text-center max-w-md mb-6">
        {err.data?.message || "We couldn’t find the page you were looking for. It might have been removed, renamed, or is temporarily unavailable."}
      </p>

      <div className="flex gap-4">
        <button
          onClick={() => window.history.back()}
          className="px-5 py-2 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-300 transition-all"
        >
          ⬅️ Go Back
        </button>
        <Link
          to="/"
          className="px-5 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow hover:bg-yellow-300 transition-all"
        >
          🏠 Go Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
