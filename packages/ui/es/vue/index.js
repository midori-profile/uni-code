import { openBlock, createElementBlock, Fragment, createElementVNode, toDisplayString } from 'vue';

var script = {
  props: {
    msg: String
  },
  data: function data() {
    return {
      count: 1
    };
  },
  methods: {
    increment: function increment() {
      // `this` will refer to the component instance
      this.count++;
    }
  }
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [createElementVNode("p", null, toDisplayString($props.msg), 1
  /* TEXT */
  ), createElementVNode("p", null, toDisplayString($data.count), 1
  /* TEXT */
  ), createElementVNode("button", {
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.increment && $options.increment.apply($options, arguments);
    })
  }, "Add")], 64
  /* STABLE_FRAGMENT */
  );
}

script.render = render;
script.__file = "vue/SharedComponent.vue";

export { script as SharedComponent };
