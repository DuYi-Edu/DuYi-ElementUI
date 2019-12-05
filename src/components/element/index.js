import Row from '@element/row';
import Col from '@element/col';
import Container from '@element/container';
import Main from '@element/main';
import Header from '@element/header';
import Footer from '@element/footer';
import Aside from '@element/aside';
import Icon from '@element/icon';
import Button from '@element/button';

const components = [
  Row,
  Col,
  Container,
  Main,
  Header,
  Footer,
  Aside,
  Icon,
  Button,
];

const install = (Vue) => {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};


export default {
  install,
  Row,
  Col,
  Container,
  Main,
  Header,
  Footer,
  Aside,
  Icon,
  Button,
};

export {
  install,
  Row,
  Col,
  Container,
  Main,
  Header,
  Footer,
  Aside,
  Icon,
  Button,
};
