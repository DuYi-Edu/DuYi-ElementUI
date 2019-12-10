import Button from '@element/button';
import { shallowMount } from '@vue/test-utils';

describe('Button.vue', () => {
  let wrapper;
  let buttonEle;

  beforeEach(() => {
    wrapper = shallowMount(Button);
    buttonEle = wrapper.vm.$el;
  });

  it('size', () => {
    wrapper.setProps({
      size: 'medium',
    });

    expect(buttonEle.classList).toContain('el-button--medium');
  });

  it('type', () => {
    wrapper.setProps({
      type: 'primary',
    });

    expect(buttonEle.classList).toContain('el-button--primary');
  });

  it('plain', () => {
    wrapper.setProps({
      plain: true,
    });

    expect(buttonEle.classList).toContain('is-plain');
  });

  it('round', () => {
    wrapper.setProps({
      round: true,
    });

    expect(buttonEle.classList).toContain('is-round');
  });

  it('circle', () => {
    wrapper.setProps({
      circle: true,
    });

    expect(buttonEle.classList).toContain('is-circle');
  });

  it('disabled', () => {
    wrapper.setProps({
      disabled: true,
    });

    expect(buttonEle.classList).toContain('is-disabled');
  });

  it('loading', () => {
    wrapper.setProps({
      loading: true,
    });

    expect(wrapper.html()).toContain('<i class="el-icon-loading"></i>');
  });

  it('icon', () => {
    wrapper.setProps({
      icon: 'el-icon-edit',
    });

    expect(wrapper.html()).toContain('<i class="el-icon-edit"></i>');
  });

  it('autofocus', () => {
    wrapper.setProps({
      autofocus: true,
    });

    expect(wrapper.attributes('autofocus')).toEqual('autofocus');
  });

  it('nativeType', () => {
    wrapper.setProps({
      nativeType: 'submit',
    });

    expect(wrapper.attributes('type')).toEqual('submit');
  });

  it('click', () => {
    wrapper.trigger('click');
    expect(wrapper.emitted().click).toBeTruthy();
  });
});
