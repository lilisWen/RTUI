import * as React from 'react'
import * as ReactDOM from 'react-dom'
import uniqueId from '../../utils/uniqueId'
import Message from './Message'
import { Options } from './Message'


const messageContainer: Object = {}

function addMessageContainer(messageId: string, container: HTMLDivElement) {
  messageContainer[messageId] = container
}

function ensureUniqueMessage(messageId: string) {
  if (messageContainer[messageId]) {
    throw new Error(`Dunplicate messageId found: ${messageId}`)
  }
}

function openMessage(
  options: Options,
  mode: 'info' | 'success' | 'warning' | 'error'
) {
  const messageId = uniqueId('$rt-message$-')
  ensureUniqueMessage(messageId)
  let {
    content,
    duration = 3,
    top = 24,
    showIcon = true,
    onClose,
    className,
    style
  } = options
  const container = document.createElement('div')
  document.body.append(container)
  if (Object.keys(messageContainer).length >= 1) {
    const pre = messageContainer[Object.keys(messageContainer)[Object.keys(messageContainer).length - 1]] as HTMLDivElement
    const preM = pre.firstChild as HTMLElement
    top = parseInt(preM.style.top) + 50
  }
  const messageInstance = React.createElement(
    Message as React.ComponentClass,
    {
      content,
      mode,
      duration,
      top,
      showIcon,
      messageId,
      onClose,
      className,
      style
    } as React.ClassAttributes<any>
  )
  ReactDOM.render(messageInstance, container)
  addMessageContainer(messageId, container)
}

export function removeMessage(messageId: string) {
  if (!messageContainer[messageId]) {
    return
  }
  const container = messageContainer[messageId]
  ReactDOM.unmountComponentAtNode(container)
  container.remove()
  delete messageContainer[messageId]
}

export function Minfo(options: Options) {
  openMessage(options, 'info')
}

export function Msuccess(options: Options) {
  openMessage(options, 'success')
}

export function Mwarning(options: Options) {
  openMessage(options, 'warning')
}

export function Merror(options: Options) {
  openMessage(options, 'error')
}
