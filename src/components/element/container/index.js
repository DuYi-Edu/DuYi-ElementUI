import Container from './src/Container.vue';

Container.install = (Vue) => {
  Vue.component(Container.name, Container);
};

export default Container;
