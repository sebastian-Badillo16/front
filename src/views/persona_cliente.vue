<template>
    <div>
    <cabezera/>
    <div id="espacio"></div>
     <v-data-table
    :headers="encabezados"
    :items="clientes"
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
              Nuevo cliente
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

                  <v-text-field
                      v-model="editedItem.numDocumento"
                      label="Numero Documento"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >

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

                  <v-row align="center">
                      <v-col cols="12">
                        <v-select
                          v-model="editedItem.tipoDocumento"
                          :items="editedItem.documentos"
                          :menu-props="{ top: true, offsetY: true }"
                          label="Tipo de documento"
                        ></v-select>
                      </v-col>
                    </v-row>

                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="dialog = false"
              >
                Cancelar
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="guardar"
              >
                Guardar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancelar</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>

                <template v-slot:[`item.estado`]="{ item }">
                    <div v-if="item.estado">
                        <span class="blue--text">Activo</span>
                    </div>
                    <div v-else>
                        <span class="red--text">Inactivo</span>
                    </div>
                </template>

    <template v-slot:[`item.opciones`]="{ item }">
      <v-icon small class="mr-2" @click="editar(item)"> mdi-pencil </v-icon>
    <!--  <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>  -->

<template v-if='item.estado'>
    <v-icon small @click="activarDesactivarMostrar (2, item)">
      mdi-block-helper
    </v-icon>
</template>

<template v-else>
    <v-icon small @click="activarDesactivarMostrar (1, item)">
      mdi-check
    </v-icon>
</template>
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
      bd: 0,
      
      clientes: [],

       encabezados: [
        {
          text: 'Nombre',
          align: 'start',
          sortable: false,
          value: 'nombre',
        },
        { text: 'Tipo Persona', value: 'tipoPersona' },
        { text: 'Tipo Documento', value: 'tipoDocumento' },
        { text: 'Numero Documento', value: 'numDocumento' },
        { text: 'Direccion', value: 'direccion' },
        { text: 'Telefono', value: 'telefono' },
        { text: 'Email', value: 'email' },
        { text: 'Estado', value: 'estado' },
        { text: 'Opciones', value: 'opciones', sortable: false}
      ],

      editedItem: {
        nombre: '',
        estado: 0,
        documentos: ['Cedula', 'NIT', 'Pasaporte', 'CE'],
        tipoPersona: '',
        tipoDocumento: '',
        numDocumento: '',
        direccion: '',
        telefono: '',
        email: '',
        
      },

    }
  },

  created(){
    //console.log(this.$store.state.token)
    this.listarCategorias()
  },

  methods:{
    listarCategorias(){
      let header = {headers:{"token":this.$store.state.token}}
      //console.log('El token es ', this.$store.state.token);
     // console.log('El header es ', header);
      axios.get('persona/cliente', header)
      .then(response => {
        //console.log (response.data.persona);
        this.clientes = response.data.persona;
        //console.log (this.clientes);
      })
      .catch(error => {
        console.log(error.response)
      });
    },

    activarDesactivarMostrar(accion, item){
      let id = item._id;
      console.log('accion')
        if (accion == 2){
          console.log(id);
          let me = this;
          let header = { headers: { 'token': this.$store.state.token } };
          axios
            .put(
              `persona/desactivar/${id}`,
              {
                estado: 0
              },
              header              
            )
            .then(function () {
              me.listarCategorias();
            })
            .catch(function (error) {
              console.log(error);
            });
        } else if (accion == 1){
          console.log(id);
          let me = this;
          let header = { headers: { 'token': this.$store.state.token } };
          axios
            .put(
              `persona/activar/${id}`,
              {
                estado: 1
              },
              header              
            )
            .then(function () {
              
              me.listarCategorias();
            })
            .catch(function (error) {
              console.log(error);
            });
        }
    },



//Guardar y editar
    guardar () {
      if (this.bd == 0){
          console.log('Guardando', this.bd);
          let header = { headers: {'token': this.$store.state.token}}
          const me = this;
          axios
          .post(
            `persona`,
            {
              nombre: this.editedItem.nombre,
              tipoPersona: 'cliente', 
              tipoDocumento: this.editedItem.tipoDocumento,
              numDocumento: this.editedItem.numDocumento,
              direccion: this.editedItem.direccion,
              telefono: this.editedItem.telefono,
              email: this.editedItem.email,
              estado: this.editedItem.estado
            },
            header
          )
          .then ((response) => {
            console.log(response);
            me.listarCategorias();
            this.limpiarCajas();
          })
          .catch((error) => {
            console.log (error.response);
          });
      } else {
          console.log('Editando', this.bd);
          let header = { headers: {'token': this.$store.state.token}}
          const me = this;
          axios
            .put (
              `persona/${this.id}`,
              {
                nombre: this.editedItem.nombre,
                direccion: this.editedItem.direccion,
                telefono: this.editedItem.telefono,
              },
                header
            )
            .then(function () {
              me.listarCategorias();
              me.limpiarCajas()
            })
            .catch(function (error) {
              console.log(error);
            })
      }
    },

    editar(item){
      console.log(item);
      this.bd = 1;
      this.id = item._id;
      this.editedItem.nombre = item.nombre;
      this.editedItem.tipoDocumento = item.tipoDocumento;
      this.editedItem.numDocumento = item.numDocumento;
      this.editedItem.direccion = item.direccion;
      this.editedItem.telefono = item.telefono;
      this.editedItem.email = item.email;
      this.editedItem.tipoPersona = item.tipoPersona;
      this.dialog = true;
    },

    limpiarCajas(){
      this.editedItem.nombre = '';
      this.editedItem.tipoDocumento = '';
      this.editedItem.numDocumento = '';
      this.editedItem.direccion = '';
      this.editedItem.telefono = '';
      this.editedItem.email = '';
      this.editedItem.tipoPersona = ''; 
    }

  
  }
  
}


</script>

<style scoped>

#espacio{
  padding: 50px;
}

</style>
