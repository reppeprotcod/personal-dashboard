import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { vFocus } from "./directives/focus";

const app = createApp(App);
app.directive("focus", vFocus);
app.mount("#app");
