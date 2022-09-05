import { createStore } from "vuex";
import router from "@/router";

const TempestGamingUrl = "https://marshalinocapstone.herokuapp.com/";

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    message: null,
    cart: null
  },
  getters: {
    getUsers: (state) => state.users,
    getProducts: (state) => state.products,
    getUser: (state) => state.user,
    getCart: (state) => state.cart
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setUser(state, user) {
      state.user = user;
    },
    setProducts(state, products) {
      state.products = products;
    },
    setProduct(state, product) {
      state.product = product;
    },
    setCart(state, values) {
      state.cart = values;
    }
  },
  actions: {
    // register
    register: async (context, payload) => {
      // fecth from body
      const { firstName, lastName, email, phoneNo, password } = payload;
      // fetch method from api
      await fetch("https://marshalinocapstone.herokuapp.com/register", {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        // fetch data from form
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          email: email,
          phoneNo: phoneNo,
          password: password,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
    },
    // login
    login(context, payload) {
      // console.log(payload);
      fetch(TempestGamingUrl + "login", {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(payload),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.msg === "Login Failed.") {
          } else {
            context.commit("setUser", payload);
            console.log("sign in");
            router.push({ name: "home" });
          }
        });
    },
    // get users
    getusers: async (context) => {
      let res = await fetch(TempestGamingUrl + "users");
      let data = await res.json();
      let result = data.results;
      if (result) {
        context.commit("setUsers", result);
      } else {
        console.log(`Loading...`);
      }
    },
    // get single user
    getuser: async (context, id) => {
      fetch(TempestGamingUrl + "users/" + id)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          context.commit("setUsers", data.results);
        });
    },
    // delete user
    deleteuser: async (context, id) => {
      fetch("https://marshalinocapstone.herokuapp.com/users/" + id, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then(() => context.dispatch("getusers"));
    },
    // update user
    updateuser: async (context, user) => {
      // fecth from body
      const { firstName, lastName, email, phoneNo, password } = payload;
      // fetch method from api
      fetch("https://marshalinocapstone.herokuapp.com/users/" + user.id, {
        method: "PUT",
        body: JSON.stringify(product),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        // fetch data from form
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          email: email,
          phoneNO: phoneNO,
          password: password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.msg);
          context.dispatch("getusers");
        });
    },
    // get products
    getproducts: async (context) => {
      let res = await fetch(
        "https://marshalinocapstone.herokuapp.com/products"
      );
      let data = await res.json();
      let result = data.results;
      if (result) {
        context.commit("setProducts", result);
      } else {
        console.log("loading...");
      }
    },
    // get single product
    getproduct: async (context, id) => {
      // Product_id = 1
      fetch(TempestGamingUrl + "products/" + id)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          context.commit("setProduct", data.results);
        });
    },
    // add product
    addProduct: async (context, payload) => {
      const { title, price, category, description, img } = payload;
      try {
        await fetch("https://marshalinocapstone.herokuapp.com/products", {
          method: "POST",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify({
            title: title,
            price: price,
            category: category,
            description: description,
            img: img,
          }),
        })
          .then((response) => response.json)
          .then((json) => context.commit("setProducts", json.data));
        router.push({ name: "admin" });
      } catch (e) {
        console.log(e);
      }
    },
    editProduct: async (context, product) => {
      fetch("https://marshalinocapstone.herokuapp.com/products/" + product.id, {
        method: "PUT",
        // fetch data from form
        body: JSON.stringify(product),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          // alert(data.msg);
          console.log(data);
          context.dispatch("getproducts");
        });
    },
    // delete product
deleteProduct: async (context, id) => {
  fetch("https://marshalinocapstone.herokuapp.com/products/"+id, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then(() => context.dispatch('getproducts'));
},
    // updates list
    updateProduct: async (context, product) => {
      fetch(
        "https://marshalinocapstone.herokuapp.com/products/" +
          product.product_id,
        {
          method: "PUT",
          body: JSON.stringify(product),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          alert(data.msg);
          context.dispatch("getProducts");
        });
    },
  },
  getCart: async (context) => {
    // fetch
    let res = await fetch(
      artmart + "users/" + context.state.user.id + "/cart"
    );
    let data = await res.json();
    let result = data.results;
    if (result) {
      context.commit("setCart", result);
    } else {
      console.log("Failed to get cart");
    }
  },
  modules: {},
});
