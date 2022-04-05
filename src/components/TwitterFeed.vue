<template>
    <h1>Twitter Feed</h1>
    <n-space horizontal>
        <n-input
            v-model:value="tweetText"
            type="textarea"
            placeholder="Type max 140 characters..."
        />
        <n-button strong secondary @click="postTweet">Tweet</n-button>
    </n-space>
    <div v-for="tweet in tweets" :key='tweet.id'>
        <n-card :title="tweet.timestamp" closable @close="deleteTweet(tweet.id)">
            {{ tweet.tweetText }}
        </n-card>
    </div>
</template>

<script>
import { NSpace, NInput, NButton, NCard } from 'naive-ui'

export default {
  name: 'TwitterFeed',
  components: {
      NSpace,
      NInput,
      NButton,
      NCard
  },
  data() {
      return {
          tweetText: "",
          nextTweetID: 0,
          tweets: []
      }
  },
  methods: {
      postTweet() {
          this.tweets.push({
              id: this.nextTweetID,
              tweetText: this.tweetText,
              timestamp: this.getTimestamp()
          });
          this.nextTweetID++;
      },
      deleteTweet(id) {
          this.tweets = this.tweets.filter(
              item => item.id !== id
          );
      },
      getTimestamp() {
          let today = new Date();
          let date = (today.getMonth() + 1) + "/" + today.getDate() + "/" + today.getFullYear();
          let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
          return date + " " + time;
      }
  }
}
</script>

<style lang="css" scoped>

</style>