<template>
    <v-container class="py-10 px-6" style="background-color: #d7f7d5">
      <v-row>
        <v-col cols="12">
          <h2 class="text-h5 font-weight-bold mb-6">Professional Experience</h2>
  
          <v-card
            v-for="(exp, index) in experiences"
            :key="index"
            class="mb-6"
            elevation="2"
            style="border-radius: 12px; box-shadow: 0 4px 12px rgba(78, 156, 250, 0.1)"
          >
            <v-card-text>
              <h3 class="text-subtitle-1 font-weight-semibold" style="color: #274C77">
                {{ exp.title }}
              </h3>
              <p class="text-body-2 text-grey">
                {{ exp.company }}
                <span v-if="exp.location"> — {{ exp.location }}</span><br />
                <span style="color: grey">{{ exp.date }}</span>
              </p>
  
              <v-divider class="my-4"></v-divider>
  
              <v-list dense>
                <v-list-item
                  v-for="(item, i) in exp.responsibilities"
                  :key="i"
                  class="px-0"
                >
                  <v-list-item-icon>
                    <v-icon color="primary">mdi-chevron-right</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>{{ item }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    name: "Experience",
    data() {
      return {
        experiences: [
          {
            title: "Data Analyst Intern (Remote)",
            company: "Evergreen Digital Technology Solution Academy",
            location: "",
            date: "Dec 1, 2023 – Present",
            responsibilities: [
              "Gathered relevant data from multiple sources.",
              "Cleaned and prepared data for analysis.",
              "Performed statistical analysis to extract insights.",
              "Created interactive dashboards using Power BI and Excel.",
              "Generated stakeholder reports.",
              "Collaborated with team members and mentors on data-driven projects.",
              "Engaged in continuous learning (Excel, Power BI, SQL).",
            ],
          },
          {
            title: "Data Officer (Consultant)",
            company: "Jhpiego (Johns Hopkins University Affiliate)",
            location: "Bauchi State",
            date: "Mar 20 – Apr 30, 2024",
            responsibilities: [
              "Extracted and validated health facility data using RedCap.",
              "Conducted structured interviews with healthcare staff.",
              "Implemented data quality control processes.",
              "Ensured ethical compliance and secure data storage.",
            ],
          },
          {
            title: "Enumerator",
            company: "TCDI in partnership with WFP",
            location: "Machina & Nguru LGAs, Yobe State",
            date: "Jul 28 – Sep 2024",
            responsibilities: [
              "Collected demographic data and biometric records using the SCOPE system.",
              "Verified and updated beneficiary records.",
              "Trained staff and ensured secure handling of participant data.",
              "Generated monitoring and evaluation reports.",
            ],
          },
          {
            title: "Field Enumerator",
            company: "Data-Lead Africa with Action Against Hunger",
            location: "Monguno, Borno State",
            date: "Sep 5 – Sep 14, 2024",
            responsibilities: [
              "Conducted surveys and KIIs using KoboCollect.",
              "Transcribed FGDs and IDIs with local stakeholders.",
              "Adhered to PSEAH and cultural sensitivity standards.",
              "Submitted daily field reports to the project team lead.",
            ],
          },
          {
            title: "Data Analytics Tutor (Remote)",
            company: "Japa Talent Technology School",
            location: "",
            date: "Nov 8, 2024 – Jan 26, 2025",
            responsibilities: [
              "Delivered live and recorded training in Excel, Power BI, and data analysis.",
              "Created lesson plans and interactive learning materials.",
              "Provided technical support and personalized feedback to students.",
              "Developed a curriculum aligned with industry trends.",
            ],
          },
          {
            title: "Data Entry Officer",
            company: "Preston Associate with NCDC",
            location: "",
            date: "Apr 1 – Nov 30, 2023",
            responsibilities: [
              "Collected quantitative and qualitative health data using SurveyCTO.",
              "Participated in FGDs and in-depth interviews.",
              "Compiled reports and maintained digital and paper-based records.",
              "Transcribed interviews and cleaned datasets for analysis.",
            ],
          },
          {
            title: "Assistant Administrative Officer / Data Clerk (NYSC)",
            company: "Delta State Waste Management Board",
            location: "Delta State",
            date: "Apr 2022 – Mar 2023",
            responsibilities: [
              "Provided administrative and data entry support.",
              "Maintained documents, correspondence, and schedules.",
              "Supported office budgeting and coordinated with external stakeholders.",
              "Prepared reports and managed office supplies inventory.",
            ],
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .text-grey {
    color: #6b7280;
  }
  </style>
  