<template>
  <div class="list-menu">
    <template>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="第一季" name="first">
          <h5>简介</h5>
          <p class="paragraph">
            《非正式会谈》第一季从2015年4月开播，共播出23期节目。
          </p>
          <p class="paragraph">
            《非正式会谈》前四期节目主席团构成：会长刘仪伟、副会长袁成杰、书记官陈超、提案代表马薇薇。在他们的带领下，节目收获了满满好评。刘仪伟会长和袁成杰副会长由于档期原因，暂别节目录制。
          </p>
          <p class="paragraph">
            从第五期开始，主席团进行了大洗牌：会长大左、副会长马薇薇、秘书长杨迪、书记官陈超。
          </p>
          <h5>节目单</h5>
          <template>
            <el-table
              :stripe="true"
              :data="tableData"
              border
              style="width: 100%;">
              <el-table-column
                prop="date"
                label="播出日期"
                width="180">
              </el-table-column>
              <el-table-column
                prop="qishu"
                label="期数"
                width="180">
              </el-table-column>
              <el-table-column
                prop="discuss"
                label="全球文化相对论">
              </el-table-column>
              <el-table-column
                prop="theme"
                label="提案主题">
              </el-table-column>
            </el-table>
          </template>
          <h5>会谈主持</h5>
          <p>
            <img src="https://bkimg.cdn.bcebos.com/pic/0e2442a7d933c8957565ed80d71373f082020035?x-bce-process=image/watermark,g_7,image_d2F0ZXIvYmFpa2U5Mg==,xp_5,yp_5" alt="" hspace="5" vspace="5" align="right" height="150px">
            <p class="paragraph">前四期：刘仪伟、袁成杰、陈超、马薇薇</p>
            <p class="paragraph">第五期至第九期：大左、马薇薇、杨迪、陈超</p>
            <p class="paragraph">第十期至第十一期：大左、马薇薇、陈超、黄艺馨</p>
            <p class="paragraph">第十二期至二十三期：大左、马薇薇、杨迪、陈超</p>
          </p>
          <h5>各国成员</h5>
          <template>
            <el-table
              :data="memberData"
              border
              style="width: 100%">
              <el-table-column
                prop="guoji1"
                label="国籍">
              </el-table-column>
              <el-table-column
                prop="member1"
                label="成员">
              </el-table-column>
              <el-table-column
                prop="guoji2"
                label="国籍">
              </el-table-column>
              <el-table-column
                prop="member2"
                label="成员"
                >
              </el-table-column>
            </el-table>
          </template>
          <h5>一日代表</h5>
          <ul>
            <li>2015-05-08 第三期：蓝子龙【西班牙】</li>
            <li>2015-05-22 第五期：田原皓【英国/自此常驻】、椰果【乌克兰】</li>
            <li>2015-05-29 第六期：范伯仁【加拿大】</li>
            <li>2015-06-19 第八期：潘天楷【德国/回归】</li>
            <li>2015-07-03 第十期：小白【澳大利亚】、马丁【美国】</li>
            <li>2015-07-10 第十一期：龙小龙【美国】</li>
            <li>2015-07-31 第十四期：罗斯文【新西兰】</li>
            <li>2015-08-07 第十五期：搂大卫【西班牙】、安东尼【意大利】</li>
            <li>2015-08-14 第十六期：蓝子龙【西班牙】</li>
            <li>2015-09-11 第十九期：卷弗【俄罗斯/常驻】、杰拉德【西班牙】</li>
            <li>2015-09-18 第二十期：大卫【喀麦隆】</li>
            <li>2015-09-25 第二十一期:罗斯文【新西兰】</li>
            <li>2015-10-02 第二十二期:周晓龙【埃及】</li>
          </ul>
          <h5>提案嘉宾</h5>
          <ul>
            <li>2015-05-01 第二期：裘继戎</li>
            <li>2015-05-15 第四期：好妹妹乐队</li>
            <li>2015-06-26 第九期：徐凯文</li>
            <li>2015-07-17 第十二期：肖骁</li>
            <li>2015-08-07 第十五期：龙笑</li>
          </ul>
        </el-tab-pane>
        <el-tab-pane label="第二季" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="第三季" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="第3.5季" name="fourth">定时任务补偿</el-tab-pane>
        <el-tab-pane label="第四季" name="forth">配置管理</el-tab-pane>
        <el-tab-pane label="第五季" name="fifth">角色管理</el-tab-pane>
        <el-tab-pane label="第六季" name="six">配置管理</el-tab-pane>
      </el-tabs>
    </template>
  </div>
