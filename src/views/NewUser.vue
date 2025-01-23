<script setup>
    import ProductCard from '../components/ProductCard.vue'
    import jblImage from '@/assets/momentaneo/jbl.svg';
    import { useRouter } from 'vue-router'

    const router = useRouter()

    const goToLoginPage = () => {
    router.push('/login') 
  }
</script>

<template>
    <div class="centered-container">

    
      <a-card :bordered="false" class="login-card">
        <a-typography-text :level="2" class="title">Crie sua conta</a-typography-text>

        <div class="form-div">
            <a-form layout="vertical"> 
                <a-form-item class="label-text" label="Nome Completo">
                    <a-input placeholder="Insira seu Nome" />
                </a-form-item>

                <a-form-item class="label-text" label="Email">
                    <a-input placeholder="Insira seu Email" />
                </a-form-item>

                <a-form-item label="Senha">
                    <a-input-password v-model:value="value" placeholder="Insira sua senha" />
                </a-form-item>

                <a-form-item class="label-text" label="Telefone">
                    <a-input placeholder="(00) 00000-0000" />
                </a-form-item>

                <a-form-item class="login-button-form">
                    <a-button class="create-button" type="primary">Criar sua conta</a-button>
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


<style scope>
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