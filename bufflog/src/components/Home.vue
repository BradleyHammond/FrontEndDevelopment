<template>
    <div class = "blog-feed">
        <input type = "button" value = "Add Post" @click="clicking()" />
        <div class = "blog post" v-for="blogPost in blogFeed" :key="blogPost.id">
            <div class="blog-title">{{ blogPost.title }}</div>
            <div class="blog-date">{{ blogPost.date }}</div>
            <div class="blog-author">{{ blogPost.author }}</div>
            <div class="blog-body">{{ blogPost.body }}</div>
        </div>
    </div>
</template>

<script>
import blogPost from "@/blogpost.js"
import database from "@/database.js"

export default {
    data () {
        return {
            database: database
        }
    },
    methods: {
        clicking() {
            database.Posts.push(new blogPost(1, "Test", "Brad Hammond", "October 10th, 2018", "Test Body"))
        }
    }
}
</script>

