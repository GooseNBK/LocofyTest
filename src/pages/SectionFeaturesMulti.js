import ElementCardInfoCardMedium from "../components/ElementCardInfoCardMedium";
import TextBlockSectionLargeTitle1 from "../components/TextBlockSectionLargeTitle1";
import DevicesSamsungVert from "../components/DevicesSamsungVert";

const SectionFeaturesMulti = () => {
  return (
    <div className="w-full relative bg-colour-background-light-grey h-[903px] overflow-hidden">
      <ElementCardInfoCardMedium
        elementCardInfoCardSmallI="/elementcardinfocardsmalliconpositionleft1@2x.png"
        elementCardInfoCardMediumFlex="unset"
        elementCardInfoCardMediumMinWidth="unset"
        elementCardInfoCardMediumAlignSelf="unset"
        body="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus"
        bodyMargin="unset"
      />
      <ElementCardInfoCardMedium
        elementCardInfoCardSmallI="/elementcardinfocardsmalliconpositionleft1@2x.png"
        elementCardInfoCardMediumFlex="unset"
        elementCardInfoCardMediumMinWidth="unset"
        elementCardInfoCardMediumAlignSelf="unset"
        body="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus"
        bodyMargin="unset"
      />
      <TextBlockSectionLargeTitle1 />
      <DevicesSamsungVert
        body="/body1@2x.png"
        screen1="/screen1@2x.png"
        reflections="/reflections1@2x.png"
        group71="/group-71@2x.png"
      />
    </div>
  );
};

export default SectionFeaturesMulti;
