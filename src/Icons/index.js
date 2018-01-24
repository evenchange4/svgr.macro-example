import toReactComponent from 'svgr.macro';

const { DoneBlack, Autorenew } = toReactComponent(
  './material/*.svg',
  { icon: true },
);

export default { DoneBlack, Autorenew };
