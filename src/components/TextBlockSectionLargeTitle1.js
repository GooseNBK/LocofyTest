import PropTypes from "prop-types";

const TextBlockSectionLargeTitle1 = ({ className = "" }) => {
  return (
    <div
      className={`absolute h-[28.02%] w-[36.11%] top-[17.72%] right-[52.43%] bottom-[54.26%] left-[11.46%] text-left text-base text-colour-main-blue-400 font-bold-26 ${className}`}
    >
      <div className="absolute w-full top-[112px] left-[0px] leading-[26px] inline-block">
        <p className="[margin-block-start:0] [margin-block-end:10px]">{`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus `}</p>
        <p className="m-0">
          mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
          sem. Nulla consequat massa quis enim.
        </p>
      </div>
      <div className="absolute w-full top-[0px] left-[0px] text-17xl leading-[48px] font-medium text-colour-main-blue-900 inline-block">{`Design & Build Your Own Landing Pages`}</div>
    </div>
  );
};

TextBlockSectionLargeTitle1.propTypes = {
  className: PropTypes.string,
};

export default TextBlockSectionLargeTitle1;
