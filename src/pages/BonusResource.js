const BonusResource = () => {
  return (
    <div className="w-full relative h-[212px] text-justify text-[20px] text-black font-bold-26">
      <img
        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full"
        alt=""
        src="/background.svg"
      />
      <div className="absolute w-[87.81%] top-[calc(50%_-_72px)] right-[5.29%] left-[6.9%] h-[137px]">
        <b className="absolute w-full top-[calc(50%_-_68.5px)] left-[0%] leading-[48px] flex items-center h-14">
          Bonus: Free Figma E-course - Figma Beginner to Figma Winner 🏆
        </b>
        <b className="absolute w-[97.66%] top-[calc(50%_-_17.5px)] left-[0%] text-base leading-[26px] flex items-center h-[86px] text-colour-logo-primary1">
          <span className="w-full">
            <span className="text-gray">
              If you’re new to Figma and you want to level up your skills,
              here’s a link to our free e-course where you’ll receive new Figma
              lessons for two days, in easy-to-digest emails:
            </span>
            <span className="text-colour-main-grey-400">{` `}</span>
            <a
              className="text-[inherit]"
              href="https://bit.ly/freefigmacourse"
              target="_blank"
            >
              <span className="[text-decoration:underline]">
                https://bit.ly/freefigmacourse
              </span>
            </a>
          </span>
        </b>
      </div>
    </div>
  );
};

export default BonusResource;
