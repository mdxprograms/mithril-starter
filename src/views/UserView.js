import m from "mithril";

// model
import User from "../models/User";

const UserView = {
  oninit: User.loadList,
  view: () => [
    m("h4", "Reddit Users /r/clojure"),
    m(".user-list", User.list.map(user => m(".user", user.data.author)))
  ]
};

export default UserView;
