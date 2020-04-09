import * as React from 'react'
import * as ReactDOM from 'react-dom'
import classNames from 'classnames'
import { PopcoverClass } from "../../styles"
import { useState, useEffect } from 'react'
import Transition from '../Transition/transition'
import classname from '../../utils/classname'
export interface PopcoverProps {
    title: string | React.ReactNode,
    content: string | React.ReactNode,
    trigger?: 'click' | 'hover' | 'focus',
    position?: 'top' | 'left' | 'right' | 'bottom',
    className?: string,
    onVisibleChange?: (visible: boolean) => {},
    style?: React.CSSProperties
}

const Popcover: React.FC<PopcoverProps> = (props) => {
    const { content, trigger, position, className, style, title, children } = props;
    const [visible, setvisible] = useState(false);
    const [triggerNode, setTriggerNode] = useState(null)
    let wrapperRef: HTMLDivElement;
    let contentRef: HTMLDivElement;
    let arrowRef: HTMLDivElement;
    let timeout: any;

    const handleclick: React.MouseEventHandler = (e) => {
        setTriggerNode(e.currentTarget as HTMLElement)
        setvisible(true)
    }
    const handleClickDocument = (e: MouseEvent) => {
        const target = e.target as HTMLElement
        if (!wrapperRef.contains(target)) setvisible(false)
    }
    const handleMouseEnter: React.MouseEventHandler = (e) => {
        setTriggerNode(e.currentTarget as HTMLElement)
        if (trigger === 'hover') {
            setvisible(true)
            if (timeout) {
                window.clearTimeout(timeout)
                timeout = null
            }
        }
    }
    const handleMouseLeave: React.MouseEventHandler = (e) => {
        if (trigger === 'hover') {
            timeout = setTimeout(() => {
                setvisible(false)
            }, 200)
        }
    }
    const handleFocus: React.FocusEventHandler = (e) => {
        setTriggerNode(e.currentTarget as HTMLElement)
        if (trigger === 'focus') {
            setvisible(true)
        }
    }
    const handleBlur: React.FocusEventHandler = e => {
        if (trigger === 'focus') {
            setvisible(false)
        }
    }
    useEffect(() => {
        if (visible) {
            console.log('update')
            locateContent()
            if (trigger === 'click') {
                document.addEventListener('click', handleClickDocument)
            }
        }
    })
    useEffect(() => {
        console.log('Mount')
        if (visible) {
            locateContent()
        }
        return () => {
            console.log('distory')
            if (!visible && trigger === 'click') document.removeEventListener('click', handleClickDocument)
        }
    }, [])

    const saveWrapperRef = (node: HTMLDivElement) => {
        wrapperRef = node
    }
    const saveContentRef = (node: HTMLDivElement) => {
        // console.log(node)
        contentRef = node
    }
    const saveArrowRef = (node: HTMLDivElement) => {
        arrowRef = node
    }

    const locateContent = () => {
        /**
         * 获取点击element的相对于视口的位置及大小
         */

        const {
            top: triggerTop,
            left: triggerLeft,
            right: triggerRight,
            bottom: triggerBottom
        } = triggerNode.getBoundingClientRect()
        const triggerWidth = triggerRight - triggerLeft
        const triggerHeight = triggerBottom - triggerTop
        /**
         * 获取滚动条位置
         */
        const { scrollX, scrollY } = window
        switch (position) {
            case 'top':
                wrapperRef.style.left = triggerLeft + scrollX + triggerWidth / 2 + 'px'
                wrapperRef.style.top = triggerTop + scrollY + 'px'
                break
            case 'bottom':
                wrapperRef.style.left = triggerLeft + scrollX + triggerWidth / 2 + 'px'
                wrapperRef.style.top = triggerBottom + scrollY + 'px'
                break
            case 'left':
                wrapperRef.style.left = triggerLeft + scrollX + 'px'
                wrapperRef.style.top = triggerTop + triggerHeight / 2 + scrollY + 'px'
                break
            case 'right':
                wrapperRef.style.left = triggerRight + scrollX + 'px'
                wrapperRef.style.top = triggerTop + triggerHeight / 2 + scrollY + 'px'
                break
            default:
                break
        }

    }

    const gethandles = () => {
        if (trigger === 'click') {
            return { onClick: handleclick }
        } else if (trigger === 'hover') {
            return { onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave }
        }
        return { onFocus: handleFocus, onBlur: handleBlur }
    }
    const renderChildren = () => {
        return typeof children === 'string' ? (
            <span onClick={handleclick} >{children}</span>
        ) : (
                React.cloneElement(React.Children.only(children) as React.ReactElement<any>, { ...gethandles() })
            )
    }
    return (
        <div>
            {ReactDOM.createPortal(
                <Transition
                    in={visible}
                    timeout={300}
                    animation="zoom-in-top"
                >
                    <div
                        className={classNames(PopcoverClass('wrapper', position))}
                        ref={saveWrapperRef}
                    >
                        <div
                            className={classNames(PopcoverClass('content'), className)}
                            style={style}
                            ref={saveContentRef}
                        >
                            <div className={classNames(PopcoverClass('content-arrow', `content-arrow-${position}`
                            ))} ref={saveArrowRef}></div>
                            <div className={PopcoverClass('content-title')}>{title}</div>
                            <div className={PopcoverClass('content-list')}> {content}</div>
                        </div>
                    </div>
                </Transition>
                ,
                document.body
            )}
            {renderChildren()}
        </div>

    )
}
Popcover.defaultProps = {
    trigger: 'click',
    position: 'top'
}
export default Popcover