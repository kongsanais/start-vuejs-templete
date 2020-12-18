<template>
 <v-container>
      <v-card style="background-color: #FBFBFB;">
       <v-row> 
           <v-col class="d-flex"  xl="12" lg="5" md="12" sm="12" cols="12">
                <v-card
                  color="#1F7087"
                  class="ma-2"
                  dark
                >
                  <v-card-title class="headline">
                    Group User Mangement
                  </v-card-title>
                  <v-card-subtitle>Register User</v-card-subtitle>
                </v-card>
           </v-col>
       </v-row>

       <div>
       <v-row>
              <v-col class="d-flex" xl="4" lg="6" md="5" sm="12" cols="12">
                  <v-text-field
                    prepend-icon="mdi-account-details"
                    hint="Enter your group name"
                    label="Group Name"
                  ></v-text-field>
              </v-col>

              <v-col class="d-flex" xl="4" lg="6" md="5" sm="12" cols="12" >
                    <v-textarea
                      prepend-icon="mdi-camera-iris"
                      label="Description"
                      auto-grow
                      outlined
                      rows="3"
                      row-height="25"
                      shaped
                    ></v-textarea>
              </v-col>
       </v-row>

  <v-row>
    <v-col class="d-flex" xl="4" lg="6" md="5" sm="12" cols="12">

    <div>

    <v-btn
      color="primary"
      class="ml-1 white--text"
    >
      <v-icon
        right
        dark
        class="ma-1"
      >
       mdi-link-plus
      </v-icon>
       Add Member
    </v-btn>

    </div>

    </v-col>
  </v-row>

  <v-row>
    <v-col  class="d-flex" xl="12" lg="12" md="5" sm="12" cols="12">
      <v-card><h3 class="ma-1">User Data List</h3></v-card>
    </v-col>
 <v-col  class="d-flex" xl="12" lg="12" md="12" sm="12" cols="12"> 
  <v-data-table
    :headers="headers"
    :items="customer"
    :items-per-page="5"
    class="ma-1"
  ></v-data-table>
    </v-col>
  </v-row>
 </div>
</v-card>

 <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-if="false"
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Open Dialog
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
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
                  label="Legal first name*"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Legal middle name"
                  hint="example of helper text only on focus"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Legal last name*"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Email*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Password*"
                  type="password"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Age*"
                  required
                ></v-select>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-autocomplete
                  :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                  label="Interests"
                  multiple
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

</v-container>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      dialog : false,
        headers: [
          { text: 'Name', value: 'name' },
          { text: 'Department', value: 'department' },
          { text: 'Position', value: 'position' },
        ],
         customer: [
          {
            name: 'Hatsanai Sungnark',
            department: 'Devloper',
            position: 6.0,
          },
          {
            name: 'Hatsanai Sungnark',
            department: 'Devloper',
            position: 6.0,
          },
          {
            name: 'Hatsanai Sungnark',
            department: 'Devloper',
            position: 6.0,
          }
        ],
    }
  },
  methods: {
  }
};
</script>
<style scoped></style>