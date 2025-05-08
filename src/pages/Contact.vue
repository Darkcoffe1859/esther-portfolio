<template>
    <v-container class="contact-container" fluid>
      <v-row>
        <!-- Left Section -->
        <v-col cols="12" md="6" class="contact-left">
          <h1 class="text-h4 font-weight-bold">Get in Touch</h1>
          <h2 class="text-subtitle-1 mb-4">I’d love to hear from you!</h2>
          <p class="mb-6">
            Whether you have a question, want to collaborate, or just want to say hi — feel free to reach out.
            I’ll do my best to get back to you as soon as possible.
          </p>
  
          <div class="contact-info">
            <p><strong>Email:</strong> estherebebe96@gmail.com</p>
            <p><strong>Phone:</strong> +2348101057862</p>
            <p><strong>Location:</strong> Abuja, Nigeria</p>
          </div>
        </v-col>
  
        <!-- Right Section: Form -->
        <v-col cols="12" md="6" class="contact-right">
          <v-form @submit.prevent="submitForm">
            <v-text-field
              label="Name"
              v-model="form.name"
              outlined
              required
              class="mb-4"
            />
  
            <v-text-field
              label="Email"
              v-model="form.email"
              outlined
              required
              type="email"
              class="mb-4"
            />
  
            <v-textarea
              label="Message"
              v-model="form.message"
              outlined
              rows="5"
              required
              class="mb-4"
            />
  
            <v-btn color="#1B5E20" type="submit" class="contact-btn" rounded>
              Send Message
            </v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    name: "Contact",
    data() {
      return {
        form: {
          name: "",
          email: "",
          message: ""
        }
      };
    },
    methods: {
      submitForm() {
        // You can replace this with actual backend or email service logic
        console.log("Form submitted:", this.form);
        alert("Message sent successfully!");
        this.form.name = "";
        this.form.email = "";
        this.form.message = "";
      }
    }
  };
  </script>
  
  <style scoped>
  .contact-container {
    padding-top: 40px;
    padding-bottom: 40px;
  }
  
  .contact-info p {
    margin-bottom: 8px;
  }
  </style>
  