import * as React from 'react';
export interface MessageProps {
    content: string | React.ReactNode;
    mode: 'info' | 'success' | 'warning' | 'error';
    top: number;
    duration: number;
    showIcon: boolean;
    messageId: string;
    onClose?: () => any;
    className?: string;
    style?: React.CSSProperties;
}
export interface MessageState {
    visible: boolean;
}
export interface Options {
    content: string | React.ReactNode;
    duration?: number;
    top?: number;
    showIcon?: boolean;
    onClose?: () => any;
    className?: string;
    style?: React.CSSProperties;
}
declare class Message extends React.Component<MessageProps, MessageState> {
    static displayName: string;
    static info: (options: Options) => any;
    static success: (options: Options) => any;
    static warning: (options: Options) => any;
    static error: (options: Options) => any;
    static removeMessage: (messageId: string) => any;
    constructor(props: any);
    private closeTimeout;
    private leaveTimeout;
    componentDidMount(): void;
    componentWillUnmount(): void;
    close: () => void;
    afterLeave: () => void;
    render(): JSX.Element;
}
export default Message;
