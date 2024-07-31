import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  return (
    <div
      className={`absolute h-[4.67%] w-full top-[95.33%] right-[0%] bottom-[0%] left-[0%] text-left text-sm text-colour-secondary-white-100-general font-bold-26 ${className}`}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-lavender" />
      <div className="absolute h-[12.04%] w-[7.57%] top-[31.02%] right-[11.46%] bottom-[56.94%] left-[80.97%] text-center text-xs">
        <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-sm bg-colour-main-blue-800" />
        <div className="absolute w-full top-[calc(50%_-_9px)] left-[0px] leading-[18px] font-medium inline-block">
          Purchase now
        </div>
      </div>
      <div className="absolute top-[calc(50%_-_40px)] left-[11.46%] leading-[24px] font-medium text-colour-main-grey-400">
        ©2023 Yourcompany
      </div>
      <div className="absolute w-[17.01%] top-[calc(50%_+_52px)] right-[71.53%] left-[11.46%] h-6 text-colour-main-blue-300">
        <div className="absolute top-[calc(50%_-_12px)] left-[0%] leading-[24px]">
          Home
        </div>
        <div className="absolute top-[calc(50%_-_12px)] left-[40%] leading-[24px]">
          About
        </div>
        <div className="absolute top-[calc(50%_-_12px)] left-[80%] leading-[24px]">
          Contact
        </div>
      </div>
      <img
        className="absolute h-[7.41%] w-[1.11%] top-[75.93%] right-[11.46%] bottom-[16.67%] left-[87.43%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/iconsocialinstagram@2x.png"
      />
      <img
        className="absolute h-[7.41%] w-[1.11%] top-[75.93%] right-[14.65%] bottom-[16.67%] left-[84.24%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/iconsocialinstagram-copy@2x.png"
      />
      <img
        className="absolute h-[7.41%] w-[1.11%] top-[75.93%] right-[17.85%] bottom-[16.67%] left-[81.04%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/iconsocialinstagram-copy-2.svg"
      />
      <img
        className="absolute h-[7.41%] w-[1.11%] top-[75.93%] right-[21.04%] bottom-[16.67%] left-[77.85%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/iconsocialinstagram-copy-3@2x.png"
      />
      <img
        className="absolute h-[7.41%] w-[1.11%] top-[75.93%] right-[24.24%] bottom-[16.67%] left-[74.65%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/iconsocialinstagram-copy-4.svg"
      />
      <div className="absolute h-[0.46%] w-[77.08%] top-[64.35%] right-[11.46%] bottom-[35.19%] left-[11.46%] bg-lightgray" />
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
