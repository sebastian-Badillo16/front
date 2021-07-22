<template>
    <div>
     
    <cabezera/>
    <!-- Aqui el 'v-if' normal es '0' -->
    <template  v-if="visible == 0">
    <div id="espacio"></div>
     <v-data-table
    :headers="encabezados"
    :items="ingresos"
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
              @click="cambioVisible()"
            >
              Nuevo Ingreso
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">Ingresos</span>
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
                      v-model="editedItem.impuesto"
                      label="Impuesto"
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
                          v-model="editedItem.tipoComprobante"
                          :items="editedItem.comprobantes"
                          :menu-props="{ top: true, offsetY: true }"
                          label="Tipo de comprobante"
                          v-if="bd == 0"
                        ></v-select>
                      </v-col>
                    </v-row>

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

                    <!--selec de proveedores-->
                  <v-row align="center">
                      <v-col cols="12">
                        <v-select
                          :items="personas"
                          v-model="editedItem.persona"
                          v-if="bd == 0"
                          :menu-props="{ top: true, offsetY: true }"
                          label="Proveedores"
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
      <!-- <v-icon small class="mr-2" @click="editar(item)"> mdi-pencil </v-icon> -->
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
    </template>
           
    <!-- Inicio del 'v-if' '1'-->
    <template v-if="visible == 1">
          <h1></h1>
          <p></p>

            <v-card-text>
              <v-container>
                <v-row>
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

                  <v-row align="center">
                      <v-col cols="12">
                        <v-select
                          v-model="editedItem.tipoComprobante"
                          :items="editedItem.comprobantes"
                          :menu-props="{ top: true, offsetY: true }"
                          label="Tipo de comprobante"
                          v-if="bd == 0"
                        ></v-select>
                      </v-col>
                    </v-row>
                  </v-col>



                    <!--selec de Articulos-->
                  <v-row align="center">
                      <v-col cols="12">
                        <v-select
                          :items="articulos"
                          v-model="editedItem.articulo"
                          v-if="bd == 0"
                          :menu-props="{ top: true, offsetY: true }"
                          label="Articulos"
                        ></v-select>
                      </v-col>
                    

                    <!--selec de proveedores-->
                      <v-col cols="12">
                        <v-select
                          :items="personas"
                          v-model="editedItem.persona"
                          v-if="bd == 0"
                          :menu-props="{ top: true, offsetY: true }"
                          label="Proveedores"
                        ></v-select>
                      </v-col>
                    </v-row>   
                </v-row>
              </v-container>
            </v-card-text>                  

        <h1></h1>
        <p></p>

        <v-data-table
        :headers='encabezado2'
        :item='grilla2'
        sort-by="calories"
        class="elevation-1"
        >
          <v-card-text>
            <v-container>
              <v-row>




              </v-row>
            </v-container>
          </v-card-text>
        </v-data-table>

    <h></h>
    <p></p>

    <button
    id="boton"
    type='button'
    @click="cambioVisible()">
    <strong>Cancelar</strong>
    </button>

    <button
    id="boton_green"
    type='button'
    @click="cambioVisible()">
    <strong>Guardar</strong>
    </button>



    </template>



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
      visible: false,
      
      articulos: [],

      ingresos: [],

      grilla2: [],

      encabezado2: [
         { text: 'Borrar', value: '' },
         { text: 'Articulo', value: ''},
         { text: 'Cantidad', value: ''},
         { text: 'Precio', value: ''},
         { text: 'SubTotal', value: ''},
      ],

      personas: [],

       encabezados: [

        { text: 'Usuarios', value: 'usuario.nombre' },
        { text: 'Proveedor', value: 'persona.nombre' },
        { text: 'Tipo de Comprobante', value: 'tipoComprobante' },
        { text: 'Serie de comprobante', value: 'serieComprobante' },
        { text: 'Numero de comprobante', value: 'numComprobante' },
        { text: 'Estado', value: 'estado' },
        { text: 'Impuesto', value: 'impuesto' },
        { text: 'total', value: 'total' },
        { text: 'Opciones', value: 'opciones', sortable: false}
      ],

      editedItem: {
        persona: "",
        comprobantes: ['CREDITO', 'FACTURA', 'DEBITO'],
        proveedores: '',
        tipoComprobante: '',
        serieComprobante: '',
        numComprobante: '',
        estado: 0,
        impuesto: '',
        total: '',
      },

    }
  },

  created(){
    //console.log(this.$store.state.token)
    this.selectPersona();
    this.listarCategorias();
    this.listarArticulos();
  },

  methods:{

      listarArticulos() {
      let me = this;
      let articuloArray = [];
      let header = { headers: { "token": this.$store.state.token } };
      axios
        .get("articulo", header)
        .then(function (response) {
          articuloArray = response.data.articulos;
          articuloArray.map(function (x) {
            me.articulos.push({ text: x.nombre, value: x._id });
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    cambioVisible() {
      if (this.visible){
        this.visible = false
      } else {
        this.visible = true
      }
    },

    selectPersona() {
      let me = this;
      let personaArray = [];
      let header = { headers: { "token": this.$store.state.token } };
      axios
        .get("persona/proveedor", header)
        .then(function (response) {
          console.log(response.data);
          personaArray = response.data.persona;
          personaArray.map(function (x) {
            me.personas.push({ text: x.nombre, value: x._id });
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    listarCategorias(){
      let header = {headers:{"token":this.$store.state.token}}
      //console.log('El token es ', this.$store.state.token);
     // console.log('El header es ', header);
      axios.get('compra', header)
      .then(response => {
        //console.log (response.data.compra);
        this.ingresos = response.data.compra;
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
              `compra/desactivar/${id}`,
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
              `compra/activar/${id}`,
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
            `compra`,
            {
              // Agregar usuario
              usuario: this.$store.state.id,
              // agregar proveedor
              persona: this.editedItem.persona,
              tipoComprobante: this.editedItem.tipoComprobante,
              serieComprobante: this.editedItem.serieComprobante,
              numComprobante: this.editedItem.numComprobante,
              impuesto: this.editedItem.impuesto,
              total: this.editedItem.total
            },
            header
          )
          .then ((response) => {
            console.log(this.$store.state.id)
            console.log(this.editedItem.persona)
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
              `compra/${this.id}`,
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
      this.editedItem.usuario = item.usuario;
      this.editedItem.persona = item.persona;
      this.editedItem.tipoComprobante = item.tipoComprobante;
      this.editedItem.serieComprobante = item.serieComprobante;
      this.editedItem.numComprobante = item.numComprobante;
      this.editedItem.impuesto = item.impuesto
      this.editedItem.total = item.total
      this.dialog = true;
    },

    limpiarCajas(){
      this.editedItem.estado = '';
      this.editedItem.persona = '';
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

#boton{
  background-color: red;
  padding: 5px;
  border-radius: 25px;
  color: white;
}

#boton_green{
  background-color: rgb(91, 211, 36);
  padding: 5px;
  border-radius: 25px;
  color: white;
}

</style>
