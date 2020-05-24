import { RadioProps } from './radio';
import { OptionProps } from './option';
import * as React from 'react';
export declare type IRadioComponent = React.FC<RadioProps> & {
    Option: React.FC<OptionProps>;
};
declare const TransRadio: IRadioComponent;
export default TransRadio;
