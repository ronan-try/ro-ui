<template>
  <div class="tools_board">
    <h3 class="tools_board-h1">Git:</h3>
    <el-button
      class="tools_board-btn"
      @click="onClickMr"
    >
      Make a MR /PR
    </el-button>
    <el-button
      class="tools_board-btn"
      @click="onClickFork"
    >
      Git Flow-Fork
    </el-button>
    <el-button
      class="tools_board-btn"
      @click="onClickFork"
    >
      Git Flow-Sync
    </el-button>
  </div>
  <div class="tools_board">
    <h3 class="tools_board-h1">Nginx:</h3>
    <el-button
      class="tools_board-btn"
      @click="onClickNginxEdit"
    >
      Edit Config
    </el-button>
    <el-button
      class="tools_board-btn"
      @click="onClickNginxStart"
    >
      Start
    </el-button>
    <el-button
      class="tools_board-btn"
      @click="onClickNginxStop"
    >
      Stop
    </el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import vscodePostMessage from '../composables/vscodePostMessage';

export default defineComponent({
  name: "HelloWorld",
  setup () {
    const onClickMr = () => {
      vscodePostMessage({
        command: "ro_mr",
        text: "good luck",
      })
    }

    const onClickFork = () => {
      vscodePostMessage({
        command: "alert",
        text: "good luck",
      })
    }

    const onClickNginxEdit = () => {
      vscodePostMessage({
        command: 'demo',
        text: 'lucky nginx'
      })
    }

    return {
      onClickMr,
      onClickFork,
      onClickNginxEdit,
      onClickNginxStart () {
        vscodePostMessage({
          command: 'demo-start',
          text: 'demo-start'
        })
      },
      onClickNginxStop () {
        vscodePostMessage({
          command: 'demo-stop',
          text: 'demo-stop'
        })
      }
    }
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.tools_board {
  text-align: left;
}
.tools_card {
  display: block;
  min-width: 200px;
}
.tools_board-h1 {
  display: inline-block;
  padding-right: 10px;
}
</style>
