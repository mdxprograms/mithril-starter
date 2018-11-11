import m from "mithril";

// models
import User from "./models/User";

const AppView = {
  oninit: User.loadList,
  view: () => [
    m("h2", "Mithril Starter"),
    m("h4", "Reddit Users /r/clojure"),
    m(".user-list", User.list.map(user => m(".user", user.data.author)))
  ]
};

m.mount(document.getElementById("root"), AppView);
