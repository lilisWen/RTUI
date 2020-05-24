import * as React from 'react'
import classNames from 'classnames'
import { Minfo, Msuccess, Mwarning, Merror, removeMessage } from './openMessage'
import Transition from '../Transition/transition'
import Icon from "../Icon/icon"
import { MessageClass } from '../../styles'
export interface MessageProps {
  content: string | React.ReactNode
  mode: 'info' | 'success' | 'warning' | 'error'
  top: number
  duration: number
  showIcon: boolean
  messageId: string
  onClose?: () => any
  className?: string
  style?: React.CSSProperties
}

export interface MessageState {
  visible: boolean
}

export interface Options {
  content: string | React.ReactNode
  duration?: number
  top?: number
  showIcon?: boolean
  onClose?: () => any
  className?: string
  style?: React.CSSProperties
}

class Message extends React.Component<MessageProps, MessageState> {
  public static displayName = 'message'

  public static info: (options: Options) => any = Minfo
  public static success: (options: Options) => any = Msuccess
  public static warning: (options: Options) => any = Mwarning
  public static error: (options: Options) => any = Merror
  public static removeMessage: (messageId: string) => any = removeMessage

  constructor(props: any) {
    super(props)
    this.state = {
      visible: false
    }
  }

  private closeTimeout: any
  private leaveTimeout: any

  public componentDidMount() {
    const { duration } = this.props
    this.setState({
      visible: true
    })
    if (duration) {
      this.closeTimeout = setTimeout(() => {
        this.close()
      }, duration * 1000)
    }
  }

  public componentWillUnmount() {
    const { closeTimeout, leaveTimeout } = this
    if (closeTimeout) {
      window.clearTimeout(closeTimeout)
    }
    if (leaveTimeout) {
      window.clearTimeout(leaveTimeout)
    }
  }

  public close = () => {
    this.setState({
      visible: false
    })
    this.leaveTimeout = setTimeout(() => {
      this.afterLeave()
    }, 300)
  }

  public afterLeave = () => {
    const { messageId, onClose } = this.props
    Message.removeMessage(messageId)
    if (onClose) {
      onClose()
    }
  }

  public render() {
    const { mode, top, content, showIcon, duration, className, style } = this.props
    const { visible } = this.state
    return (
      <Transition
        in={visible}
        timeout={300} animation="zoom-in-top"
      >
        <div
          className={classNames(MessageClass('*'), className, { 'with-icon': showIcon })}
          style={Object.assign({}, { top: `${top}px` }, style)}
        >
          <span className={classNames(MessageClass('icon-wrapper'), mode)}>
            <Icon name={mode} size={16} />
          </span>
          {content}
          {duration === 0 && (
            <span className={classNames(MessageClass('close'))} onClick={this.close}>
              <Icon name="close" size={12} />
            </span>
          )}
        </div>
      </Transition>
    )
  }
}

export default Message
