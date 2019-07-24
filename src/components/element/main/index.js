import Main from './src/Main.vue';

Main.install = (Vue) => {
  Vue.component(Main.name, Main);
};

export default Main;
