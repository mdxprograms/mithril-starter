// views
import Layout from "./views/Layout";
import HomeView from "./views/HomeView";

const routes = {
  "/": {
    render: function() {
      return m(Layout, m(HomeView));
    }
  }
};

export default routes;
