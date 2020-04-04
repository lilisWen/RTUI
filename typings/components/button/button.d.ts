import * as React from 'react';
import * as PropTypes from 'prop-types';
declare const ButtonTypes: ["default", "primary", "dashed", "success", "danger", "link"];
declare type ButtonType = (typeof ButtonTypes)[number];
declare const ButtonSizes: ["small", "default", "large"];
declare type ButtonSize = (typeof ButtonSizes)[number];
declare const ButtonHTMLTypes: ["submit", "button", "reset"];
export declare type ButtonHtmlType = (typeof ButtonHTMLTypes)[number];
declare const ButtonShapes: ["round", "circle"];
declare type ButtonShape = (typeof ButtonShapes)[number];
interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    htmlType?: ButtonHtmlType;
    size?: ButtonSize;
    type?: ButtonType;
    bground?: boolean;
    href?: string;
    disable?: boolean;
    icon?: string;
    loading?: boolean;
    className?: string;
    children?: React.ReactNode;
    shape?: ButtonShape;
}
export default class button extends React.Component<ButtonProps> {
    static defaultProps: {
        htmlType: string;
        size: string;
        type: string;
        href: string;
        disable: boolean;
        icon: string;
        loading: boolean;
        shape: string;
    };
    static propTypes: {
        htmlType: PropTypes.Requireable<"button" | "submit" | "reset">;
        size: PropTypes.Requireable<"small" | "default" | "large">;
        type: PropTypes.Requireable<string>;
        href: PropTypes.Requireable<string>;
        disable: PropTypes.Requireable<boolean>;
        icon: PropTypes.Requireable<string>;
        loading: PropTypes.Requireable<boolean>;
        className: PropTypes.Requireable<string>;
        shape: PropTypes.Requireable<"circle" | "round">;
    };
    renderButton: () => JSX.Element;
    render(): JSX.Element;
}
export {};
