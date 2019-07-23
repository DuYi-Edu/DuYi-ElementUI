import Row from '@element/row';
import Col from '@element/col';
import { shallowMount } from '@vue/test-utils';

describe('Col.vue', () => {
  let wrapper;
  let colEle;

  beforeEach(() => {
    wrapper = shallowMount(Col, {
      parentComponent: Row,
    });
    colEle = wrapper.vm.$el;
  });

  it('create', () => {
    expect(colEle.classList).toContain('el-col');
  });

  it('span', () => {
    wrapper.setProps({ span: 12 });
    expect(colEle.classList).toContain('el-col-12');
  });

  it('offset', () => {
    wrapper.setProps({ offset: 6 });
    expect(colEle.classList).toContain('el-col-offset-6');
  });

  it('pull', () => {
    wrapper.setProps({ pull: 3 });
    expect(colEle.classList).toContain('el-col-pull-3');
  });

  it('push', () => {
    wrapper.setProps({ push: 5 });
    expect(colEle.classList).toContain('el-col-push-5');
  });

  it('respnsive', () => {
    wrapper.setProps({
      sm: { span: 4, offset: 2 },
      md: 8,
      lg: { span: 6, offset: 3 },
    });
    expect(colEle.classList).toContain('el-col-sm-4');
    expect(colEle.classList).toContain('el-col-sm-offset-2');
    expect(colEle.classList).toContain('el-col-md-8');
    expect(colEle.classList).toContain('el-col-lg-6');
    expect(colEle.classList).toContain('el-col-lg-offset-3');
  });

  it('gutter', () => {
    wrapper.vm.$parent.gutter = 20;
    expect(colEle.style.paddingLeft).toBe('10px');
    expect(colEle.style.paddingRight).toBe('10px');
  });
});
