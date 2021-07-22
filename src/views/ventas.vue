<template>
    <div>
    <cabezera/>
    <!-- Aqui el 'v-if' normal es '0' -->
    <div id="espacio"></div>
     <v-data-table
    :headers="encabezados"
    :items="ventas"
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
              Nueva Venta
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">Ventas</span>
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
                      v-model="editedItem.usuario"
                      label="Usuarios"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >

                    <v-text-field
                      v-model="editedItem.persona"
                      label="Proveedor"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >

                    <v-text-field
                      v-model="editedItem.tipoComprobante"
                      label="Tipo de comprobante"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >

                    <v-text-field
                      v-model="editedItem.serieComprobante"
                      label="Serie de comprobante"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >

                    <v-text-field
                      v-model="editedItem.numComprobante"
                      label="Numero de comprobante"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >

                    <v-text-field
                      v-model="editedItem.fecha"
                      label="Fecha"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >

                    <v-text-field
                      v-model="editedItem.impuesto"
                      label="Impuesto"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >

                    <v-text-field
                      v-model="editedItem.total"
                      label="Total"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >

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
    <!--<v-icon small class="mr-2" @click="editar(item)"> mdi-pencil </v-icon> -->
    <!--  <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>  -->

        <button 
          type="button" 
          style="font-size: 16px;"
          @click="cambioVisible()"
        ><img id="expan" src="../assets/expan.png"></button>

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
      <!-- Fin del 'v-if' '0' -->

      <!-- Inicio del 'v-if' '1'-->
      
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
      
      ventas: [],

       encabezados: [

        { text: 'Usuarios', value: 'usuario.nombre' },
        { text: 'Proveedor', value: 'persona.nombre' },
        { text: 'Tipo de Comprobante', value: 'tipoComprobante' },
        { text: 'Serie de comprobante', value: 'serieComprobante' },
        { text: 'Numero de comprobante', value: 'numComprobante' },
        { text: 'Fecha', value: 'createAT' },
        { text: 'Estado', value: 'estado' },
        { text: 'Impuesto', value: 'impuesto' },
        { text: 'total', value: 'total' },
        { text: 'Opciones', value: 'opciones', sortable: false}
      ],

      editedItem: {
        tipoComprobante: '',
        serieComprobante: '',
        numComprobante: '',
        estado: 0,
        impuesto: '',
        total: ''
      },

    }
  },

  created(){
    //console.log(this.$store.state.token)
    this.listarCategorias()
  },

  methods:{
    cambioVisible() {
      if (this.visible){
        this.visible = false
      } else {
        this.visible = true
      }
    },

    listarCategorias(){
      let header = {headers:{"token":this.$store.state.token}}
      //console.log('El token es ', this.$store.state.token);
     // console.log('El header es ', header);
      axios.get('venta', header)
      .then(response => {
        //console.log (response.data.venta);
        this.ventas = response.data.venta;
        //console.log (this.ventas)
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
              `venta/desactivar/${id}`,
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
              `venta/activar/${id}`,
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
            //De post compra falta que agregue el id del usuario y el id del comprador
            `venta`,
            {
              // Agregar usuario
              // agregar persona
              // tipoComprobante: this.editedItem.tipoComprobante,
              // serieComprobante: this.editedItem.serieComprobante,
              // numComprobante: this.editedItem.numComprobante,
              // impuesto: this.editedItem.impuesto,
              // total: this.editedItem.total
            },
            header
          )
          .then ((response) => {
            console.log(response);
            console.log('El post funciona, pero falta arreglar los id de usuario y persona')
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
              `venta/${this.id}`,
              {
                tipoComprobante: this.editedItem.tipoComprobante,
                serieComprobante: this.editedItem.serieComprobante,
                numComprobante: this.editedItem.numComprobante,
                impuesto: this.editedItem.impuesto,
                total: this.editedItem.total
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
      this.editedItem.tipoComprobante = item.tipoComprobante;
      this.editedItem.serieComprobante = item.serieComprobante;
      this.editedItem.numComprobante = item.numComprobante;
      this.editedItem.impuesto = item.impuesto
      this.editedItem.total = item.total
      this.dialog = true;
    },

    limpiarCajas(){
      this.editedItem.nombre = '';
      this.editedItem.descripcion = '';
      this.editedItem.estado = '';
      this.editedItem.tipoComprobante = '';
      this.editedItem.serieComprobante = '';
      this.editedItem.numComprobante = '';
    }
  }
}
</script>

<style scoped>

#espacio{
  padding: 50px;
}

#expan{
  width: 20px;
  height: auto;
  padding: 3px;
}

</style>
