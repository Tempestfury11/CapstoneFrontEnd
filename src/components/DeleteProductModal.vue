<template>
    <div class="modal fade" style="color:black !important" :id="`deleteProduct`+product.id" tabindex="-1" :aria-labelledby="product.id+`DeleteLabel`" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content text-white">
                <div class="modal-header">
                    <h5 class="modal-title" :id="`deleteProductLabel`+product.id">Delete Product</h5>
                    
                    <button type="button" :id="`deleteProductClose`+product.id" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <h3>Are you sure?</h3>
                    <button data-bs-dismiss="modal" class="btn btn-grad">CANCEL</button>
                    <button class="btn btn-grad" @click="deleteProduct">DELETE</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['product'],
    methods:{
        deleteProduct(){
            this.$store.dispatch('deleteProduct',this.product);
            document.getElementById(`deleteProductClose`+this.product.id).click(function() {
                location.reload();
            });
        }
    }
}
</script>

<style scoped>
.modal-content{
    background-image: linear-gradient(
    to right,
    #000000 0%,
    #434343 51%,
    #000000 100%
  );
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