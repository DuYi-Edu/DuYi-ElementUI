import Icon from './src/Icon.vue';

Icon.install = (Vue) => {
  Vue.component(Icon.name, Icon);
};

export default Icon;
