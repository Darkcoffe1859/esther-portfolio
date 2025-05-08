<template>
  <v-container fluid>
    <v-row class="align-center">
      <!-- Left Column -->
      <v-col cols="12" md="7">
        <h1 style="font-size: 28px; font-weight: bold; margin-bottom: 12px;">Hi, I’m Ebebe Esther Adaeze</h1>
        <h2 style="font-size: 18px; font-style: italic; color: #666; margin-bottom: 16px;">
          Data Analyst | Biochemistry Graduate
        </h2>
        <p style="font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
          I am a graduate of Biochemistry, experienced in data collection and facilitation in emergency response,
          humanitarian intervention, and developmental interventions. Skilled in data analysis, reporting,
          data validation, and capacity building. Eager to find a position in your organization. I am trustworthy,
          reliable, and a team player who believes in synergy, success, friendliness, strength, and accomplishment in all of life’s endeavors.
        </p>

        <blockquote style="border-left: 4px solid #1E88E5; padding-left: 20px; color: #555; font-style: italic; margin: 16px 0;">
          “Turning raw data into impactful insights.”
        </blockquote>

        <h3 style="font-size: 16px; font-weight: bold; margin-top: 32px;">Skills:</h3>
        <v-list dense>
          <v-list-item v-for="(skill, i) in skills" :key="i" class="pl-0">
            <v-list-item-content>{{ skill }}</v-list-item-content>
          </v-list-item>
        </v-list>

        <h3 style="font-size: 16px; font-weight: bold; margin-top: 24px;">Certifications:</h3>
        <v-list dense>
          <v-list-item v-for="(cert, i) in certifications" :key="i" class="pl-0">
            <v-list-item-content>{{ cert }}</v-list-item-content>
          </v-list-item>
        </v-list>

        <a :href="resumeLink" target="_blank" rel="noopener" download>
          <v-btn color="primary" class="mt-6" rounded elevation="2" style="font-size: 16px; text-transform: none;">
            <v-icon left>mdi-download</v-icon> Download Resume
          </v-btn>
        </a>
      </v-col>

      <!-- Right Column: Profile Image (clean, no boxy container) -->
      <v-col cols="12" md="5" class="d-flex justify-center align-center" style="padding: 0;">
        <div
          style="
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            padding: 24px 0;
          "
        >
          <v-img
            :src="profileImage"
            alt="Profile"
            width="800"
            height="600"
            cover
            :style="{
              borderRadius: '100%',
              border: '4px solid #f0f0f0',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
              backgroundColor: '#fff',
              transition: 'transform 0.3s ease-in-out',
              transform: hovering ? 'scale(1.03)' : 'scale(1)'
            }"
            @mouseover="hovering = true"
            @mouseleave="hovering = false"
          />
        </div>
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
      hovering: false,
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
