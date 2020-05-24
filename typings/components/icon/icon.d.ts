import * as React from 'react';
import './importall.js';
declare const IconThemes: ["light", "dark"];
declare type IconTheme = (typeof IconThemes)[number];
interface IconProps extends React.SVGAttributes<SVGElement> {
    name: string;
    size?: number;
    className?: string;
    style?: React.CSSProperties;
    theme?: IconTheme;
}
declare const Icon: React.FC<IconProps>;
export default Icon;
