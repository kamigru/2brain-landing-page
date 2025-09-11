import React from 'react';

interface SectionTitleProps {
    children: React.ReactElement;
    style?: React.CSSProperties;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, style }) => {
    return React.cloneElement(children, {
        className: children.props.className + " text-3xl lg:text-5xl lg:leading-tight font-bold",
        style: { ...children.props.style, ...style }
    });
};

export default SectionTitle;