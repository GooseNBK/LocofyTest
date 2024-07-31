import { useMemo } from "react";
import PropTypes from "prop-types";

const ElementButtonSmallFilled = ({
  className = "",
  propFlex,
  propWidth,
  propBackgroundColor,
  buttonLabel,
  propColor,
}) => {
  const elementButtonSmallFilledStyle = useMemo(() => {
    return {
      flex: propFlex,
      width: propWidth,
    };
  }, [propFlex, propWidth]);

  const bGStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const buttonLabelStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div
      className={`flex-1 flex flex-row items-start justify-start py-1 px-0 relative whitespace-nowrap text-center text-xs text-colour-main-blue-900 font-regular-14 ${className}`}
      style={elementButtonSmallFilledStyle}
    >
      <div
        className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-sm bg-colour-secondary-yellow-500"
        style={bGStyle}
      />
      <a
        className="[text-decoration:none] flex-1 relative leading-[18px] font-medium text-[inherit] z-[1]"
        style={buttonLabelStyle}
      >
        {buttonLabel}
      </a>
    </div>
  );
};

ElementButtonSmallFilled.propTypes = {
  className: PropTypes.string,
  buttonLabel: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propWidth: PropTypes.any,
  propBackgroundColor: PropTypes.any,
  propColor: PropTypes.any,
};

export default ElementButtonSmallFilled;
