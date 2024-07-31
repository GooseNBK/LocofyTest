import { useMemo } from "react";
import PropTypes from "prop-types";

const LogoLandie = ({ className = "", propDebugCommit }) => {
  const landieStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
    };
  }, [propDebugCommit]);

  return (
    <div
      className={`w-[79px] flex flex-row items-start justify-start py-0 px-0 box-border text-left text-7xl text-colour-logo-primary1 font-regular-14 ${className}`}
    >
      <a
        className="[text-decoration:none] w-[95px] relative leading-[38px] font-black text-[inherit] inline-block shrink-0 whitespace-nowrap mq450:text-2xl mq450:leading-[30px]"
        style={landieStyle}
      >
        Landing
      </a>
    </div>
  );
};

LogoLandie.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propDebugCommit: PropTypes.any,
};

export default LogoLandie;
