import Col from './src/Col';

Col.install = (Vue) => {
  Vue.component(Col.name, Col);
};

export default Col;
