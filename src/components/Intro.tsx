import PropTypes from "prop-types";

const Intro = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch h-[569px] relative max-w-full text-left text-17xl text-colour-main-blue-900 font-regular-14 lg:h-auto lg:min-h-[569] ${className}`}
    >
      <img
        className="absolute top-[0px] left-[417.3px] w-[1490px] h-[1161px] object-cover z-[1]"
        loading="lazy"
        alt=""
        src="/designer-1@2x.png"
      />
      <div className="absolute top-[0px] left-[-4px] w-full flex flex-row items-end justify-center pt-[122.4px] pb-[130.8px] pl-[195px] pr-[165px] box-border gap-[155px] max-w-full h-full lg:flex-wrap gap-[77px] lg:pl-[97px] lg:pr-[82px] lg:box-border gap-[39px] mq750:pl-12 mq750:pr-[41px] mq750:box-border gap-[19px] mq450:pl-5 mq450:box-border">
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]" />
        <img
          className="h-[315.8px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[312px] z-[1]"
          loading="lazy"
          alt=""
          src="/undraw-happy-news-hxmt@2x.png"
        />
        <div className="w-[445px] flex flex-col items-start justify-end pt-0 px-0 pb-[36.2px] box-border min-w-[445px] max-w-full lg:flex-1 mq1050:min-w-full">
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
        </div>
      </div>
    </section>
  );
};

Intro.propTypes = {
  className: PropTypes.string,
};

export default Intro;
