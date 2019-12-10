import Link from '@element/link';
import { shallowMount } from '@vue/test-utils';

describe('Link.vue', () => {
  let wrapper;
  let linkEle;

  beforeEach(() => {
    wrapper = shallowMount(Link);
    linkEle = wrapper.vm.$el;
  });

  it('create', () => {
    expect(linkEle.classList).toContain('el-link');
    expect(linkEle.classList).toContain('is-underline');
  });

  it('type', () => {
    wrapper.setProps({
      type: 'success',
    });

    expect(linkEle.classList).toContain('el-link--success');
  });

  it('underline', () => {
    wrapper.setProps({
      underline: false,
    });

    expect(linkEle.classList).not.toContain('is-underline');
  });

  it('disabled', () => {
    wrapper.setProps({
      disabled: true,
    });

    expect(linkEle.classList).toContain('is-disabled');
  });

  it('href', () => {
    wrapper.setProps({
      href: 'https://www.baidu.com/',
    });

    expect(wrapper.attributes('href')).toEqual('https://www.baidu.com/');
  });

  it('icon', () => {
    wrapper.setProps({
      icon: 'el-icon-edit',
    });

    expect(wrapper.html()).toContain('<i class="el-icon-edit"></i>');
  });

  it('click', () => {
    wrapper.trigger('click');
    expect(wrapper.emitted().click).toBeTruthy();
  });

  it('click href', () => {
    wrapper.setProps({
      href: 'https://www.baidu.com/',
    });
    wrapper.trigger('click');
    expect(wrapper.emitted().click).toBeFalsy();
  });

  it('click disabled', () => {
    wrapper.setProps({
      disabled: true,
    });
    wrapper.trigger('click');
    expect(wrapper.emitted().click).toBeFalsy();
  });
});
