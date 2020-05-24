import * as React from 'react'
import * as PropTypes from 'prop-types'
import classNames from 'classnames'
import tuple from '../../utils/type'
import { ButtonClass } from '../../styles'

const ButtonGroupSizes = tuple('default', 'large', 'small')
type ButtonGroupSize = (typeof ButtonGroupSizes)[number]
const ButtonGroupTypes = tuple('default', 'primary', 'dashed', 'success', 'danger', 'link')
type ButtonGroupType = (typeof ButtonGroupTypes)[number]
export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    outline?: boolean,
    size?: ButtonGroupSize,
    className?: string,
    type?: ButtonGroupType
}
export interface ButtonGroupState {
    currentIndex: number
}
export default class ButtonGroup extends React.Component<ButtonGroupProps, ButtonGroupState> {
    static defaultProps = {
        outline: false,
        size: 'default',
        type: 'default'
    }
    static PropTypes = {
        outline: PropTypes.bool,
        size: PropTypes.oneOf(ButtonGroupSizes),
        type: PropTypes.oneOf(ButtonGroupTypes)
    }
    constructor(props: any) {
        super(props)
        this.state = {
            currentIndex: 0
        }
    }
    setCurrentIndex = (event: any) => {
        this.setState({
            currentIndex: parseInt(event.currentTarget.getAttribute('index'), 10)
        })
    }

    renderButtons = () => {
        const { children, size, outline, type } = this.props

        const buttons = React.Children.map(children, (child: any, index) => {
            console.log(child)
            return React.cloneElement(child, {
                size,
                outline,
                type
            })
        })
        return buttons
    }
    render() {
        const { outline } = this.props
        const className = classNames(ButtonClass('group', {
            outline
        }), this.props.className)
        return <div className={className}>
            {this.renderButtons()}
        </div>
    }
}