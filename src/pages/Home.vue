<template>
  <v-container class="home-container" fluid>
    <v-row class="fill-height no-gutters">
      <!-- Left side: Text -->
      <v-col
        cols="12"
        md="6"
        class="d-flex flex-column justify-center align-start px-6 px-md-12"
      >
        <div>
          <h1 class="text-h4 text-md-h2 font-weight-bold mb-4">
            Hi, I'm Ebebe Esther Adaeze 👋
          </h1>
          <p class="text-body-1 mb-6" style="line-height: 1.8;">
            I’m a passionate <strong>Data Analyst</strong> transforming raw data into
            meaningful insights. I specialize in <strong>Excel, SQL, Python</strong>, and
            visualization tools like <strong>Power BI</strong> and <strong>Tableau</strong>.
          </p>

          <router-link to="/about">
            <v-btn color="#1B5E20" rounded class="about-btn" dark>
            More About Me
          </v-btn>
          </router-link>
        </div>
      </v-col>

      <!-- Right side: Image -->
      <v-col
        cols="12"
        md="6"
        class="image-wrapper d-flex justify-center align-center"
      >
        <v-img
          :src="profileImage"
          alt="Profile Image"
          class="image-cover"
          cover
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import profileImage from '../assets/home.jpeg';

export default {
  name: 'Home',
  data() {
    return {
      profileImage
    };
  }
};
</script>

<style scoped>
/* Make sure everything fits exactly within the screen */
.home-container {
  height: 100vh;
  overflow: hidden;
  padding: 0;
}

.v-application {
  overflow: hidden !important; /* Prevent Vuetify app from scrolling */
}

.image-wrapper {
  height: 100%;
}

.image-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.about-btn {
  text-transform: none;
  font-size: 16px;
  padding: 10px 24px;
}
</style>
