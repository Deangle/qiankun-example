<template>
  <div id="app">
    <a-tabs default-active-key="1" @change="handleChange">
      <a-tab-pane key="1">
        <span slot="tab">Vue</span>
      </a-tab-pane>
      <a-tab-pane key="2">
        <span slot="tab">React</span>
      </a-tab-pane>
    </a-tabs>
    <div id="subapp-container"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    // 切换面板
    handleChange (activeKey) {
      switch (activeKey) {
        case '1':
          // 切换子应用为 sub-vue
          history.pushState(null, '/sub-vue', '/sub-vue')
          break
        case '2':
          // 切换子应用为 sub-react
          history.pushState(null, '/sub-react', '/sub-react')
          break
      }
    }
  }
}
</script>

<style>
#app {
  text-align: center;
}
</style>
