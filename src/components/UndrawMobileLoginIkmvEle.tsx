import PropTypes from "prop-types";

const UndrawMobileLoginIkmvEle = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-black overflow-hidden flex flex-row flex-wrap items-start justify-center pt-[109.6px] px-[165px] pb-[108.1px] box-border gap-[30px] max-w-full z-[1] text-left text-17xl text-colour-main-blue-900 font-regular-14 gap-[15px] mq750:pt-[71px] mq750:px-[82px] mq750:pb-[70px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border ${className}`}
    >
      <div className="h-[742px] w-[1440px] relative hidden max-w-full" />
      <div className="flex-1 flex flex-col items-start justify-start pt-[50.4px] px-0 pb-0 box-border min-w-[351px] max-w-full mq750:pt-[33px] mq750:box-border mq750:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-20 gap-10 gap-5">
          <div className="self-stretch flex flex-col items-start justify-start gap-4 z-[2]">
            <h1 className="m-0 self-stretch relative text-inherit leading-[48px] font-medium font-[inherit] mq1050:text-10xl mq1050:leading-[38px] mq450:text-3xl mq450:leading-[29px]">{`Light, Fast & Powerful`}</h1>
            <div className="self-stretch relative text-base leading-[26px] text-colour-main-blue-400">
              <p className="[margin-block-start:0] [margin-block-end:10px]">{`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus `}</p>
              <p className="m-0">
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim.
              </p>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[30px] text-base mq750:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-0.5 box-border gap-3.5 min-w-[166px] z-[2]">
              <img
                className="self-stretch h-9 relative max-w-full overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/elementcardinfocardsmalliconpositionleft-1@2x.png"
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-1.5">
                <div className="self-stretch relative leading-[26px] font-medium">
                  Title Goes Here
                </div>
                <div className="self-stretch relative text-xs leading-[18px] text-colour-main-grey-600">{`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. `}</div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-0.5 box-border gap-3.5 min-w-[166px] z-[2]">
              <img
                className="self-stretch h-9 relative max-w-full overflow-hidden shrink-0 object-cover"
                alt=""
                src="/elementcardinfocardsmalliconpositionleft-1@2x.png"
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-1.5">
                <div className="self-stretch relative leading-[26px] font-medium">
                  Title Goes Here
                </div>
                <div className="self-stretch relative text-xs leading-[18px] text-colour-main-grey-600">{`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. `}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="h-[524.3px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[351px] z-[2] mq750:min-w-full"
        loading="lazy"
        alt=""
        src="/undraw-mobile-login-ikmv@2x.png"
      />
    </section>
  );
};

UndrawMobileLoginIkmvEle.propTypes = {
  className: PropTypes.string,
};

export default UndrawMobileLoginIkmvEle;
