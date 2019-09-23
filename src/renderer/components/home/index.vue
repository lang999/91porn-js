<template>
  <div>
    <van-row gutter="20">
    <van-col span="3">
      <van-sidebar v-model="param.catalog" @change="switchCatalog">
        <van-sidebar-item v-for="(item,key) in CATALOGS" :key="key" :title="item.value" />
      </van-sidebar>
    </van-col>
    <van-col span="19">
      <van-grid :column-num="8" v-if="videos.length > 0">
        <van-grid-item v-for="(item,key) in this.videos" :key="key">
          <img style="width: 100%" :src="item.image" />
          {{ item.title }}
        </van-grid-item>
      </van-grid>
    </van-col>
    </van-row>
  </div>
</template>

<script>
import CONST from "../../../config/const";
import API from "../../../api/91"
export default {
  data() {
    return {
      param: {
        catalog: "",
        viewType: "",
        m: "",
        page: 1 
      },
      CATALOGS: CONST.API_CATALOG,
      videos: []
    };
  },
  mounted(){
    this.switchCatalog()
  },
  methods: {
    switchCatalog() {

      API.getList(this.param).then(res => {
        let html = document.createElement('html');
        console.log( res.data)
        html.innerHTML = res.data;
        let videobox = html.querySelectorAll('#videobox .listchannel')
        let videos = []
        videobox.forEach(element => {
          let item = {},
          link = element.querySelector('a').getAttribute('href'),
          image = element.querySelector('a img')
          item = {
            link,
            image: image.getAttribute('src'),
            title: image.getAttribute('title')
          }
          videos.push(item)
        });
        this.videos = videos
        html = null
      })
    }
  }
};
</script>

<style scoped>
.van-sidebar{
  width: 130px;
}
</style>