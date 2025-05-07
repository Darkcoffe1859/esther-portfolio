<template>
    <v-container class="skills-container" max-width="800">
      <v-card elevation="3" class="pa-6" rounded="lg">
        <v-card-title class="text-h5 font-weight-bold mb-4">
          Competencies
        </v-card-title>
  
        <v-list dense>
          <v-list-item v-for="(item, index) in skills" :key="index" class="py-1">
            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
  
              <!-- If skill has sub-skills, display them -->
              <v-list v-if="item.subSkills" class="ml-4">
                <v-list-item
                  v-for="(sub, i) in item.subSkills"
                  :key="i"
                  class="py-1"
                >
                  <v-list-item-content>
                    <v-list-item-title>• {{ sub }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'Skills',
    data() {
      return {
        skills: [
          { text: 'Respect for clients/respondents at all times' },
          { text: 'Multilingual: English, Igbo, Hausa, and Pidgin' },
          { text: 'Analytical thinking and technical report writing' },
          { text: 'Facilitation of FGDs and Key Informant Interviews (KIIs)' },
          { text: 'Proficient in Microsoft Word, Excel, Outlook, and PowerPoint' },
          { text: 'Record keeping and basic report writing' },
          { text: 'Ability to adapt and work under pressure' },
          { text: 'Strong interpersonal and organizational skills' },
          { text: 'Team player with flexibility' },
          { text: 'Excellent oral and written communication' },
          { text: 'Expert in community engagement techniques' },
          {
            text: 'Expert in electronic data collection tools:',
            subSkills: [
              'SurveyCTO',
              'Kobo Collect',
              'RedCap',
              'ODK',
              'SCOPE registration',
              'CATI (Computer-Assisted Telephone Interviewing)',
            ],
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .skills-container {
    margin-top: 40px;
    margin-bottom: 40px;
  }
  </style>
  