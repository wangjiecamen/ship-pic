<script setup>
import { ref } from "vue";

const current = ref(0);
const select = (p) => {
  current.value = p;
};
</script>

<template>
  <div class="container">
    <div class="image_wrapper">
      <div class="button0 button" @click="select(0)"></div>
      <div class="button1 button" @click="select(1)"></div>
      <div class="button2 button" @click="select(2)"></div>
      <div class="button3 button" @click="select(3)"></div>
      <div class="button4 button" @click="select(4)"></div>
      <div class="button5 button" @click="select(5)"></div>
      <img v-if="current === 0" src="./assets/0.jpg" />
      <img v-if="current === 1" src="./assets/1.jpg" />
      <img v-if="current === 2" src="./assets/2.jpg" />
      <img v-if="current === 3" src="./assets/3.jpg" />
      <img v-if="current === 4" src="./assets/4.jpg" />
      <img v-if="current === 5" src="./assets/5.jpg" />
    </div>
  </div>
</template>

<style>
.container {
  position: relative;
  width: 10rem;
  height: 5.625rem;
  display: flex;
  flex-direction: column;
}
.button {
  position: absolute;
  width: 70px;
  height: 70px;
  cursor: pointer;
}
.button0 {
  bottom: 10px;
  left: 60px;
}
.button1 {
  bottom: 10px;
  left: 200px;
}
.button2 {
  bottom: 10px;
  left: 350px;
}
.button3 {
  bottom: 10px;
  left: 480px;
}
.button4 {
  bottom: 10px;
  left: 600px;
}
.button5 {
  bottom: 10px;
  left: 880px;
}
.image_wrapper {
  width: 100%;
  height: 100%;
  font-size: 0;
}
img {
  width: 100%;
  height: 100%;
}
</style>
