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
          <van-grid-item v-for="(item,key) in this.videos" :key="key" >
            <div @click="showVideo(item)">
            <img style="width: 100%" :src="item.image" />
            {{ item.title }}
            </div>
          </van-grid-item>
        </van-grid>
      </van-col>
    </van-row>
    <van-dialog
      v-if="currentVideo"
      v-model="currentVideo"
      :title="currentVideo.title"
      show-cancel-button
    >
      <img :src="currentVideo.image">
      <div v-html="currentVideo.video"></div>
    </van-dialog>
  </div>
</template>

<script>
import CONST from "../../../config/const";
import API from "../../../api/91"
import request from "../../../utils/request"
import { Dialog } from 'vant';

import { freemem } from 'os';
export default {
  components: {
    [Dialog.Component.name]: Dialog.Component
  },
  data() {
    return {
      param: {
        catalog: "",
        viewType: "",
        m: "",
        page: 1 
      },
      CATALOGS: CONST.API_CATALOG,
      videos: [],
      currentVideo: null
    };
  },
  mounted(){
    this.switchCatalog()
  },
  methods: {
    switchCatalog() {

      API.getList(this.param).then(res => {
        let html = document.createElement('html');
        html.innerHTML = res.data;
        let videobox = html.querySelectorAll('#videobox .listchannel')
        let videos = []
        videobox.forEach(element => {
          let item = {},
          link = element.querySelector('a').getAttribute('href'),
          image = element.querySelector('a img')
          item = {
            link,
            image: 'https://pics0.baidu.com/feed/8b13632762d0f703be069ff64bab2d382697c53e.jpeg?token=3faac39f0fae16fa290e0b623cf87167&s=8DE24C829C0616431625651103009092', //image.getAttribute('src'),
            title: 1111 // image.getAttribute('title')
          }
          videos.push(item)
        });
        this.videos = videos
        html = null
      })
    },
    showVideo(item) {
      request(item.link).then(res => {
        console.log(res.data)
        let fragment = document.createDocumentFragment()
        fragment.append(document.createElement('html'));
        fragment.firstChild.innerHTML = res.data;
        let title = fragment.querySelector('title').innerHTML
        let video = fragment.querySelector('#vid').outerHTML
        this.currentVideo = {
          title,
          video
        }
        console.log(this.currentVideo)
        fragment = null
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