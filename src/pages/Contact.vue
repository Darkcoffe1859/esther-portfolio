<template>
  <v-container class="contact-container" fluid>
    <v-row>
      <!-- Left Section -->
      <v-col cols="12" md="6" class="contact-left">
        <h1 class="text-h4 font-weight-bold">Get in Touch</h1>
        <h2 class="text-subtitle-1 mb-4">I’d love to hear from you!</h2>
        <p class="mb-6">
          Whether you have a question, want to collaborate, or just want to say  hi — <br />feel free to reach out.
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
        <!-- Use HTML form directly -->
        <form
          action="https://formspree.io/f/xkgrbyde"
          method="POST"
        >
          <v-text-field
            label="Name"
            name="name"
            v-model="form.name"
            outlined
            required
            class="mb-4"
          />

          <v-text-field
            label="Email"
            name="email"
            v-model="form.email"
            outlined
            required
            type="email"
            class="mb-4"
          />

          <v-textarea
            label="Message"
            name="message"
            v-model="form.message"
            outlined
            rows="5"
            required
            class="mb-4"
          />

          <!-- Optional redirect after submission -->
          <!-- <input type="hidden" name="_redirect" value="https://yourdomain.com/thank-you" /> -->

          <v-btn color="#1B5E20" type="submit" class="contact-btn" rounded>
            Send Message
          </v-btn>
        </form>
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
