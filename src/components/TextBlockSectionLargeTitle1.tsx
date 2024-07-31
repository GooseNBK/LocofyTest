import PropTypes from "prop-types";

const TextBlockSectionLargeTitle1 = ({ className = "" }) => {
  return (
    <div
      className={`w-[520px] flex flex-col items-start justify-start pt-0 px-0 pb-px box-border gap-4 max-w-full text-left text-17xl text-colour-main-blue-900 font-regular-14 ${className}`}
    >
      <h1 className="m-0 self-stretch relative text-inherit leading-[48px] font-medium font-[inherit] mq1050:text-10xl mq1050:leading-[38px] mq450:text-3xl mq450:leading-[29px]">{`Design & Build Your Own Landing Pages`}</h1>
      <div className="self-stretch relative text-base leading-[26px] text-colour-main-blue-400">
        <p className="[margin-block-start:0] [margin-block-end:10px]">{`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus `}</p>
        <p className="m-0">
          mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
          sem. Nulla consequat massa quis enim.
        </p>
      </div>
    </div>
  );
};

TextBlockSectionLargeTitle1.propTypes = {
  className: PropTypes.string,
};

export default TextBlockSectionLargeTitle1;
