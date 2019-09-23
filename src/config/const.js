export default {
  //http://v.baidu.com/commonapi/tvplay2level/?filter=true&type=&area=%E9%9F%A9%E5%9B%BD&actor=&start=&complete=&order=hot&pn=1&rating=&prop=&channel=tvplay
  API_BASE: 'http://v.baidu.com/',
  API_LIST: '/commonapi/tvplay2level/?filter=true&type=&area=%E9%9F%A9%E5%9B%BD&actor=&start=&complete=&order=hot&pn=1&rating=&prop=&channel=tvplay',
  API_CATALOG: [{
      catelog: "",
      value: "全部"
    },
    {
      catelog: "rf",
      value: "精华"
    },
    {
      catelog: "hot",
      value: "当前最热"
    },
    {
      catelog: "rp",
      value: "最近得分"
    },
    {
      catelog: "long",
      value: "10分钟以上 "
    },
    {
      catelog: "md",
      value: "本月讨论"
    },
    {
      catelog: "tf",
      value: "本月收藏"
    },
    {
      catelog: "mf",
      value: "收藏最多"
    },
    {
      catelog: "rf",
      value: "最近加精"
    },
    {
      catelog: "top",
      value: "本月最热"
    },
    {
      catelog: "top",
      m: '-1',
      value: "上月最热"
    },
    {
      catelog: "hd",
      value: "高清"
    }
  ]
}