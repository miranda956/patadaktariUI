<template>
  <div>
    

    <div class="row">
      <div class="col-md-6">
        
        

        <v-form ref="form" v-model="code1.valid" lazy-validation>
              <v-text-field
                v-model="code1.name"
                :counter="10"
                :rules="code1.nameRules"
                label="ProductName"
                required
              ></v-text-field>
              
              <v-text-field
                v-model="code1.description"
                :counter="10"
                :rules="code1.descriptionRules"
                label="Productdescription"
                required
              ></v-text-field>
              <v-text-field
                v-model="code1.price"
                :counter="10"
                :rules="code1.priceRules"
                label="Productprice"
                required
              ></v-text-field>
              <v-text-field
                v-model="code1.prescription"
                :counter="10"
                :rules="code1.prescriptionRules"
                label="Productprescription"
                required
              ></v-text-field>
              <v-text-field
                v-model="code1.quantity"
                :counter="10"
                :rules="code1.quantityRules"
                label="Productquantity"
                required
              ></v-text-field>
              
              </v-form>

        
      </div>

      <div class="col-md-6">
        

        

        <KTCodePreview v-bind:title="'UPLOAD PRODUCT'">
          <template v-slot:preview>
            <p>
              upload your product 
            </p>
            <v-file-input show-size label="File input"></v-file-input>
          </template>
          <template v-slot:html>
            
          </template>
        </KTCodePreview>
      </div>
    </div>
    <button type="button" class="btn btn-success">Submit</button>

  </div>
  
</template>

<script>
import KTCodePreview from "@/view/content/CodePreview.vue";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";

export default {
  data() {
    return {
      code1: {
        html: ` <v-file-input multiple label="File input"></v-file-input>`
      },

      code2: {
        html: `<v-file-input accept="image/*" label="File input"></v-file-input>`
      },

      code3: {
        html: `<div>
  <v-file-input chips multiple label="File input w/ chips"></v-file-input>
  <v-file-input small-chips multiple label="File input w/ small chips"></v-file-input>
</div>`
      },

      code4: {
        html: `<v-file-input show-size label="File input"></v-file-input>`
      },

      code5: {
        html: `<v-file-input show-size counter multiple label="File input"></v-file-input>`
      },

      code6: {
        html: `<v-file-input
  label="File input"
  filled
  prepend-icon="mdi-camera"
></v-file-input>`
      },

      code7: {
        html: `<v-file-input
  v-model="files"
  color="deep-purple accent-4"
  counter
  label="File input"
  multiple
  placeholder="Select your files"
  prepend-icon="mdi-paperclip"
  outlined
  :show-size="1000"
>
  <template v-slot:selection="{ index, text }">
    <v-chip
      v-if="index < 2"
      color="deep-purple accent-4"
      dark
      label
      small
    >
      {{ text }}
    </v-chip>

    <span
      v-else-if="index === 2"
      class="overline grey--text text--darken-3 mx-2"
    >
      +{{ files.length - 2 }} File(s)
    </span>
  </template>
</v-file-input>`,
        js: `export default {
  data: () => ({
    files: [],
  }),
}`,
        files: []
      }
    };
  },
  components: {
    KTCodePreview
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
     
    ]);
  }
};
</script>
