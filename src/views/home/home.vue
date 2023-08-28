<template>
  <div id="app">
    <div>
      <div class="top">
        <h4 class="leftTop">灵活用工服务平台</h4>
        <div class="right-top">
          <div class="top-title">
            <div>
              
            </div>
            <div>
              <span>中服云(北京)文化发展有限公司</span>
              
            </div>
          </div>
        </div>
      </div>
      <div class="cont">
        <!-- 左边 -->
        <div class="left">
          <p class="changgui">常规操作</p>
          <p class="shou">
            <span class="ye">首页</span>
          </p>
          <p class="yewu">业务管理</p>
          <div>
            <van-collapse v-model="activeNames">
              <van-collapse-item title="标题1" name="1">内容</van-collapse-item>
              <van-collapse-item title="标题2" name="2">内容</van-collapse-item>
              <van-collapse-item title="标题3" name="3">内容</van-collapse-item>
            </van-collapse>
          </div>
        </div>
        <!-- 右边 -->
        <div class="right">
          <div class="rtop">
            
            <span>项目任务/</span>
            <span>批量新建订单</span>
          </div>
          <div class="right-con">
            <div class="rt">
              <div class="rightTop active">
                <h1 class="one">01</h1>
                <p class="xm">项目信息</p>
                <p class="mc">项目名称、类型、预算等</p>
              </div>
              <div class="rightTop2">
                <h1 class="two">02</h1>
                <p class="dr">人员导入</p>
                <p class="pl">批量导入大量人员数据</p>
              </div>
              <div class="rightTop3">
                <h1 class="three">03</h1>
                <p class="jy">数据校验</p>
                <p class="jc">检查数据是否有误</p>
              </div>
            </div>
          </div>
          <div class="right-content">
            <div class="task">
              <span>任务派单</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      activeNames: ['1']
    };
  },
  methods: {
    
  },
  components: {
    
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
*{margin: 0;padding:0px;list-style: none;}
a{text-decoration: none;color:#000;display: block; font-size:14px;}
.yun{
  padding-right: 5px;
}
.homeIndex{
  width:20px;
  height:20px;
}
.top{
  width: 100%;
  display: flex;
  justify-content: space-between;
  /* border: 1px solid #000; */
  align-items: center;
}
.leftTop{
  background: #d0121b;
  color:#fff;
  width: 15%;
  padding: 10px;
}
.right-top{
  width: 85%;
  
  background:#2c4198;
  color:#fff;
}
.right-top i{
  font-size: 16px;
  padding: 5px;
}
.top-title{
  height: 41.5px;
  display:flex;
  justify-content:space-between;
  align-items: center;
}
.changgui{
  padding: 10px;
  font-size: 12px;
}
.shou{
  /* width: 100px; */
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.shou span{
  font-size: 30px;
}
.shou .ye{
  font-size:16px;
}
.yewu{
  padding: 20px 10px 10px 0;
  font-size: 12px;
}
.left{
  height: 500px;
  width: 16.5%;
  background: #fff;
  /* padding-left: 18px; */
}
.heig{
  height: 0;
  overflow: hidden;
}
.cont{
  display: flex;
  justify-content: space-between;
}
.right{
  width: 85%;
  background:#f5f5f5;
  position: relative;
}
.rtop{
  
  position:absolute;
  left:10px;
  top:5px;
}
.right-con{
  margin:50px 10px 0 ;
  background:#fff;
  border-radius:8px;
  height: 600px;
}
.rt{
  padding-bottom:30px;
  display:flex;
  justify-content: space-around;
  border-bottom:1px solid #ddd;
}
.rightTop,.rightTop2,.rightTop3{
  width:300px;
  height: 55px;
  padding-top: 10px;
  padding-right:10px;
  position:relative;
  /* border:1px solid #000; */
}
.one,.two,.three{
  display: block;
  font-size: 50px;
  margin-right: 150px;
}
.xm,.dr,.jy{
  position:absolute;
  top:17px;
  left:108px;
  font-size:14px;
  font-weight:600;
}
.mc{
  position:absolute;
  bottom:10px;
  right:72px;
  font-size:10px;
}
.pl{
  position:absolute;
  bottom:10px;
  right:82px;
  font-size:10px;
}
.jc{
  position:absolute;
  bottom:10px;
  right:105px;
  font-size:10px;
}
.xian::before{
  position:absolute;
  right:-40px;
  top:30px;
  color:#ddd;
}
.active{
  color:#d0121b;
}
.right-content{
  position:absolute;
  top:170px;
  left:80px;
}
.task{
  width: 200px;
  /* border:1px solid #000; */
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
