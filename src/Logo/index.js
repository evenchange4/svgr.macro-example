import toReactComponent from 'svgr.macro';

const Logo = toReactComponent('./logo.svg', { replaceAttrValues: ['#61DAFB=currentColor'] });

export default Logo;
