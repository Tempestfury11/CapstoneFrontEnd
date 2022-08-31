<template>
  <div class="modal fade" style="color:black !important" id="AddProductModal" tabindex="-1" aria-labelledby="AddProductModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="container">
            <div class="modal-content text-white">
                <div class="modal-header">
                    <h5 class="modal-title" id="AddProductModalLabel">Add Product</h5>
                    <button type="button" id="AddProductModalClose" class="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form method="POST" @submit="addProduct">
                        <label for="ProductName" class="form-label">Product Name</label>
                        <input type="text" class="form-control" v-model="title" name="ProductName">
                        <label for="ProductUrl" class="form-label">Product Url</label>
                        <input type="text" class="form-control" v-model="img" name="ProductUrl">
                        <label for="Description" class="form-label">Description</label>
                        <input type="text" class="form-control" v-model="description" name="Description">
                        <label for="Category" class="form-label">Category</label>
                        <input type="text" class="form-control" v-model="category" name="category">
                        <label for="Price" class="form-label">Price</label>
                        <input type="number" class="form-control" name="Price" v-model="price">
                        <button type="submit" class="btn btn-grad">Add</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            title: null,
            prodUrl: null,
            description: null,
            category: null,
            price: null
        }
    },
    methods:{
        addProduct(e){
            e.preventDefault();
            let newProduct = {
                title: this.title,
                prodUrl: this.prodUrl,
                description: this.description,
                category: this.category,
                price: this.price
            };
            this.$store.dispatch('addProduct',newProduct);
            document.getElementById('AddProductModalClose').click();
        }
    }
}
</script>

<style scoped>
.modal-content{
  background-image: linear-gradient(to right, #000000 0%, #434343  51%, #000000  100%);
}
.btn-grad {
  background-image: linear-gradient(
    to right,
    #000000 0%,
    #434343 51%,
    #000000 100%
  );
  margin: 10px;
  padding: 10px 15px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  font-size: 12px;
}

.btn-grad:hover {
  background-position: right center;
  color: #fff;
  text-decoration: none;
}
</style>