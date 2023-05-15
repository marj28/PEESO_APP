
<template>
    <div>
    <v-dialog v-model="dialogforview" max-width="200px" >

<h1>THIS IS Dialog for view</h1>
</v-dialog> 

<h1>
  {{item.title}}
</h1>

<h1>
  {{item.post_meta.salary}}
</h1>

</div>
</template>

<script>

export default {
    name: 'App',
  
    components: {
  
    },
  
    data () {
      return {
        dialogforview:false,

      
      }
  
    }
    
  
      };
  


</script>
  