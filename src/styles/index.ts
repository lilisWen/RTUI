import generater from '../utils/classname'
import * as ButtonLess from './button.less'
import * as IconLess from './icon.less'
import * as MenuLess from './menu.less'
import * as ExampleLess from './Example.less'
import * as TransitionLess from './transition.less'
import * as PopcoverLess from './popcover.less'

export const ButtonClass = generater(ButtonLess, 'button')
export const IconClass = generater(IconLess, 'icon')
export const MenuClass = generater(MenuLess, 'menu')
export const ExampleClass = generater(ExampleLess, 'example')
export const TransitionClass = generater(TransitionLess, 'transition')
export const PopcoverClass = generater(PopcoverLess, 'popcover')