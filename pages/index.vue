<template>
  <!-- This is an example component -->
  <div class="h-screen font-sans bg-cover login">
    <div
      class="container flex items-center justify-center flex-1 h-full mx-auto"
    >
      <div class="w-full max-w-lg">
        <div class="leading-loose">
          <form
            class="max-w-sm p-10 m-4 bg-white bg-opacity-25 rounded shadow-xl"
            @submit.prevent="onSubmit()"
          >
            <p class="text-lg font-medium font-bold text-center text-white">
              LOGIN
            </p>
            <div class="">
              <label class="block text-sm text-white" for="email">E-mail</label>
              <input
                id="email"
                v-model="email"
                class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                placeholder="Email"
                required
              >
            </div>
            <div class="mt-2">
              <label class="block text-sm text-white">Contraseña</label>
              <input
                id="password"
                v-model="password"
                class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                placeholder="Contraseña"
                arial-label="password"
                required
              >
            </div>

            <div class="flex items-center justify-between mt-4">
              <button
                class="px-4 py-1 font-light tracking-wider text-white bg-gray-900 rounded hover:bg-gray-800"
                type="submit"
              >
                Entrar
              </button>
              <a
                class="right-0 inline-block text-sm font-bold text-white align-baseline text-500 hover:text-red-400"
                href="#"
              >¿Olvidó su contraseña?</a>
            </div>
            <div class="text-center">
              <a
                class="right-0 inline-block text-sm font-light align-baseline text-500 hover:text-red-400"
              >
                Crear una cuenta
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  auth: 'guest',
  data () {
    return {
      email: 'gpatty',
      password: '123456'
    }
  },
  methods: {
    async onSubmit () {
      let res = await this.$auth.loginWith('laravelSanctum', {
        data: {
          username: this.email,
          password: this.password
        }
      })
      this.$auth.setUser(res.data.payload.user)
      this.$axios.setHeader('Accept', 'application/json')
      
      let us = await this.$axios.get('global/city')
      console.log(us)

    
      /*.then( () => alert("exito"))*/
      /*.catch(() => alert("error"))*/

      this.$router.push({
        path: 'dashboard',
      })
    }
  }
}
</script>
<style>
.login{
    background: url('http://bit.ly/2gPLxZ4');
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
