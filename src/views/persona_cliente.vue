<template>
    <div>
            <cabezera/>
            
 <div id="espacio"></div>
     <v-data-table
    :headers="encabezados"
    :items="categorias"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title></v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              Nuevo Cliente
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">Clientes</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.nombre"
                      label="Nombre"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >

                  <!--

                    <v-text-field
                      v-model="editedItem.tipoPersona"
                      label="Tipo Persona"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >

                -->

                <!--

                  <v-text-field
                      v-model="editedItem.tipoDocumento"
                      label="Tipo Documento"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >

                -->

                <!--

                  <v-text-field
                      v-model="editedItem.numeroDocumento"
                      label="Numero Documento"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >

                -->

                <!--

                  <v-text-field
                      v-model="editedItem.direccion"
                      label="Direccion"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >

                -->

                <!--

                  <v-text-field
                      v-model="editedItem.telefono"
                      label="Telefono"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >

                -->

                  <!--

                    <v-text-field
                      v-model="editedItem.email"
                      label="Email"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >

                  -->
                  

                    <v-text-field
                      v-model="editedItem.estado"
                      label="Estado"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:[`item.opciones`]="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
           
    </div>
</template>
<script>
import axios from 'axios'
import Cabezera from '../components/cabezera.vue'
export default {
  components: {Cabezera},
    
  data(){
    return {
      categorias: [],

       encabezados: [
        {
          text: 'Nombre',
          align: 'start',
          sortable: false,
          value: 'nombre',
        },
        //{ text: 'Tipo Persona', value: 'tipoPersona' },
        //{ text: 'Tipo Documento', value: 'tipoDocumento' },
        //{ text: 'Numero Documento', value: 'numeroDocumento' },
        //{ text: 'Direccion', value: 'direccion' },
        //{ text: 'Telefono', value: 'telefono' },
        //{ text: 'Email', value: 'email' },
        { text: 'Estado', value: 'estado' },
        { text: 'Opciones', value: 'opciones', sortable: false}
      ],

      editedItem: {
        nombre: '',
        estado: 0,
        //tipoPersona: '',
        //tipoDocumento: '',
        //numeroDocumento: '',
        //direccion: '',
        //telefono: '',
        //Email: ''
      },

      formTitle: 'probando'

      
      
    }
  },

  created(){
    console.log(this.$store.state.token)
    this.listarCategorias()
  },

  methods:{
    listarCategorias(){
      let header = {headers:{"token":this.$store.state.token}}
      console.log('El token es ', this.$store.state.token);
      console.log('El header es ', header);
      axios.get('persona', header)
      .then(response => {
        console.log (response.data.persona);
        this.persona = response.data.persona;
      })
      .catch(error => {
        console.log(error.response)
      })
    }
  }
}
</script>

<style scoped>

#espacio{
  padding: 50px;
}

</style>

