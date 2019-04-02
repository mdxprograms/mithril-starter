import m from "mithril";

const User = {
  list: [],
  loadList: () =>
    m
      .request({
        method: "GET",
        url: "https://www.reddit.com/r/clojure.json"
      })
      .then(results => {
        User.list = results.data.children;
      })
};

export default User;
