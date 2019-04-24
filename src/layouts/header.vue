<template>
      <nav class="uk-navbar-container" uk-navbar>
            <div class="uk-navbar-left">
                  <ul class="uk-navbar-nav">
                        <router-link to="/" tag="li" active-class="uk-active" exact><a>Home</a></router-link>
                        <router-link to="/user/10" tag="li" active-class="uk-active"><a>User</a></router-link>
                        <router-link to="/post" tag="li" active-class="uk-active"><a>Post</a></router-link>
                        <router-link to="/friends" tag="li" active-class="uk-active"><a>Friends</a></router-link>
                  </ul>
            </div>
      </nav>
</template>

<script>
      export default {
            
      }
</script>
