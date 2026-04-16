const Shimmer = ({ count = 10 }) => {
  return (
    <div className="shimmer-container">
      {Array(count)
        .fill("")
        .map((_, index) => (
          <div key={index} className="shimmer-card">
            <div className="shimmer-img"></div>
            <div className="shimmer-line"></div>
            <div className="shimmer-line"></div>
            <div className="shimmer-line" style={{ width: "60%" }}></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;