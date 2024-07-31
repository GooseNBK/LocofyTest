import PropTypes from "prop-types";

const CallToAction1 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[288.8px] box-border max-w-full text-left text-17xl text-colour-main-blue-900 font-regular-14 mq1050:pb-[188px] mq1050:box-border mq450:pb-[122px] mq450:box-border ${className}`}
    >
      <div className="flex-1 flex flex-row flex-wrap items-start justify-start pt-[117.9px] pb-[116.1px] pl-[209px] pr-[169px] box-border relative gap-[172px] max-w-full gap-[86px] lg:pl-[104px] lg:pr-[84px] lg:box-border gap-[43px] mq750:pt-[77px] mq750:pb-[75px] mq750:pl-[52px] mq750:pr-[42px] mq750:box-border gap-[21px] mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]" />
        <img
          className="h-[312px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[289px] z-[1]"
          loading="lazy"
          alt=""
          src="/undraw-mention-6k5d@2x.png"
        />
        <div className="flex-1 flex flex-col items-start justify-start pt-[2.1px] px-0 pb-0 box-border min-w-[289px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-10 gap-5">
            <div className="self-stretch flex flex-col items-start justify-start gap-4">
              <h1 className="m-0 self-stretch relative text-inherit leading-[48px] font-medium font-[inherit] z-[1] mq1050:text-10xl mq1050:leading-[38px] mq450:text-3xl mq450:leading-[29px]">{`Light, Fast & Powerful`}</h1>
              <div className="self-stretch relative text-base leading-[26px] text-colour-main-blue-400 z-[1]">
                <p className="[margin-block-start:0] [margin-block-end:10px]">{`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus `}</p>
                <p className="m-0">
                  mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                  quis, sem. Nulla consequat massa quis enim.
                </p>
              </div>
            </div>
            <div className="w-[150px] rounded-sm bg-colour-main-blue-800 flex flex-row items-start justify-start py-1 px-0 box-border whitespace-nowrap z-[1] text-center text-sm text-colour-secondary-white-100-general">
              <div className="h-8 w-[150px] relative rounded-sm bg-colour-main-blue-800 hidden" />
              <div className="flex-1 relative leading-[24px] font-medium z-[1]">
                Purchase Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

CallToAction1.propTypes = {
  className: PropTypes.string,
};

export default CallToAction1;
