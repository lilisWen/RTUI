import * as React from 'react';
import './importall.js';
interface IconProps extends React.SVGAttributes<SVGElement> {
    name: string;
}
export default class Icon extends React.Component<IconProps> {
    handelClick: (e: any) => void;
    render(): JSX.Element;
}
export {};
