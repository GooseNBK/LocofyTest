import ElementCardInfoCardMedium1 from "./ElementCardInfoCardMedium1";
import PropTypes from "prop-types";

const SectionFeaturesMulti1 = ({ className = "" }) => {
  return (
    <div
      className={`w-[1440px] bg-colour-background-light-grey max-w-full overflow-hidden flex flex-row items-start justify-start gap-[105px] leading-[normal] tracking-[normal] gap-[52px] gap-[26px] mq1275:flex-wrap ${className}`}
    >
      <img
        className="w-[515px] relative max-h-full object-cover max-w-full mq1275:flex-1"
        loading="lazy"
        alt=""
        src="/image-copy@2x.png"
      />
      <div className="w-[715px] flex flex-col items-start justify-start pt-[125px] px-0 pb-0 box-border min-w-[715px] max-w-full mq750:pt-[81px] mq750:box-border mq750:min-w-full mq1275:flex-1">
        <div className="self-stretch flex flex-row items-start justify-start gap-[45px] max-w-full mq750:flex-wrap gap-[22px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[60px] min-w-[218px] max-w-full gap-[30px]">
            <div className="self-stretch h-[152px] relative">
              <ElementCardInfoCardMedium1 elementCardInfoCardMedium="/elementcardinfocardmediumiconposition@2x.png" />
              <ElementCardInfoCardMedium1 elementCardInfoCardMedium="/elementcardinfocardmediumiconposition@2x.png" />
            </div>
            <div className="self-stretch h-[152px] relative">
              <ElementCardInfoCardMedium1 elementCardInfoCardMedium="/elementcardinfocardmediumiconposition@2x.png" />
              <ElementCardInfoCardMedium1 elementCardInfoCardMedium="/elementcardinfocardmediumiconposition@2x.png" />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[60px] min-w-[218px] max-w-full gap-[30px]">
            <div className="self-stretch h-[152px] relative">
              <ElementCardInfoCardMedium1 elementCardInfoCardMedium="/elementcardinfocardmediumiconposition@2x.png" />
              <ElementCardInfoCardMedium1 elementCardInfoCardMedium="/elementcardinfocardmediumiconposition@2x.png" />
            </div>
            <div className="self-stretch h-[152px] relative">
              <ElementCardInfoCardMedium1 elementCardInfoCardMedium="/elementcardinfocardmediumiconposition@2x.png" />
              <ElementCardInfoCardMedium1 elementCardInfoCardMedium="/elementcardinfocardmediumiconposition@2x.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SectionFeaturesMulti1.propTypes = {
  className: PropTypes.string,
};

export default SectionFeaturesMulti1;
