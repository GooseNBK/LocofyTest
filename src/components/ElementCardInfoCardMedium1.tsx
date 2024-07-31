import PropTypes from "prop-types";

const ElementCardInfoCardMedium1 = ({
  className = "",
  elementCardInfoCardMedium,
}) => {
  return (
    <div
      className={`absolute top-[0px] left-[0px] w-full h-full flex flex-col items-start justify-start pt-0 px-0 pb-[116.9px] box-border gap-[32.9px] text-left text-lg text-colour-main-blue-900 font-regular-14 gap-4 ${className}`}
    >
      <img
        className="self-stretch h-[35.1px] relative max-w-full overflow-hidden shrink-0 object-cover"
        loading="lazy"
        alt=""
        src={elementCardInfoCardMedium}
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-2 shrink-0">
        <div className="self-stretch relative leading-[30px] font-medium">
          Title Goes Here
        </div>
        <div className="self-stretch relative text-sm leading-[24px] text-colour-main-grey-600">{`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. `}</div>
      </div>
    </div>
  );
};

ElementCardInfoCardMedium1.propTypes = {
  className: PropTypes.string,
  elementCardInfoCardMedium: PropTypes.string,
};

export default ElementCardInfoCardMedium1;
