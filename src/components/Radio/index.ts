import Radio, { RadioProps } from './radio';
import Option, { OptionProps } from './option';
import * as React from 'react'

export type IRadioComponent = React.FC<RadioProps> & {
    Option: React.FC<OptionProps>,
}
const TransRadio = Radio as IRadioComponent
TransRadio.Option = Option
export default TransRadio