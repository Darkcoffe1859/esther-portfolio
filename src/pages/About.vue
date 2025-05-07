<template>
    <v-container class="about-container" fluid>
      <v-row>
        <v-col cols="12" md="7" class="about-left">
          <h1 class="text-h4 font-weight-bold">Hi, I’m Ebebe Esther Adaeze</h1>
          <h2 class="text-subtitle-1 font-italic mb-4">Data Analyst | Biochemistry Graduate</h2>
          <p>
            I am a graduate of Biochemistry, experienced in data collection and facilitation in emergency response, humanitarian intervention, and developmental interventions.
            Skilled in data analysis, reporting, data validation, and capacity building. Eager to find a position in your organization. I am trustworthy, reliable, and a team player who believes
            in synergy, success, friendliness, strength, and accomplishment in all of life’s endeavors.
          </p>
  
          <blockquote class="mt-4 mb-4 font-italic">
            “Turning raw data into impactful insights.”
          </blockquote>
  
          <h3 class="text-h6 mt-6">Skills:</h3>
          <v-list dense class="skills-list">
            <v-list-item v-for="(skill, i) in skills" :key="i" class="pl-0">
              <v-list-item-content>{{ skill }}</v-list-item-content>
            </v-list-item>
          </v-list>
  
          <h3 class="text-h6 mt-6">Certifications:</h3>
          <v-list dense class="cert-list">
            <v-list-item v-for="(cert, i) in certifications" :key="i" class="pl-0">
              <v-list-item-content>{{ cert }}</v-list-item-content>
            </v-list-item>
          </v-list>
          <a
             :href="resumeLink"
             target="_blank"
             rel="noopener"
             download
             >

             <v-btn color="#1B5E20" class="mt-6 resume-btn" rounded>
            Download Resume
          </v-btn>

             </a>
  
        </v-col>
  
        <v-col cols="12" md="5" class="d-flex justify-center align-center">
          <v-img
            src="@/assets/other.jpeg"
            alt="Profile"
            width="300"
            height="300"
            class="rounded-circle elevation-5"
          />
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    name: "About",
    data() {
      return {
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
  }
  </style>
  