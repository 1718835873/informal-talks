<template>
  <div class="one-day">
    <!-- 自定义卡片 -->
    <div class="card-area">
      <ul class="item-uls">
      	<li class="item">
          <div class="li-left">
            <p class="cn-name">何安杰</p>
            <p class="en-name">
              
            </p>
            <p class="info">
              来自苏格兰
            </p>
          </div>
          <div class="li-right">
            <img src="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=737677953,2526600041&fm=173&s=6C0A8655324353555EB51DB703003009&w=243&h=363&img.JPEG" alt="">
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
</script>

<style scoped="scoped">
.one-day{
    width: 100%;
    box-sizing: border-box;
    padding-right: 200px;
    padding-bottom: 70px;
    /* margin-bottom: 100px; */
    text-align: center;
    bottom: 70px;
    overflow: hidden;
   }
   .item {
      display: flex;
      align-items: center;
    }
    ul>li{
      list-style: none;
      float: left;
      padding: 20px;
      border: 1px solid #c0c0c0;
      border-radius: 20px;
      box-shadow: 1px 2px 4px #C0C0C0;
      margin-right: 20px;
      width: 300px;
      margin-bottom: 20px;
      vertical-align: middle;
    }

</style>
