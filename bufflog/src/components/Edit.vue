<template>
<<<<<<< HEAD
    <div class="edit-post">
        <a @click="$router.go(-1)" class="go-back">Go back</a>
        <div v-if="database.User.length > 0">
            <div class="blog-post" v-for="(blogPost, index) in database.Posts" v-bind:item="blogPost" v-bind:index="index" v-bind:key="blogPost.id">
                <div v-if="blogPost.id == blogRouterId" class="content">
                    <h2 class="title">Edit {{ blogPost.title }}</h2>
                    <p>
                        <input type="text" v-model="blogPost.title" id="title" name="title" placeholder="Post title">                 
                        <input type="text" v-model="blogPost.author" id="author" name="author" placeholder="Author name">
                        <input type="text" v-model="blogPost.Tags" id="tags" name="tags" placeholder="Tags">  
                        
                        <textarea v-model="blogPost.body" id="post-content" name="content" placeholder="Write something.." style="height:200px"></textarea>
                        <router-link to="/"><input type="save" value="Save" class="edit-post-button" @click="createPost(); database.Posts.splice(index, 1);"></router-link>
                        <router-link to="/"><input type="button" value="Cancel" class="edit-post-button" @click="signUserOut()"></router-link>
                    </p>
                </div>
            </div>
        </div>
        <div v-else>
            <h2 class="title">Please log in to make changes</h2>
        </div>
    </div>
</template>


<script>
  import database from "@/database.js"

  export default {

    data () {
      return {
        database: database,
        blogRouterId : this.$route.params.id.substr(1)
      }
    }
}
</script>

<style scoped>

</style>
=======
   <div id="footer">
       <h2>Contact</h2>
            <p>
                <label for="name">Name</label>
                <input type="text" v-model="name" id="name" name="name" placeholder="Your name..">
                <label for="email">Email</label>
                <input type="text" v-model="email" id="email" name="email" placeholder="Your email address..">
            </p>
            <p>
                <label for="message">Message</label>
                <textarea id="message" v-model="message" name="message" placeholder="Write something.." style="height:200px"></textarea>
            </p>
            <p>
                <input type="submit" value="Submit" class="view-more" id="contact-form-submit" @click="createContactRequest()" />
            </p>
  </div>
</template>

<script>
import database from "@/database.js"
import ContactRequest from "@/contactRequest.js"

   export default {
   data() {
        return {
            database : database,
            name: '',
            email: '',
            message: ''
        };
    },
    methods: {
        createContactRequest() {
            var lastIndex = database.ContactRequests[database.ContactRequests.length - 1].id;
            lastIndex++;
            database.ContactRequests.push(new ContactRequest(lastIndex, this.name, this.email, this.message));
            this.name = '';
            this.email = '';
            this.message = '';
        }
    }
  }
</script>

>>>>>>> 26e514a731c7c9d1881e29e69e85cc69bc94608e
