import generater from '../utils/classname'
import * as ButtonLess from './button.less'
import * as IconLess from './icon.less'
import * as MenuLess from './menu.less'
import * as ExampleLess from './Example.less'
import * as TransitionLess from './transition.less'
import * as PopcoverLess from './popcover.less'
import * as InputLess from './input.less'
import * as RadioLess from './radio.less'
import * as SwitchLess from './switch.less'
import * as GridLess from './grid.less'
import * as CheckBoxLess from './checkbox.less'
import * as CollapseLess from './collpase.less'

export const ButtonClass = generater(ButtonLess, 'button')
export const IconClass = generater(IconLess, 'icon')
export const MenuClass = generater(MenuLess, 'menu')
export const ExampleClass = generater(ExampleLess, 'example')
export const TransitionClass = generater(TransitionLess, 'transition')
export const PopcoverClass = generater(PopcoverLess, 'popcover')
export const InputClass = generater(InputLess, 'input')
export const RadioClass = generater(RadioLess, 'radio')
export const SwitchClass = generater(SwitchLess, 'switch')
export const GridClass = generater(GridLess, 'grid')
export const CheckBoxClass = generater(CheckBoxLess, 'checkbox')
export const CollapseClass = generater(CollapseLess, 'collapse')