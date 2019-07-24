import Header from './src/Header.vue';

Header.install = (Vue) => {
  Vue.component(Header.name, Header);
};

export default Header;
