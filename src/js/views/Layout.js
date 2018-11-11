import m from "mithril";

import Nav from "../components/Nav";

const Layout = {
  view: vnode => [
    m(Nav),
    m("h2", "Mithril Starter"),
    m(".content", vnode.children)
  ]
};

export default Layout;