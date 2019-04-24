<template>
      <div>
            <h1>User</h1>
            <router-link 
                  :to="{ name:'userEdit', params: {
                        id: '4'
                  }}">Edit User</router-link> 
            <hr>
            <router-view></router-view>
      </div>
</template>

<script>
export default {
      data: function() {
            return {
                  
            }
      }
}
</script>
