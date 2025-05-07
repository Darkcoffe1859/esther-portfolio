<!-- src/components/NavBar.vue -->
<template>
  <v-app-bar app color="#1B5E20" dark>
    <v-toolbar-title>My Portfolio</v-toolbar-title>
    <v-spacer />
    <v-btn text to="/">Home</v-btn>
    <v-btn text to="/about">About</v-btn>
    <v-btn text to="/experience">Experience</v-btn>
    <v-btn text to="/skills">Skills</v-btn>
    <v-btn text to="/contact">Contact</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>
