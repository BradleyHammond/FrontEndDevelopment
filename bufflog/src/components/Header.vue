<template>
    <div id = "header">
        <span v-html="createPost" id="create-post-link"></span>
        <span v-html="contactRequests" id="contact-request-link"></span>
        <input type="button" v-model="msg" @click="clicking()" />
    </div>
</template>

<script>
    export default{
    data() {
        return{
            msg: "Login",
            createPost: '',
            contactrequests: ''
        };
    },
    methods: {
        clicking(){
            if (this.msg == "Login"){
                this.msg = "Sign Out"
                this.createPost = '<a href="#">Create Post</a>';
            } else{
            this.msg = "Login";
            this.createPost = '';
            this.contactrequests = '';
            }
        }
    }

}