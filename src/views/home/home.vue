<template>
  <div id="app">
    <div>
      <div class="top">
        <h4 class="leftTop"><i class="iconfont icon-yun yun"></i>灵活用工服务平台</h4>
        <div class="right-top">
          <div class="top-title">
            <div>
              <i class="iconfont icon-gengduo"></i>
              <i class="iconfont icon-shebeisaomiao"></i>
            </div>
            <div>
              <span>中服云(北京)文化发展有限公司</span>
              <i class="iconfont icon-shezhi"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="cont">
        <!-- 左边 -->
        <div class="left">
          <p class="changgui">常规操作</p>
          <p class="shou">
            <span class="iconfont icon-shouye- syIcon"></span>
            <span class="ye">首页</span>
          </p>
          <p class="yewu">业务管理</p>
          <ul>
            <li v-for="item in list" :key="item.id">
              <h4 @click="changeIndex(item.id)"><i class="iconfont icon-zijianxiangmu"></i>{{ item.title }}</h4>
              <dl :class="{'heig':showIndex === item.id?false:true}">
                <dd v-for="list in item.list" :key="list.id">
                  <a href="#/datch">{{ list.name }}</a>
                  <!-- <router-link to="/">{{ list.name }}</router-link> -->
                </dd>
              </dl>
            </li>
          </ul>
        </div>
        <!-- 右边 -->
        <div class="right">
          <div class="rtop">
            <i class="iconfont icon-zijianxiangmu">/</i>
            <span>项目任务/</span>
            <span>批量新建订单</span>
          </div>
          <div class="right-con">
            <div class="rt">
              <div class="rightTop active">
                <h1 class="one">01</h1>
                <p class="xm">项目信息</p>
                <p class="mc">项目名称、类型、预算等</p>
                <i class="iconfont icon-gengduo-xian xian"></i>
              </div>
              <div class="rightTop2">
                <h1 class="two">02</h1>
                <p class="dr">人员导入</p>
                <p class="pl">批量导入大量人员数据</p>
                <i class="iconfont icon-gengduo-xian xian"></i>
              </div>
              <div class="rightTop3">
                <h1 class="three">03</h1>
                <p class="jy">数据校验</p>
                <p class="jc">检查数据是否有误</p>
              </div>
            </div>
          </div>
          <div class="right-content">
            <div>
              任务类型
              <select name="" id="">
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import icofont from '@/src/font_4220843_quccjoaw46/iconfont.css';

export default {
  name: 'App',
  data () {
    return {
      showIndex:null,
      list: [
        {id:1,title:'项目任务',icon:'',list:[
          {id:1,name:'批量新建订单','router':'/AboutView'},
          {id:2,name:'项目列表','router':'/projectNew'},
          {id:3,name:'任务派单','router':'/projectNew'},
          {id:4,name:'订单列表','router':'/projectNew'},
        ]},
        {id:2,title:'资金发票'},
        {id:3,title:'企业管理'},
      ]
    }
  },
  methods: {
    changeIndex (id) {
      if(this.showIndex == id){
        return this.showIndex = null;
      }
      this.showIndex = id;
    }
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
a{text-decoration: none;color:#000}
.yun{
  padding-right: 5px;
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
ul li{
  padding: 20px;
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
</style>
