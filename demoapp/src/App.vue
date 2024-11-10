<template>
  <!-- MENU -->
  <MenuComponent />

  <router-view/>

  <!-- Footer -->
  <FooterComponent />

</template>

<script>

  import MenuComponent from '@/components/MenuComponent.vue'
  import FooterComponent from '@/components/FooterComponent.vue'

  export default {
    components: {
      MenuComponent,
      FooterComponent
    }
  }
</script>
