import TextBlockSectionLargeTitle from "./TextBlockSectionLargeTitle";
import ElementCardInfoCardMedium from "./ElementCardInfoCardMedium";
import PropTypes from "prop-types";

const SectionFeaturesMulti11 = ({ className = "" }) => {
  return (
    <div
      className={`w-[1440px] bg-colour-background-light-grey max-w-full overflow-hidden flex flex-row items-start justify-start gap-[125px] leading-[normal] tracking-[normal] gap-[31px] gap-4 mq1250:flex-wrap gap-[62px] ${className}`}
    >
      <img
        className="w-[515px] relative max-h-full object-cover max-w-full mq1250:flex-1"
        loading="lazy"
        alt=""
        src="/image@2x.png"
      />
      <div className="w-[675px] flex flex-col items-start justify-start pt-[140px] px-0 pb-0 box-border min-w-[675px] max-w-full mq750:pt-[91px] mq750:box-border mq750:min-w-full mq1250:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-[60px] max-w-full gap-[30px]">
          <TextBlockSectionLargeTitle />
          <div className="self-stretch flex flex-col items-start justify-start gap-10 max-w-full gap-5">
            <div className="self-stretch flex flex-row items-start justify-start gap-[25px] max-w-full mq750:flex-wrap">
              <ElementCardInfoCardMedium
                elementCardInfoCardSmallI="/elementcardinfocardsmalliconpositionleft2@2x.png"
                elementCardInfoCardMediumFlex="1"
                elementCardInfoCardMediumMinWidth="211px"
                elementCardInfoCardMediumAlignSelf="unset"
                body="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. "
                bodyMargin="unset"
              />
              <ElementCardInfoCardMedium
                elementCardInfoCardSmallI="/elementcardinfocardsmalliconpositionleft2@2x.png"
                elementCardInfoCardMediumFlex="1"
                elementCardInfoCardMediumMinWidth="211px"
                elementCardInfoCardMediumAlignSelf="unset"
                body="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. "
                bodyMargin="unset"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[25px] max-w-full mq750:flex-wrap">
              <ElementCardInfoCardMedium
                elementCardInfoCardSmallI="/elementcardinfocardsmalliconpositionleft2@2x.png"
                elementCardInfoCardMediumFlex="1"
                elementCardInfoCardMediumMinWidth="211px"
                elementCardInfoCardMediumAlignSelf="unset"
                body="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. "
                bodyMargin="unset"
              />
              <ElementCardInfoCardMedium
                elementCardInfoCardSmallI="/elementcardinfocardsmalliconpositionleft2@2x.png"
                elementCardInfoCardMediumFlex="1"
                elementCardInfoCardMediumMinWidth="211px"
                elementCardInfoCardMediumAlignSelf="unset"
                body="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. "
                bodyMargin="unset"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SectionFeaturesMulti11.propTypes = {
  className: PropTypes.string,
};

export default SectionFeaturesMulti11;
