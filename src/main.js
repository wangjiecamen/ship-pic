import { createApp } from "vue";
import "./style.css";
import { initHtmlFontSize } from "./utils/flexible.js";
import App from "./App.vue";

createApp(App).mount("#app");

initHtmlFontSize();
