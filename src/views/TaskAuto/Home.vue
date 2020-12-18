<template>
  <v-container >

      <v-row color="red">
      <v-col xl="12" lg="12" cols="12" >
       <v-card>
         test
       </v-card>
      </v-col>
      </v-row>

      <v-row>
        <v-col xl="3" cols="12">
        <v-card style="width:300px;" class="ma-1">
        <v-card-title primary-title>
            DIV 1
        </v-card-title>
        <hr>

        <draggable v-model="myArray" group="people" @start="drag=true" @end="drag=true">
        <v-card v-for="element in myArray" :key="element.id" class="ma-2">
           <v-btn depressed color="primary">
            {{element.name}}
          </v-btn>

        </v-card>
        </draggable>
      </v-card>
      </v-col>
        <v-col xl="3" cols="12">
          <v-card style="width:300px;" class="ma-1">
        <v-card-title primary-title>
            DIV 2
        </v-card-title>
        <hr>
        <draggable v-model="myArray2" group="people" @start="drag=true" @end="drag=true">
        <v-card v-for="element in myArray2" :key="element.id" class="ma-2">
          <v-btn depressed color="primary">
            {{element.name}}
          </v-btn>
        </v-card>
        </draggable>
      </v-card>
      </v-col>

      <v-col xl="3" cols="12">
      <v-card style="width:300px;" class="ma-1">
        <v-card-title primary-title>
            DIV 3
        </v-card-title>
        <hr>
        <draggable v-model="myArray3" group="people" @start="drag=true" @end="drag=true">
        <v-card v-for="element in myArray3" :key="element.id" class="ma-2">
          <v-btn depressed color="primary">
            {{element.name}}
          </v-btn>
        </v-card>
        </draggable>
        </v-card>
      </v-col>
      </v-row>








  </v-container>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  mounted() {
  },
  components:{
  draggable
  },
    data () {
      return {
        myArray: [
          {
            id:1,
            name: 'd1',
            calories: 159,
          },
          {
            id:2,
            name: 'd2',
            calories: 237,
          },
        ],
         myArray2: [
          {
            id:1,
            name: 'd3',
            calories: 159,
          },
          {
            id:2,
            name: 'd4',
            calories: 237,
          },
        ],
        myArray3: [
          {
            id:1,
            name: 'd5',
            calories: 159,
          },
          {
            id:2,
            name: 'd6',
            calories: 237,
          },
        ],
      }
  },
  methods: {
    submit() {
    }
  }
};
</script>

<style>
</style>
