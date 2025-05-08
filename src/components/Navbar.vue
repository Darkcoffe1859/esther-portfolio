<!-- src/components/Navbar.vue -->
<template>
  <div>
    <v-app-bar app color="#1B5E20" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer" class="d-md-none">
        <v-icon>mdi-menu</v-icon>
      </v-app-bar-nav-icon>

      <v-toolbar-title>Esther Adaeze Ebebe Portfolio</v-toolbar-title>

      <v-spacer class="d-none d-md-flex" />

      <!-- Nav links for medium+ screens -->
      <div class="d-none d-md-flex">
        <v-btn text to="/">Home</v-btn>
        <v-btn text to="/about">About</v-btn>
        <v-btn text to="/experience">Experience</v-btn>
        <v-btn text to="/skills">Skills</v-btn>
        <v-btn text to="/contact">Contact</v-btn>
      </div>
    </v-app-bar>

    <!-- Drawer for mobile -->
    <v-navigation-drawer
      v-model="drawer"
      temporary
      class="d-md-none"
    >
      <v-list>
        <v-list-item link to="/">
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/about">
          <v-list-item-title>About</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/experience">
          <v-list-item-title>Experience</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/skills">
          <v-list-item-title>Skills</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/contact">
          <v-list-item-title>Contact</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      drawer: false,
    };
  },
};
</script>
