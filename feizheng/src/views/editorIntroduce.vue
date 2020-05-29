<template>
  <div class="wrap">
    <div id="contentDiv"></div>
    <!-- <textarea name="content" id="content" style="display:none" ></textarea> -->
    <el-button plain @click="getValue">提交</el-button>
  </div>

</template>

<script>
  import Editor from "wangeditor"
  export default{
    data(){
      return{
        editor:"",
        info:null
      }
    },
    methods:{
      get(){
      　var editor=new Editor("#contentDiv");
      　this.editor.customConfig.uploadImgShowBase64=true;
      　this.editor.customConfig.showLinkImg=false;
      　this.editor.customConfig.onchange=(html)=>{
      　 　　this.info=html
      　　}
      　this.editor.create();
        // 初始化编辑器的内容(从数据库中取到数据，进行渲染)
        this.editor.txt.html('<p>要初始化的内容</p>');
      },
      getValue(){
        console.log(this.info)
      }
    },
    mounted() {
      this.get();

    }
  }
</script>

<style scoped="scoped">
  .wrap{
    padding: 10px;
  }
  .w-e-text-container{
    height: 600px !important;
  }
  .el-button{
    display: block;
    margin: 20px auto;
  }
</style>
