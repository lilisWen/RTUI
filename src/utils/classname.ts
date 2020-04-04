import classnames from 'classnames'
/**
@param style - object; for css module
*/
export default (style: any, module: string, prefix = 'rt') => {
    return (...args: any[]): string => {
        let classNamesList: string[]
        const prefixs = `${prefix}${module ? `-${module}` : '-'}`
        const classNames = classnames(...args)
        if (!classNames) return

        classNamesList = classNames.split(' ').map(child => { return child === '*' ? `${prefixs}` : `${prefixs}-${child}` })
        classNamesList = classNamesList.map(c => style[c] || c)
        return classNamesList.join(' ')
    }
}