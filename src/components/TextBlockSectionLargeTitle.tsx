import PropTypes from "prop-types";

const TextBlockSectionLargeTitle = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[154px] gap-4 text-left text-17xl text-colour-main-blue-900 font-regular-14 mq450:pb-[100px] mq450:box-border ${className}`}
    >
      <h1 className="m-0 self-stretch relative text-inherit leading-[48px] font-medium font-[inherit] shrink-0 mq750:text-10xl mq750:leading-[38px] mq450:text-3xl mq450:leading-[29px]">{`Light, Fast & Powerful`}</h1>
      <div className="self-stretch relative text-base leading-[26px] text-colour-main-blue-400 shrink-0">
        <p className="[margin-block-start:0] [margin-block-end:10px]">{`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus `}</p>
        <p className="m-0">
          mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
          sem. Nulla consequat massa quis enim.
        </p>
      </div>
    </div>
  );
};

TextBlockSectionLargeTitle.propTypes = {
  className: PropTypes.string,
};

export default TextBlockSectionLargeTitle;
