import { shallowMount } from '@vue/test-utils';
import FormField from '@/components/UI/FormField.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(FormField, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
