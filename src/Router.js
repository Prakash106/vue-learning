import Home from './Home.vue';
import User from './components/User.vue';
import Post from './components/Post.vue';
import Friends from './components/Friends.vue';
import UserStart from './components/UserStart.vue';
import UserEdit from './components/UserEdit.vue';
import Header from './layouts/header.vue';

export const routes = [
      {
            path: '/',
            name: 'Home',
            components: {
                  default: Home,
                  'header-top': Header
            }
      },
      {
            path: '/friends',
            name: 'Friends',
            components: {
                  default: Friends,
                  'header-bottom': Header,
            }

      },
      {
            path: '/post',
            component: Post
      },
      {
            path: '/user',
            component: User,
            children: [
                  {
                        path: '' ,
                        component: UserStart
                  },
                  {
                        path: ':id/edit',
                        component: UserEdit,
                        name: 'userEdit'
                  }
            ]
      }
];