<template>
    <div>
    <cabezera/>
    <div id="espacio"></div>
     <v-data-table
    :headers="encabezados"
    :items="articulos"
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
              Nuevo Articulo
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">Articulos</span>
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
                      v-model="editedItem.descripcion"
                      label="Descripcion"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >

                    <v-text-field
                      v-model="editedItem.precio"
                      label="Precio"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >

                  <v-text-field
                      v-model="editedItem.codigo"
                      label="Codigo"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >

                  <v-text-field
                      v-model="editedItem.stock"
                      label="Stock"
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
                          :items="categorias"
                          v-model="editedItem.categoria"
                          v-if="bd == 0"
                          :menu-props="{ top: true, offsetY: true }"
                          label="Categorias"
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
      
      articulos: [],
      categorias: [],

       encabezados: [
        {
          text: 'Nombre',
          align: 'start',
          sortable: false,
          value: 'nombre',
        },
        { text: 'Descripcion', value: 'descripcion' },
        { text: 'Precio', value: 'precio' },
        { text: 'Codigo', value: 'codigo' },
        { text: 'Stock', value: 'stock' },
        { text: 'Estado', value: 'estado' },
        { text: 'Categoria', value: 'categoria.nombre' },
        { text: 'Opciones', value: 'opciones', sortable: false}
      ],

      editedItem: {
        nombre: '',
        descripcion: '',
        precio: 0,
        codigo: '',
        stock: '',
        categoria: '',
      },
    }
  },

  created(){
    //console.log(this.$store.state.token)
    this.listarArticulos()
    this.selectCategoria()
  },

  methods:{
    listarArticulos(){
      let header = {headers:{"token":this.$store.state.token}}
      //console.log('El token es ', this.$store.state.token);
     // console.log('El header es ', header);
      axios.get('articulo', header)
      .then(response => {
       
        this.articulos = response.data.articulos;
        //console.log (this.articulos);

      })
      .catch(error => {
        console.log(error.response)
      });
    },

      selectCategoria() {
      let me = this;
      let categoriaArray = [];
      let header = { headers: { "token": this.$store.state.token } };
      axios
        .get("categoria", header)
        .then(function (response) {
          categoriaArray = response.data.categoria;
          categoriaArray.map(function (x) {
            me.categorias.push({ text: x.nombre, value: x._id });
          });
        })
        .catch(function (error) {
          console.log(error);
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
              `articulo/desactivar/${id}`,
              {
                estado: 0
              },
              header              
            )
            .then(function () {
              me.listarArticulos();
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
              `articulo/activar/${id}`,
              {
                estado: 1
              },
              header              
            )
            .then(function () {
              
              me.listarArticulos();
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
            `articulo`,
            {
              nombre: this.editedItem.nombre,
              descripcion: this.editedItem.descripcion,
              precio: this.editedItem.precio,
              codigo: this.editedItem.codigo,
              stock: this.editedItem.stock,
              categoria: this.editedItem.categoria,
            },
            header
          )
          .then ((response) => {
            console.log(response);
            me.listarArticulos();
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
              `articulo/${this.id}`,
              {
                nombre: this.editedItem.nombre,
                descripcion: this.editedItem.descripcion,
                precio: this.editedItem.precio,
                codigo: this.editedItem.codigo,
                stock: this.editedItem.stock
              },
                header
            )
            .then(function (response) {
              me.listarArticulos();
              me.limpiarCajas()
              console.log(response)
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
      this.editedItem.descripcion = item.descripcion;
      this.editedItem.precio = item.precio;
      this.editedItem.codigo = item.codigo;
      this.editedItem.stock =  item.stock;
      this.editedItem.categoria = item.categoria;

      this.dialog = true;

    },

    limpiarCajas(){
      this.editedItem.nombre = '';
      this.editedItem.descripcion = '';
      this.editedItem.estado = '';
      this.editedItem.precio = 0;
      this.editedItem.codigo = 0;
      this.editedItem.stock = 0;
      this.editedItem.categoria = '';
    }
  }
}
</script>

<style scoped>

#espacio{
  padding: 50px;
}

</style>
