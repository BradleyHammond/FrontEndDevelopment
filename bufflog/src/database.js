import blogPost from "@/blogPost.js"
import PostComment from "./comment";
import ContactRequest from "./contactRequest";
import Tag from '@/tag.js'

export default {
    Posts: [
      new blogPost(1, "Sample post with comments", "lM", "08/02/2018, 2:25:46 PM", 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', [new Tag("fake"), new Tag("sample")], [new PostComment(1, "Sara Farmer", "sarafarmer@dummyemail.com", "Great job!"), new PostComment(2, "Brad Hammond", "bradhammond@dummyemail.com", "Nice blog post!")]),
      new blogPost(2, "SAMPLE POSTS", "Derrick Minor", "10/05/2018, 5:32:84 PM", 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', [new Tag("test")], []),
      new blogPost(3, "Sample post", "Derrick Minor", "10/12/2018, 8:54:00 AM", 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', [], []),
      new blogPost(4, "Sample post ", "Random", "09/02/2018, 1:33:07 PM", 'Lorem ipsum doloiquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', [new Tag("fake"), new Tag("test")], [new PostComment(1, "TS", "abc@email.com", "WOW"), new PostComment(2, "SM ", "123@email.com", "Amazing!") , new PostComment(3, "RS", "test@email.com", "3rd comment!")]),
    ],
    ContactRequests: [new ContactRequest(1, "Teresa Carter", "tacarter@dummyemail.com", "Hi!")],
    User: []
  }