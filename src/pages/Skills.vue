<template>
  <v-container class="skills-container" max-width="900">
    <v-card elevation="5" class="pa-6 rounded-lg">
      <v-card-title class="text-h4 font-weight-bold mb-4">
        Competencies & Skills
      </v-card-title>

      <v-row>
        <!-- Skill Categories -->
        <v-col v-for="(category, index) in skillCategories" :key="index" cols="12" md="6">
          <v-card elevation="2" class="pa-4 mb-4 rounded-lg hoverable">
            <v-card-title class="text-h6 font-weight-bold">{{ category.name }}</v-card-title>

            <v-list dense>
              <v-list-item v-for="(item, i) in category.skills" :key="i" class="py-2">
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{ item.text }}</v-list-item-title>

                  <!-- If sub-skills are available, display them -->
                  <v-list v-if="item.subSkills" class="ml-4">
                    <v-list-item v-for="(sub, j) in item.subSkills" :key="j" class="py-1">
                      <v-list-item-content>
                        <v-list-item-title>• {{ sub }}</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
      skillCategories: [
        {
          name: 'Soft Skills',
          skills: [
            { text: 'Respect for clients/respondents at all times', icon: 'mdi-account' },
            { text: 'Multilingual: English, Igbo, Hausa, and Pidgin', icon: 'mdi-translate' },
            { text: 'Strong interpersonal and organizational skills', icon: 'mdi-account-group' },
            { text: 'Team player with flexibility', icon: 'mdi-account-tie' },
            { text: 'Excellent oral and written communication', icon: 'mdi-comment' },
          ]
        },
        {
          name: 'Technical Skills',
          skills: [
            { text: 'Analytical thinking and technical report writing', icon: 'mdi-chart-bar' },
            { text: 'Proficient in Microsoft Word, Excel, Outlook, and PowerPoint', icon: 'mdi-microsoft' },
            { text: 'Record keeping and basic report writing', icon: 'mdi-file-document' },
            { text: 'Ability to adapt and work under pressure', icon: 'mdi-clock-alert' },
          ]
        },
        {
          name: 'Data Collection Tools',
          skills: [
            { text: 'SurveyCTO', icon: 'mdi-laptop' },
            { text: 'Kobo Collect', icon: 'mdi-phone' },
            { text: 'RedCap', icon: 'mdi-database' },
            { text: 'ODK', icon: 'mdi-phone' },
            { text: 'SCOPE registration', icon: 'mdi-checkbox-marked-circle' },
            { text: 'CATI (Computer-Assisted Telephone Interviewing)', icon: 'mdi-cellphone-link' },
          ]
        }
      ]
    };
  },
};
</script>

<style scoped>
.skills-container {
  margin-top: 40px;
  margin-bottom: 40px;
}

.v-card-title {
  color: #2c3e50;
}

.v-list-item-title {
  font-weight: 500;
  font-size: 1.1rem;
}

.v-card {
  background-color: #f5f5f5;
}

.v-list-item-icon {
  color: #1e88e5;
}

.hoverable:hover {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.v-icon {
  font-size: 1.3rem;
}

.mb-4 {
  margin-bottom: 20px;
}
</style>
