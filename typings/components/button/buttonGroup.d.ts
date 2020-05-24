import * as React from 'react';
import * as PropTypes from 'prop-types';
declare const ButtonGroupSizes: ["default", "large", "small"];
declare type ButtonGroupSize = (typeof ButtonGroupSizes)[number];
declare const ButtonGroupTypes: ["default", "primary", "dashed", "success", "danger", "link"];
declare type ButtonGroupType = (typeof ButtonGroupTypes)[number];
export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    outline?: boolean;
    size?: ButtonGroupSize;
    className?: string;
    type?: ButtonGroupType;
}
export interface ButtonGroupState {
    currentIndex: number;
}
export default class ButtonGroup extends React.Component<ButtonGroupProps, ButtonGroupState> {
    static defaultProps: {
        outline: boolean;
        size: string;
        type: string;
    };
    static PropTypes: {
        outline: PropTypes.Requireable<boolean>;
        size: PropTypes.Requireable<"small" | "default" | "large">;
        type: PropTypes.Requireable<"link" | "dashed" | "default" | "primary" | "success" | "danger">;
    };
    constructor(props: any);
    setCurrentIndex: (event: any) => void;
    renderButtons: () => any;
    render(): JSX.Element;
}
export {};
