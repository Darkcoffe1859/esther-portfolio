<template>
  <v-container class="about-container" fluid>
    <v-row class="align-center">
      <!-- Left Column -->
      <v-col cols="12" md="7" class="about-left">
        <h1 class="text-h4 font-weight-bold mb-3">Hi, I’m Ebebe Esther Adaeze</h1>
        <h2 class="text-subtitle-1 font-italic mb-4 text-muted">Data Analyst | Biochemistry Graduate</h2>
        <p class="mb-5">
          I am a graduate of Biochemistry, experienced in data collection and facilitation in emergency response, humanitarian intervention, and developmental interventions.
          Skilled in data analysis, reporting, data validation, and capacity building. Eager to find a position in your organization. I am trustworthy, reliable, and a team player who believes
          in synergy, success, friendliness, strength, and accomplishment in all of life’s endeavors.
        </p>

        <blockquote class="mt-4 mb-4 font-italic text-center">
          “Turning raw data into impactful insights.”
        </blockquote>

        <h3 class="text-h6 mt-6 font-weight-bold">Skills:</h3>
        <v-list dense class="skills-list">
          <v-list-item v-for="(skill, i) in skills" :key="i" class="pl-0">
            <v-list-item-content>{{ skill }}</v-list-item-content>
          </v-list-item>
        </v-list>

        <h3 class="text-h6 mt-6 font-weight-bold">Certifications:</h3>
        <v-list dense class="cert-list">
          <v-list-item v-for="(cert, i) in certifications" :key="i" class="pl-0">
            <v-list-item-content>{{ cert }}</v-list-item-content>
          </v-list-item>
        </v-list>

        <a :href="resumeLink" target="_blank" rel="noopener" download>
          <v-btn color="primary" class="mt-6 resume-btn" rounded elevation="2">
            <v-icon left>mdi-download</v-icon> Download Resume
          </v-btn>
        </a>
      </v-col>

      <!-- Right Column: Profile Image -->
      <v-col cols="12" md="5" class="d-flex justify-center align-center">
        <v-img
          :src="profileImage"
          alt="Profile"
          width="320"
          height="320"
          class="rounded-circle shadow-4 elevation-10"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import profileImage from '@/assets/other.jpeg';

export default {
  name: "About",
  data() {
    return {
      profileImage,
      resumeLink: "https://drive.google.com/file/d/1LdN-GN2VcItZ4jAXYVhTxQbb4mK4KERO/view?usp=drivesdk",
      skills: [
        "Data Analysis (Excel, Power BI, SQL, Python)",
        "Report Writing & Data Visualization",
        "Field Data Collection",
        "Team Collaboration"
      ],
      certifications: [
        "Google Data Analytics Professional Certificate",
        "Humanitarian Response Training"
      ]
    };
  }
};
</script>

<style scoped>
.about-container {
  padding-top: 40px;
  padding-bottom: 40px;
  font-family: 'Roboto', sans-serif;
}

.about-left h1,
.about-left h2 {
  color: #333;
}

.skills-list, .cert-list {
  margin-top: 15px;
}

.skills-list .v-list-item,
.cert-list .v-list-item {
  font-size: 1.1rem;
}

.resume-btn {
  font-size: 1.1rem;
  text-transform: none;
  letter-spacing: 1px;
  transition: background-color 0.3s ease-in-out;
}

.resume-btn:hover {
  background-color: #1565c0;
}

blockquote {
  border-left: 4px solid #1E88E5;
  padding-left: 20px;
  color: #555;
  font-style: italic;
}

.v-img {
  transition: transform 0.3s ease-in-out;
}

.v-img:hover {
  transform: scale(1.05);
}
</style>
