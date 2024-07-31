import { useMemo } from "react";
import PropTypes from "prop-types";

const ElementCardInfoCardMedium = ({
  className = "",
  elementCardInfoCardSmallI,
  elementCardInfoCardMediumFlex,
  elementCardInfoCardMediumMinWidth,
  elementCardInfoCardMediumAlignSelf,
  body,
  bodyMargin,
}) => {
  const elementCardInfoCardMediumStyle = useMemo(() => {
    return {
      flex: elementCardInfoCardMediumFlex,
      minWidth: elementCardInfoCardMediumMinWidth,
      alignSelf: elementCardInfoCardMediumAlignSelf,
    };
  }, [
    elementCardInfoCardMediumFlex,
    elementCardInfoCardMediumMinWidth,
    elementCardInfoCardMediumAlignSelf,
  ]);

  const bodyStyle = useMemo(() => {
    return {
      margin: bodyMargin,
    };
  }, [bodyMargin]);

  return (
    <div
      className={`absolute h-[15.18%] w-[17.01%] top-[53.14%] right-[71.53%] bottom-[31.68%] left-[11.46%] text-left text-xs text-colour-main-grey-600 font-bold-26 ${className}`}
      style={elementCardInfoCardMediumStyle}
    >
      <div
        className="absolute w-full top-[82px] left-[0px] leading-[18px] inline-block"
        style={bodyStyle}
      >
        {body}
      </div>
      <div className="absolute w-full top-[50px] left-[0px] text-base leading-[26px] font-medium text-colour-main-blue-900 inline-block">
        Title Goes Here
      </div>
      <img
        className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-9 object-cover"
        alt=""
        src={elementCardInfoCardSmallI}
      />
    </div>
  );
};

ElementCardInfoCardMedium.propTypes = {
  className: PropTypes.string,
  elementCardInfoCardSmallI: PropTypes.string,
  body: PropTypes.string,

  /** Style props */
  elementCardInfoCardMediumFlex: PropTypes.any,
  elementCardInfoCardMediumMinWidth: PropTypes.any,
  elementCardInfoCardMediumAlignSelf: PropTypes.any,
  bodyMargin: PropTypes.any,
};

export default ElementCardInfoCardMedium;
