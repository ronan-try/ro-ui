<template>
  <el-container id="nav">
    <el-header class="rocli-header">
      💥 Ro-X
    </el-header>
    <el-main>
      <el-tabs v-model="activeName">
        <el-tab-pane
          v-for="link of links"
          :key="link.path"
          :name="link.path"
          :label="link.name"
        >
          <component :is="link.component" />
        </el-tab-pane>
      </el-tabs>
    </el-main>
    <el-select v-model="dialogVisible">
      <el-option
        v-for="i of [true, false]"
        :key="i"
        :label="i"
        :value="i"
      />
    </el-select>
    <el-dialog
      v-model="dialogVisible"
    >
      太惨了
    </el-dialog>
  </el-container>
</template>

<script>
import { routes } from './router'

export default {
  name: 'App',
  data() {
    return {
      links: routes,
      activeName: '/',
      dialogVisible: false,
    };
  },
};
</script>

<style>
#app {
  font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 0 30px;
}

#nav a {
  font-weight: bold;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.rocli-header {
  position: relative;
  height: auto !important;
  line-height: 2;
  text-align: left;
  font-size: 20px;
  font-weight: 600;
  border-bottom: 1px solid #e3e3e3;
}
</style>
