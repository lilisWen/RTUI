import * as React from 'react';
declare const AnitaionNames: ["zoom-in-top", "zoom-in-bottom", "zoom-in-left", "zoom-in-right", "unfold"];
declare type AnimationName = (typeof AnitaionNames)[number];
interface TransitionProps extends React.Attributes {
    in?: boolean;
    timeout?: number;
    animation?: AnimationName;
    wrapper?: boolean;
    unmountOnExit?: boolean;
    appear?: boolean;
    className?: string;
}
declare const Transition: React.FC<TransitionProps>;
export default Transition;
