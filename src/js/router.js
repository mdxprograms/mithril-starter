import m from "mithril";

// views
import Layout from "./views/Layout";
import HomeView from "./views/HomeView";
import UserView from "./views/UserView";

const routes = {
  "/": {
    render: () => m(Layout, m(HomeView))
  },
  "/users": {
    render: () => m(Layout, m(UserView))
  }
};

export default routes;