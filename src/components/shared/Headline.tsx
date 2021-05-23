import { createElement } from 'react';
import classNames from 'classnames'

interface IProps {
  tag?: string;
  className?: string;
  text?: string;
  children?: React.ReactNode;
}

const Headline = ({ tag = 'h1', className, children, text }: IProps) => {
  const classes = classNames('headline', className)

  return createElement(tag, { className: classes }, [
    children
  ], text);
};

export default Headline;
