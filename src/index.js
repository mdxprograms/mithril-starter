import m from "mithril";

// router
import router from "./router";

if (module.hot) {
  module.hot.accept();
}

m.route(document.getElementById("root"), "/", router);
