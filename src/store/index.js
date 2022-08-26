import { createStore } from 'vuex';
import router from '@/router';

const TempestGamingUrl = 'https://marshalinocapstone.herokuapp.com/';

export default createStore({
  state: {
    users: null,
    products: null,
    product: null,
    message: null
  },
  getters: {
    getUsers: state => state.users,
    getProducts: state => state.products
  },
  mutations: {
    setUsers(state, users) {
      state.users = users
    },
    setProducts(state, products) {
      state.products = products
    },
    setProduct(state, product) {
      state.product = product
    },
   
  },
  actions: {
    // register
    register: async (context, payload) => {
      // fecth from body
      const { firstName, lastName, email, phoneNO, password } = payload;
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
          phoneNO: phoneNO,
          password: password,
        }),
      })
        .then((response) => response.json())
        .then((json) => context.commit("setUser", json, e.message = "Registration was successfull."))
        .catch(e => context.commit('setMessage', e.message = "Email/Phone Number Already Exists."));
    },

    // login
    login: async (context, payload) => {
      const { email, password } = payload;
      let result = await fetch(TempestGamingUrl + "login", {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
      if (result) {
        router.push({ name: "home" })
      }
      if (!result) {
        alert('Password or Email is wrong. Please try again.')
        router.push({ name: "login" })
      }
    },

    // get users
    getusers: async (context) => {
      let res = await fetch(TempestGamingUrl + 'users');
      let data = await res.json();
      let result = data.results;
      if (result) {
        context.commit('setUsers', result)
      } else {
        console.log(`Loading...`);
      }
    },

    // get single user
    getuser: async (context, id) => {
      fetch(TempestGamingUrl + 'users/' + id)
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          context.commit('setUsers', data.results);
        })
    },

    // delete user
    deleteuser: async (context, id) => {
      fetch("https://marshalinocapstone.herokuapp.com/users/" + id, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then(() => context.dispatch('getUsers'));
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
          context.dispatch("getUsers");
        });
    },
    // _____________
    // get products
getproducts: async (context) => {
  let res = await fetch('https://marshalinocapstone.herokuapp.com/products');
  let data = await res.json();
  let result = data.results;
  if(result){
    context.commit('setProducts', result)
  }else{
    console.log('loading...')
  }
},

// get single product  
getproduct: async (context, product_id) => {
  // Product_id = 1
  fetch(TempestGamingUrl+'products/' + product_id)
  .then((res) => res.json())
  .then((data) =>{
  console.log(data)
    context.commit("setProduct", data.results);
  })
},

 // add product
 addProduct: async(context, payload) => {
  const { title, price, category, description, img, } = payload;
  
  try{
    await fetch(TempestGamingUrl+"products", {
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
    router.push({name: "admin"});
    
  }catch(e) {
  console.log(e);
}
},

// delete product
deleteProduct: async (context, product_id) => {
  fetch("https://marshalinocapstone.herokuapp.com/products/" + product_id, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then(() => context.dispatch('getProducts'));
},


// updates list
    updateProduct: async (context, product) => {
      // fetch("http://localhost:3000/products/" + product.id, {
      fetch("https://marshalinocapstone.herokuapp.com/products/" + product.product_id, {
          method: "PUT",
          body: JSON.stringify(product),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
        .then((res) => res.json())
        .then((data) => {
          alert(data.msg);
          context.dispatch("getProducts");
        });
    },


  },
  modules: {
  }
})
