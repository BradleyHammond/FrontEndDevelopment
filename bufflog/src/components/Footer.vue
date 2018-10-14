<template>
   <div id="footer">
       <h2>Contact</h2>
            <p>
                
                <input type="text" v-model="name" id="name" name="name" placeholder="Your name..">
                <br>
                <input type="text" v-model="email" id="email" name="email" placeholder="Your email address..">
                <br>
                <textarea id="message" v-model="message" name="message" placeholder="Your Message .." style="height:75px"></textarea>
        
                <input type="submit" align="left" value="Submit" class="view-more" id="contact-form-submit" @click="createContactRequest()" />
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

<style scoped>

</style>