import * as React from 'react'
import { CSSTransition } from 'react-transition-group'
import { tuple } from '../../utils/type'

const AnitaionNames = tuple('zoom-in-top', 'zoom-in-bottom', 'zoom-in-left', 'zoom-in-right')
type AnimationName = (typeof AnitaionNames)[number]

interface TransitionProps extends React.Attributes {
    in?: boolean,
    timeout?: number,
    animation?: AnimationName,
    wrapper?: boolean,
    unmountOnExit?: boolean,
    appear?: boolean,
    className?: string
}
const Transition: React.FC<TransitionProps> = (props) => {
    const { children, className, animation, wrapper, ...restProps } = props
    return (
        <CSSTransition
            classNames={className ? className : animation}
            addEndListener={() => { }}
            {...restProps}
        >
            {wrapper ? <div>{children}</div> : children}
        </CSSTransition>)
}
Transition.defaultProps = {
    appear: true,
    unmountOnExit: true
}
export default Transition