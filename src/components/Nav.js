import m from "mithril";

const Nav = {
  view: () => m("nav", [
    m("a.nav-item", {href: "/", oncreate: m.route.link}, "Home"),
    m("a.nav-item", {href: "/users", oncreate: m.route.link}, "Users")
  ])
};

export default Nav;