</template>

<script>
  export default{
    name:"ListMenu",
    data(){
      return{
        activeName: 'first',
        tableData: [
          {
          date: '2015-04-24',
          qishu: '第一期',
          discuss: '女神、男女关系',
          theme:"全球男女关系大讨论"
          },
          {
          date: '2015-05-01',
          qishu: '第二期',
          discuss: '汉字、孝顺',
          theme:"论孝道中外才俊针锋相对"
          },
          {
          date: '2015-05-08',
          qishu: '第三期',
          discuss: '发明、创业',
          theme:"各国帅哥学霸“炫耀”本国发明引争辩"
          },
          {
          date: '2015-05-15',
          qishu: '第四期',
          discuss: '偏见、北漂',
          theme:"各国嘉宾分享北漂笑与泪 世界各国偏见大吐槽"
          },
          {
          date: '2015-05-22',
          qishu: '第五期',
          discuss: '交通、女汉子',
          theme:"老外吐槽女汉子横行霸道，韩国交单身税虐死单身狗"
          },
          {
          date: '2015-05-29',
          qishu: '第六期',
          discuss: '玩具、朋友',
          theme:"日本制作大量游戏自己小孩不让玩"
          },
          {
          date: '2015-06-12',
          qishu: '第七期',
          discuss: '世界纪录、婚姻',
          theme:"华波波喝奶破世界纪录，爆笑回应称多亏马薇薇"
          },
          {
          date: '2015-06-19',
          qishu: '第八期',
          discuss: '神秘事件、谎言',
          theme:"各国谎言大起底，左右爆笑扮蛇精"
          },
          {
          date: '2015-06-26',
          qishu: '第九期',
          discuss: '酒、压力',
          theme:"杨迪马薇薇演绎夫妻，IT10讲述减压秘诀"
          },
          {
          date: '2015-07-03',
          qishu: '第十期',
          discuss: '礼仪、消费',
          theme:"男女消费观大论战，马薇薇华波波扮演东北情侣"
          },
          {
          date: '2015-07-10',
          qishu: '第十一期',
          discuss: '法律、自拍',
          theme:"脑洞发明折服嘉宾，各国自拍“姿势”全揭秘"
          },
          {
          date: '2015-07-17',
          qishu: '第十二期',
          discuss: '舞蹈、青春',
          theme:"各国帅哥分享青春梦想，男神版青春修炼手册"
          },
          {
          date: '2015-07-24',
          qishu: '第十三期',
          discuss: '智商、奶爸',
          theme:"各国帅哥讲述和妈妈之间的故事"
          },
        ],
        memberData:[
          {
            guoji1: '英国',
            member1: '田原皓',
            guoji2: '埃及',
            member2: '穆小龙',
          }, {
            guoji1: '美国',
            member1: '左右',
            guoji2: '德国',
            member2: '潘天楷',
          },{
            guoji1: '日本',
            member1: '浅井悠佑（YOYO）',
            guoji2: '阿根廷',
            member2: '功必扬',
          }, {
            guoji1: '韩国',
            member1: '金韩一',
            guoji2: '俄罗斯/塔吉克斯坦',
            member2: '阿克毛',
          },{
            guoji1: '伊朗',
            member1: '华波波',
            guoji2: '俄罗斯',
            member2: '卷弗',
          },{
            guoji1: '法国',
            member1: '杜波',
            guoji2: '意大利',
            member2: '朱赛',
          }
        ]
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>

<style scoped="scoped">
  .list-menu{
    width: 100%;
    box-sizing: border-box;
    padding-right: 200px;
    padding-bottom: 70px;
  }
  .paragraph{
    text-indent: 2em;
    line-height: 24px;
    font-size: 14px;
  }
  ul>li{
    line-height: 30px;
    font-size: 13px;
  }
</style>
