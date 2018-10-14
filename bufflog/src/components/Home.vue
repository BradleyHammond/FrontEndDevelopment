<template>
    <div class="blog-feed">
        <div class="blog-post" v-for="(blogPost, index) in sortedByDatePosts" v-bind:item="blogPost" v-bind:index="index" v-bind:key="blogPost.id">
            <router-link :to="'/view:' + blogPost.id"><h2 class="blog-title">{{ blogPost.title }}</h2></router-link>
<<<<<<< HEAD
            <!-- Add routing to make edit post take user to edit component -->
            <div class="blog-info">
=======
              <div class="blog-info">
>>>>>>> 26e514a731c7c9d1881e29e69e85cc69bc94608e
              <span>Created: {{ blogPost.dateCreated }} |  By: {{ blogPost.author }}  | Comments: {{ blogPost.comments.length }}  |  Tags: <span v-for="tag in blogPost.tags" v-bind:key="tag.id"><router-link :to="'/tag:' + tag.tagAttr"> {{ tag.tagAttr }} </router-link></span></span>&nbsp;&nbsp;&nbsp;
              <span class="post-changes" v-if="database.User.length != 0">
                  <span class="edit-post"><router-link :to="'/edit:' + blogPost.id">Edit Post</router-link></span>&nbsp;&nbsp;&nbsp;
                  <span class="delete-post" v-on:click="database.Posts.splice(index, 1)">Delete Post</span>
              </span>
            </div>
            <p class="blog-body">{{ blogPost.body.substring(0,500)+"..." }}</p>
            <router-link :to="'/view:' + blogPost.id" class="view-more">Read more...</router-link>
        </div>
    </div>
</template>


<script>
  import database from "@/database.js"

  export default {

    data () {
      return {
        database: database
      }
    },
    computed: {
      sortedByDatePosts: function() {
        return this.database.Posts.sort(function(a, b) {
          if(a.dateCreated > b.dateCreated) {
            return -1;
          }
          if (a.dateCreated < b.dateCreated) {
            return 1;
          }
          return 0;
        })
      }
    }
  }
</script>

<<<<<<< HEAD
<style scoped>

</style>
=======

>>>>>>> 26e514a731c7c9d1881e29e69e85cc69bc94608e
