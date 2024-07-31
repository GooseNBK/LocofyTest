import PropTypes from "prop-types";

const DevicesSamsungVert = ({
  className = "",
  body,
  screen1,
  reflections,
  group71,
}) => {
  return (
    <div
      className={`absolute h-[114.17%] w-[34.17%] top-[11.07%] right-[11.46%] bottom-[-25.25%] left-[54.38%] ${className}`}
    >
      <div className="absolute h-full w-[99.94%] top-[0%] right-[0.02%] bottom-[0%] left-[0.04%]">
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src={body}
        />
        <img
          className="absolute h-[94.9%] w-[95.24%] top-[2.11%] right-[2.42%] bottom-[2.99%] left-[2.34%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src={screen1}
        />
        <img
          className="absolute h-[98.18%] w-[95.24%] top-[0.94%] right-[2.42%] bottom-[0.88%] left-[2.34%] max-w-full overflow-hidden max-h-full object-contain"
          alt=""
          src={reflections}
        />
        <div className="absolute h-[3.34%] w-[16.27%] top-[3.46%] right-[8.03%] bottom-[93.2%] left-[75.7%]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-7xl-5 bg-black" />
          <div className="absolute h-[65.41%] w-[84.63%] top-[18.31%] right-[7%] bottom-[16.28%] left-[8.37%]">
            <img
              className="absolute h-[92.44%] w-[30.72%] top-[3.11%] right-[69.28%] bottom-[4.44%] left-[0%] max-w-full overflow-hidden max-h-full object-contain"
              alt=""
              src="/group-7@2x.png"
            />
            <img
              className="absolute h-full w-[33.23%] top-[0%] right-[0%] bottom-[0%] left-[66.77%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src={group71}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

DevicesSamsungVert.propTypes = {
  className: PropTypes.string,
  body: PropTypes.string,
  screen1: PropTypes.string,
  reflections: PropTypes.string,
  group71: PropTypes.string,
};

export default DevicesSamsungVert;
