<template>
  <div class = 'search-box'>
      <input class = "search-text" type="text" placeholder = "Search Anything">
        <a href="#" class = "search-btn">
      <i class="fas fa-search"></i>
    </a>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.search-box {
  position: absolute;
  top : 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #2f3640;
  height: 40px;
  border-radius: 40px;
  padding: 10px;
  
}

.search-box:hover > .search-text{
  width: 240px;
  padding: 0 6px;
}

.search-box:hover > .search-btn{
  background: white;
  color: black;
  
}

.search-btn {
  color: #e84118;
  float: right;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #2f3640;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s;
  cursor: pointer;
  text-decoration: none;
  
}
.search-btn > i {
  font-size: 30px;
}

.search-text {
  border: none;
  background: none;
  outline: none;
  float: left;
  padding: 0;
  color: white;
  font-size: 16px;
  font-weight: normal;
  transition: 0.4s;
  line-height: 40px;
  width: 0px;
/*   width: 250px; */ 
}
</style>