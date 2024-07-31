import ElementCardInfoCardMedium from "../components/ElementCardInfoCardMedium";
import DevicesSamsungVert from "../components/DevicesSamsungVert";

const SectionFeaturesMulti2 = () => {
  return (
    <div className="w-full relative bg-colour-background-light-grey h-[909px] overflow-hidden text-left text-base text-colour-main-blue-400 font-bold-26">
      <ElementCardInfoCardMedium
        elementCardInfoCardSmallI="/elementcardinfocardsmalliconpositionleft@2x.png"
        body="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. "
      />
      <ElementCardInfoCardMedium
        elementCardInfoCardSmallI="/elementcardinfocardsmalliconpositionleft@2x.png"
        elementCardInfoCardMediumFlex="unset"
        elementCardInfoCardMediumMinWidth="unset"
        elementCardInfoCardMediumAlignSelf="unset"
        body="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. "
        bodyMargin="unset"
      />
      <ElementCardInfoCardMedium
        elementCardInfoCardSmallI="/elementcardinfocardsmalliconpositionleft@2x.png"
        elementCardInfoCardMediumFlex="unset"
        elementCardInfoCardMediumMinWidth="unset"
        elementCardInfoCardMediumAlignSelf="unset"
        body="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. "
        bodyMargin="unset"
      />
      <ElementCardInfoCardMedium
        elementCardInfoCardSmallI="/elementcardinfocardsmalliconpositionleft@2x.png"
        elementCardInfoCardMediumFlex="unset"
        elementCardInfoCardMediumMinWidth="unset"
        elementCardInfoCardMediumAlignSelf="unset"
        body="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. "
        bodyMargin="unset"
      />
      <div className="absolute h-[27.83%] w-[36.11%] top-[17.6%] right-[52.43%] bottom-[54.57%] left-[11.46%]">
        <div className="absolute w-full top-[112px] left-[0px] leading-[26px] inline-block">
          <p className="[margin-block-start:0] [margin-block-end:10px]">{`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus `}</p>
          <p className="m-0">
            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
            sem. Nulla consequat massa quis enim.
          </p>
        </div>
        <div className="absolute w-full top-[0px] left-[0px] text-17xl leading-[48px] font-medium text-colour-main-blue-900 inline-block">{`Design & Build Your Own Landing Pages`}</div>
      </div>
      <DevicesSamsungVert
        body="/body@2x.png"
        screen1="/screen@2x.png"
        reflections="/reflections@2x.png"
        group71="/group-7-1@2x.png"
      />
    </div>
  );
};

export default SectionFeaturesMulti2;
