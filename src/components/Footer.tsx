import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch bg-lavender flex flex-col items-center justify-start pt-[61px] px-5 pb-8 box-border gap-10 max-w-full z-[1] text-left text-sm text-colour-main-grey-400 font-regular-14 gap-5 ${className}`}
    >
      <div className="w-[1440px] h-[216px] relative bg-lavender hidden max-w-full" />
      <div className="w-[1110px] flex flex-row items-start justify-between gap-5 max-w-full mq450:flex-wrap mq450:justify-center">
        <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
          <div className="relative leading-[24px] font-medium z-[1]">
            ©2023 Yourcompany
          </div>
        </div>
        <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[9px] text-7xl text-colour-logo-primary">
          <h2 className="m-0 relative text-inherit leading-[38px] font-black font-[inherit] inline-block min-w-[95px] z-[2] mq450:text-2xl mq450:leading-[30px]">
            Landing
          </h2>
        </div>
        <div className="w-[109px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border text-center text-xs text-colour-secondary-white-100-general">
          <div className="self-stretch rounded-sm bg-colour-main-blue-800 flex flex-row items-start justify-start py-1 px-0 whitespace-nowrap z-[1]">
            <div className="h-[26px] w-[109px] relative rounded-sm bg-colour-main-blue-800 hidden" />
            <div className="flex-1 relative leading-[18px] font-medium z-[1]">
              Purchase now
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1110px] flex flex-col items-start justify-start gap-5 max-w-full text-colour-main-blue-300">
        <div className="self-stretch h-px relative bg-lightgray z-[1]" />
        <div className="self-stretch flex flex-row items-start justify-between gap-5 mq750:flex-wrap">
          <div className="flex flex-row items-start justify-start gap-[60px] z-[1]">
            <a className="[text-decoration:none] relative leading-[24px] text-[inherit] inline-block min-w-[38px]">
              Home
            </a>
            <a className="[text-decoration:none] relative leading-[24px] text-[inherit] inline-block min-w-[38px]">
              About
            </a>
            <div className="relative leading-[24px] inline-block min-w-[49px]">
              Contact
            </div>
          </div>
          <div className="w-[200px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
            <div className="self-stretch flex flex-row items-start justify-between gap-5">
              <img
                className="h-4 w-4 relative min-h-[16px] z-[1]"
                loading="lazy"
                alt=""
                src="/iconsocialinstagram-copy-4.svg"
              />
              <img
                className="h-4 w-4 relative object-cover min-h-[16px] z-[1]"
                loading="lazy"
                alt=""
                src="/iconsocialinstagram-copy-3@2x.png"
              />
              <img
                className="h-4 w-4 relative min-h-[16px] z-[1]"
                loading="lazy"
                alt=""
                src="/iconsocialinstagram-copy-2.svg"
              />
              <img
                className="h-4 w-4 relative object-cover min-h-[16px] z-[1]"
                loading="lazy"
                alt=""
                src="/iconsocialinstagram-copy@2x.png"
              />
              <img
                className="h-4 w-4 relative object-cover min-h-[16px] z-[1]"
                loading="lazy"
                alt=""
                src="/iconsocialinstagram@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
