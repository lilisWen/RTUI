import * as React from 'react';
interface ButtonExampleState {
    size: "small" | "default" | "large";
}
export default class ButtonExample extends React.Component<null, ButtonExampleState> {
    constructor(props: any);
    handleChangeSize(size: "small" | "default" | "large"): void;
    render(): JSX.Element;
}
export {};
