<script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import axios from 'axios'

  const router = useRouter()

  const name = ref('')
  const email = ref('')
  const password = ref('')
  const phone = ref('')

  const goToLoginPage = () => {
    router.push('/login')
  }

  const handleSubmit = async () => {
    try {
        const response = await axios.post('http://127.0.0.1:3000/users', {
            user: {
                name: name.value,
                email: email.value,
                password: password.value,
                phone: phone.value,
                user_type: 'basic', 
            },
            }, {
                headers: {
                    'Content-Type': 'application/json',  // Defina o header explicitamente
                }
            })
        
        if (response.status === 201) {
        router.push('/login')
        }
    } catch (error) {
        console.error('Erro ao criar usuário:', error.response || error)
    }
    }

</script>

<template>
  <div class="centered-container">
    <a-card :bordered="false" class="login-card">
      <a-typography-text :level="2" class="title">Crie sua conta</a-typography-text>

      <div class="form-div">
        <a-form layout="vertical">
          <a-form-item class="label-text" label="Nome Completo">
            <a-input v-model="name" placeholder="Insira seu Nome" />
          </a-form-item>

          <a-form-item class="label-text" label="Email">
            <a-input v-model="email" placeholder="Insira seu Email" />
          </a-form-item>

          <a-form-item label="Senha">
            <a-input-password v-model="password" placeholder="Insira sua senha" />
          </a-form-item>

          <a-form-item class="label-text" label="Telefone">
            <a-input v-model="phone" placeholder="(00) 00000-0000" />
          </a-form-item>

          <a-form-item class="login-button-form">
            <a-button class="create-button" type="primary" @click="handleSubmit">Criar sua conta</a-button>
          </a-form-item>
        </a-form>
      </div>

      <div class="create-button-div">
        <a-typography-text :level="2" class="new-user-title">Já tem conta?</a-typography-text>
        <a-button class="login-button" type="primary" @click="goToLoginPage">Faça Login</a-button>
      </div>
    </a-card>
  </div>
</template>

<style scoped>
  .centered-container {
    background-color: #D9D9D9;
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 96px);
  }

  .title {
    display: flex;
    justify-content: center;
    font-size: 25px;
    color: white;
    margin-bottom: 30px;
  }

  .form-div {
    width: 80%;
    margin: auto;
  }

  label {
    color: white !important;
    font-size: 15px !important;
  }

  .login-card {
    width: 50%;
    margin: auto;
    background-color: #287D9C;
    color: white;
    max-width: 600px;
  }

  .login-button-form {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }

  .login-button {
    width: 120px;
    background-color: #50C878;
  }

  .login-button:hover {
    background-color: #48B474 !important;
    transform: scale(1.05);
  }

  .new-user-title {
    font-size: 20px;
    color: white;
  }

  .create-button {
    width: 150px;
    background-color: #50C878;
  }

  .create-button-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 45px;
  }

  .create-button:hover {
    background-color: #48B474 !important;
    transform: scale(1.05);
  }
</style>
