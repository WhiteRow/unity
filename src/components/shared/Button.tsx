import React from 'react';
import classNames from 'classnames';

interface IProps {
    className: string;
}

const Button = ({className}: IProps) => {
    const classes = classNames('headline', className)

    return (
        <button className={classes}></button>
    );
};

export default Button;
