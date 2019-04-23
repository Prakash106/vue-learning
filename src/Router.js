import Home from './Home.vue';
import User from './components/User.vue';
import Post from './components/Post.vue';
import Friends from './components/Friends.vue';

export const routes = [
      {
            path: '/',
            component: Home
      },
      {
            path: '/friends',
            component: Friends
      },
      {
            path: '/post',
            component: Post
      },
      {
            path: '/user',
            component: User
      }
];