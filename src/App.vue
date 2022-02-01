<template>
  <div class="container">
    <form class="pt-3" @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          class="form-control"
          :class="{ 'is-invalid': $v.email.$error }"
          @blur="$v.email.$touch()"
          v-model="email"
        />
        <div class="invalid-feedback" v-if="!$v.email.required">
          fill the email
        </div>
        <div class="invalid-feedback" v-if="!$v.email.email">
          This should be email
        </div>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          class="form-control"
          :class="{ 'is-invalid': $v.password.$error }"
          @blur="$v.password.$touch()"
          v-model="password"
        />
        <div class="invalid-feedback" v-if="!$v.password.minLength">
          it is not enough number at least should be
          {{ $v.password.$params.minLength.min }}. Now it is
          {{ password.length }}
        </div>
      </div>

      <div class="form-group">
        <label for="confirm">Confirm password</label>
        <input
          type="password"
          id="confirm"
          class="form-control"
          :class="{ 'is-invalid': $v.confirmPassword.$error }"
          @blur="$v.confirmPassword.$touch()"
          v-model="confirmPassword"
        />
        <div class="invalid-feedback" v-if="!$v.confirmPassword.sameAs">
          Password should match
        </div>
      </div>
      <br />
      <button class="btn btn-success" type="submit" :disabled="$v.$invalid">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    onSubmit() {
      console.log("Password", this.password);
      console.log("Email", this.email);
    },
  },
  validations: {
    email: {
      required,
      email,
    },
    password: {
      minLength: minLength(6),
    },
    confirmPassword: {
      sameAs: sameAs("password"),
    },
  },
};
</script>

<style scoped>
</style>>


