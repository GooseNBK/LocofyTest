import LogoLandie from "./LogoLandie";
import ElementButtonSmallFilled from "./ElementButtonSmallFilled";
import PropTypes from "prop-types";

const SectionNavbar = ({ className = "" }) => {
  return (
    <div
      className={`w-[1440px] bg-colour-background-light-grey max-w-full overflow-hidden flex flex-row items-end justify-between py-[11px] px-[165px] box-border top-[0] z-[99] sticky leading-[normal] tracking-[normal] gap-5 text-left text-sm text-colour-main-blue-300 font-regular-14 mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[82px] mq750:pr-[82px] mq750:box-border ${className}`}
    >
      <LogoLandie />
      <div className="w-[677px] flex flex-col items-start justify-end pt-0 px-0 pb-[5px] box-border max-w-full">
        <div className="self-stretch flex flex-row items-start justify-between gap-5">
          <div className="flex flex-row items-start justify-start gap-[60px] mq750:hidden">
            <a className="[text-decoration:none] relative leading-[24px] text-[inherit] inline-block min-w-[38px]">
              Home
            </a>
            <a className="[text-decoration:none] relative leading-[24px] text-[inherit] inline-block min-w-[38px]">
              About
            </a>
            <a className="[text-decoration:none] relative leading-[24px] text-[inherit] inline-block min-w-[49px]">
              Contact
            </a>
          </div>
          <div className="w-[238px] flex flex-row items-start justify-start gap-5 mq450:hidden">
            <ElementButtonSmallFilled
              propFlex="1"
              propWidth="unset"
              propBackgroundColor="#111b47"
              buttonLabel="Purchase UI Kit"
              propColor="#fff"
            />
            <ElementButtonSmallFilled buttonLabel="Contact Us" />
          </div>
        </div>
      </div>
    </div>
  );
};

SectionNavbar.propTypes = {
  className: PropTypes.string,
};

export default SectionNavbar;
