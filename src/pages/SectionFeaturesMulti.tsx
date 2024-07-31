import TextBlockSectionLargeTitle1 from "../components/TextBlockSectionLargeTitle1";
import ElementCardInfoCardMedium from "../components/ElementCardInfoCardMedium";
import DevicesSamsungVert from "../components/DevicesSamsungVert";

const SectionFeaturesMulti = () => {
  return (
    <div className="w-full h-[903px] relative bg-colour-background-light-grey overflow-hidden flex flex-row items-start justify-start pt-[100px] px-[165px] pb-[140px] box-border gap-[78px] leading-[normal] tracking-[normal] gap-[39px] lg:pl-[82px] lg:pr-[82px] lg:box-border gap-[19px] mq750:pl-[41px] mq750:pr-[41px] mq750:box-border">
      <div className="flex-1 flex flex-col items-start justify-start pt-[60px] px-0 pb-0 box-border max-w-[calc(100%_-_570px)] shrink-0 mq1050:hidden mq1050:max-w-full mq750:pt-[39px] mq750:box-border">
        <div className="self-stretch flex flex-col items-start justify-start gap-[70px] max-w-full gap-[17px] gap-[35px]">
          <TextBlockSectionLargeTitle1 />
          <div className="self-stretch flex flex-col items-start justify-start gap-10 gap-5">
            <ElementCardInfoCardMedium
              elementCardInfoCardSmallI="/elementcardinfocardsmalliconpositionleft1@2x.png"
              elementCardInfoCardMediumFlex="unset"
              elementCardInfoCardMediumMinWidth="unset"
              elementCardInfoCardMediumAlignSelf="stretch"
              body="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus"
              bodyMargin="unset"
            />
            <ElementCardInfoCardMedium
              elementCardInfoCardSmallI="/elementcardinfocardsmalliconpositionleft1@2x.png"
              elementCardInfoCardMediumFlex="unset"
              elementCardInfoCardMediumMinWidth="unset"
              elementCardInfoCardMediumAlignSelf="stretch"
              body="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus"
              bodyMargin="unset"
            />
          </div>
        </div>
      </div>
      <DevicesSamsungVert
        body="/body1@2x.png"
        screen1="/screen1@2x.png"
        reflections="/reflections1@2x.png"
        group71="/group-7-11@2x.png"
      />
    </div>
  );
};

export default SectionFeaturesMulti;
