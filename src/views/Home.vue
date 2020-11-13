<template>
  <v-container>
    <v-row class="justify-start">
      <v-card style="width:400px;">
          <v-card-title primary-title>
            Login
          </v-card-title>
        <v-card-text>
          <v-form @submit.prevent="submit">
            <!-- Username -->
            <v-text-field
              name="username"
              label="Username"
              id="username"
              v-model="account.username"
            />

            <!-- Password -->
            <v-text-field
              name="password"
              label="Password"
              id="password"
              v-model="account.password"
              :append-icon="isShowPassword ? 'mdi-cast' : 'mdi-set-merge'"
              @click:append="isShowPassword = !isShowPassword"
              :type="isShowPassword ? 'text' : 'password'"
              counter
            />

            <v-row class="justify-space-between px-3 pt-5">
              <v-btn text @click.prevent="$router.push('/register')" small>Register</v-btn>
              <v-btn type="submit" color="success" small>Login</v-btn>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  mounted() {
    // if (api.isLoggedIn()) {
    //   this.$router.push("/stock");
    // }
  },
  data() {
    return {
      isShowPassword: false,
      account: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    submit() {

    }
  }
};
</script>

<style></style>
