const Shimmer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {Array(12)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="bg-gray-200 rounded-xl shadow-md overflow-hidden animate-pulse"
          >
            {/* Image placeholder */}
            <div className="h-40 bg-gray-300"></div>

            {/* Text placeholders */}
            <div className="p-4 space-y-3">
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              <div className="h-4 bg-gray-300 rounded w-1/4"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
