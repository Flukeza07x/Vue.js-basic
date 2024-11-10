<template>
<!-- Menu -->
<menu-component/>


  <router-view/>

  <!-- Footer -->
<footer-component/>

</template>
<script>

import MenuComponent from '@/components/MenuComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {

  components: {MenuComponent,
  FooterComponent}

}
</script>


