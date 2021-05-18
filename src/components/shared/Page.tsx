import React from 'react';
import classNames from 'classnames';

interface IProps {
  children: React.ReactNode;
  className: string;
}

const Page = ({ children, className }: IProps) => {
  const classes = classNames('page', className);

  return <main className={classNames(classes)}>{children}</main>;
};

export default Page;
