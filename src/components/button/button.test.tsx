import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button, { ButtonProps } from './button'
import '@testing-library/jest-dom/extend-expect';

const defaultProps = {
    onClick: jest.fn()
}
const testProps: ButtonProps = {
    type: 'primary',
    size: 'large',
    className: "rtui"
}
const disabledProps: ButtonProps = {
    disable: true,
    onClick: jest.fn(),
}
describe('test button component', () => {
    test('render correct default button', () => {
        const wrapper = render(<Button {...defaultProps}>Nice</Button>)
        const element = wrapper.queryByText('Nice')
        expect(element).toBeInTheDocument()
        expect(element).toHaveClass('rt-button rt-button-default')
        expect(element.tagName).toEqual('BUTTON')
        fireEvent.click(element)
        expect(defaultProps.onClick).toHaveBeenCalled()
    })
    test('render correct button based on different props', () => {
        const wrapper = render(<Button {...testProps}>Nice</Button>)
        const element = wrapper.getByText('Nice')
        expect(element).toBeInTheDocument()
        expect(element).toHaveClass('rt-button-primary rt-button-large rtui')
    })
    test('render link when type equal link', () => {
        const wrapper = render(<Button type='link'>Nice</Button>)
        const element = wrapper.getByText('Nice')
        expect(element).toBeInTheDocument()
        expect(element.tagName).toEqual('A')
        expect(element).toHaveClass('rt-button-link ')
    })
    test('render disable button without click', () => {
        const wrapper = render(<Button {...disabledProps}>Nice</Button>)
        const element = wrapper.getByText('Nice') as HTMLButtonElement
        expect(element).toBeInTheDocument()
        expect(element.disabled).toBeTruthy()
        fireEvent.click(element)
        expect(disabledProps.onClick).not.toHaveBeenCalled()
    })
})