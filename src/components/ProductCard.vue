<template>
  <div class="product-container">

    <div class="product-image">
      <a-image
        :src="imageSrc"
        alt="Produto"
        width="175px"
        height="auto"
      /> 
    </div>

    <a-typography-text ellipsis class="product-info">
      {{productName}}
    </a-typography-text>

    <div class="rating">
      <a-typography-text ellipsis style="margin-top: 5px;">
        {{rating}}
      </a-typography-text>  
      <a-rate
        :value="rating"
        allow-half
        disabled
        class="rating-stars"
      />
    </div>

    <a-typography-text ellipsis class="product-info">
      R$ {{productValue}}
    </a-typography-text>

  </div>
</template>
  
  <script>
  import { defineComponent } from "vue";
  
  export default defineComponent({
    name: "ProductRating",
    props: {
      imageSrc: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      productName: {
        type: String,
        required: true,
      },
      productValue: {
        type: Number,
        required: true,
      }
    },
  });
  </script>
  
  <style scoped>
  .product-container {
    background-color: white;
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 265px;
    border: 1px solid black;
    border-radius: 10px;
  }
  
  .product-image {
    margin: 10px auto;
  } 

  .product-info {
    margin-left: 10px;
    max-width: 175px;
  }

  .rating {
    display: flex;
    align-items: center;
    margin-left: 10px;
    /* justify-content: center; */
    gap: 4px; 
  }

  .rating-stars {
    font-size: 18px;
  }
  </style>
  
