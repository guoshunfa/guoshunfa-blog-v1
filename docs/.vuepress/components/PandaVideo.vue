<!-- 遗弃，可作为demo进行开发。 -->
<template>
  <div>
    <iframe
      v-if="video_type === 'bilibili'"
      :src="
        '//player.bilibili.com/player.html?' +
        'aid=928620141' +
        '&bvid=' +
        bvid +
        '&cid=277141946' +
        '&page=1' +
        '&as_wide=1' +
        '&high_quality=1' +
        '&danmaku=0'
      "
      scrolling="no"
      border="0"
      frameborder="no"
      framespacing="0"
      allowfullscreen="true"
    >
    </iframe>
    <iframe
      v-else
      :src="src"
      scrolling="no"
      border="0"
      frameborder="no"
      framespacing="0"
      allowfullscreen="true"
    >
    </iframe>
  </div>
</template>

<script>
export default {
  props: {
    video_type: {
      type: String,
      default: "bilibili",
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ["bilibili", "other"].indexOf(value) !== -1;
      },
    },
    // bilibili 视频唯一值
    bvid: {
      type: String,
    },
    // Other 视频唯一值
    src: {
      type: String,
    },
  },
  mounted() {
    if (this.video_type === "bilibili") {
      if ((this.bvid === undefined) | null | "") {
        this.$notify.error({
          title: 'PandaVideo组件配置错误',
          message: 'bilibili视频需配置“bvid”属性，例：<panda-video bvid="BV1Fq4y1Q7A8" video_type="bilibili"></panda-video>',
          offset: 100
        });
      }
    } else {
      if ((this.src === undefined) | null | "") {
          this.$notify.error({
          title: 'PandaVideo组件配置错误',
          message: '普通视频需配置“src”属性，例：<panda-video src="http://file.pandacode.cn:81/video/001.mp4" video_type="other"></panda-video>',
          offset: 100
        });
      }
    }
  },
};
</script>

<!-- <style scoped lang='stylus'> 
<style lang='stylus'>
iframe {
  width: 100%;
  height: 500px;
  max-width: 100%;
  align: center;
  padding: 20px 0;
}
</style>
-->