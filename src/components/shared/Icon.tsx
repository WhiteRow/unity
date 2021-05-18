import React from 'react';
import { ReactSVG } from 'react-svg';
import classNames from 'classnames';

interface IProps {
  icon: string;
  wrapperClassName: string;
  svgClassName: string;
  onClick?: () => void;
}

const Icon = ({ wrapperClassName, svgClassName, icon, onClick }: IProps) => {

  return (
    <ReactSVG
      afterInjection={(error, svg) => {
        try {
          return svg;
        } catch {
          return error;
        }
      }}
      beforeInjection={svg => {
        svg.classList.add(`icon__pic ${svgClassName}`);
      }}
      className={classNames(wrapperClassName)}
      evalScripts="always"
      fallback={() => <span>Error!</span>}
      onClick={onClick}
      renumerateIRIElements={false}
      src={icon}
      useRequestCache={false}
      wrapper="div"
    />
  );
};

export default Icon;
