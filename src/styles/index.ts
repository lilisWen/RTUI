import generater from '../utils/classname'
import * as ButtonLess from './button.less'
import * as IconLess from './icon.less'
import * as MenuLess from './menu.less'
import * as ExampleLess from './Example.less'

export const ButtonClass = generater(ButtonLess, 'button')
export const IconClass = generater(IconLess, 'button')
export const MenuClass = generater(MenuLess, 'menu')
export const ExampleClass = generater(ExampleLess, 'example')