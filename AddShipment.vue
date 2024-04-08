
<template>
    <div>
        <component :is="Nav"></component>
        <component :is="Slidbar"></component>
          
        <v-row justify="center" style="z-index: 1;">
    <v-col cols="12" lg="6" md="8" sm="10"  style="z-index: 1;">
      <v-card ref="form"  style="margin-top: 100px; ">
        <div class="error" v-if="success" @click="clearError">{{ success }}</div>
        <v-card-text>
          <v-text-field
            v-model="firstName"
            :rules="nameRules"
            label="First Name"
            placeholder="Doe"
            required
          ></v-text-field>
          <v-text-field
            v-model="lastName"
            :rules="nameRules"
            label="Last Name"
            placeholder="John"
            required
          ></v-text-field>
          <v-text-field
            ref="email"
            v-model="email"
            :rules="emailRules"
            label="Email"
            placeholder="example@example.com"
            required
          ></v-text-field>
          <v-text-field
            ref="password"
            v-model="password"
            :rules="passwordRules"
            label="Password"
            type="password"
            required
          ></v-text-field>
          <v-text-field
            ref="phoneNumber"
            v-model="phoneNumber"
            :rules="phoneNumberRules"
            label="Phone Number"
            placeholder="123-456-7890"
            required
          ></v-text-field>
          <v-text-field
            v-model="address"
            :rules="addressRules"
            counter="25"
            label="Address Line"
            placeholder="Snowy Rock Pl"
            required
          ></v-text-field>
          <v-text-field
            v-model="item_name"
            :rules="nameRules"
            label="Item Name"
            required
          ></v-text-field>
          <v-text-field
            v-model="item_cost"
            :rules="itemCostRules"
            label="Item Cost"
            required
          ></v-text-field>
          <v-textarea
            v-model="details"
            :rules="detailsRules"
            label="Item Details"
            required
          ></v-textarea>
          <v-text-field
            v-model="destination"
            :rules="destinationRules"
            label="Destination"
            required
          ></v-text-field>
          <v-text-field
            v-model="current_location"
            :rules="currentLocationRules"
            label="Current Location"
            required
          ></v-text-field>
          <v-select
            v-model="statuses"
            :items="statusOptions"
            label="Status"
            required
          ></v-select>
        </v-card-text>
        <v-divider class="mt-12"></v-divider>
        <v-card-actions>
          <v-btn variant="text">Cancel</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="primary" variant="text" @click="submit">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
    

    </div>
</template>
<script>
import axios from 'axios';
import {base_url} from '../constants'
import Slidbar from "../components/Sidebar.vue"
import Nav from "../components/Nav.vue"
export default {
    components:{
        Nav,
        Slidbar,
    },
  data() {
    return {
      Nav,
      Slidbar,
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phoneNumber: '',
      address: '',
      item_name: '',
      item_cost: '',
      details: '',
      destination: '',
      current_location: '',
      statuses: '',
      success:'',
      statusOptions: ['Out for delivery', 'delivered'],
      nameRules: [
        v => !!v || 'Field is required',
      ],
      emailRules: [
        v => !!v || 'Field is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      passwordRules: [
        v => !!v || 'Field is required',
        v => /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/.test(v) || 'Password must contain at least one letter and one number, and be at least 8 characters',
      ],
      phoneNumberRules: [
      v => !!v || 'Phone number is required',
  v => /^[\d+-]+$/.test(v) || 'Phone number must be valid',
      ],
      addressRules: [
        v => !!v || 'Field is required',
      ],
      itemCostRules: [
        v => !!v || 'Field is required',
        v => /^\d+(\.\d{1,2})?$/.test(v) || 'Item Cost must be a valid currency value',
      ],
      detailsRules: [
        v => !!v || 'Field is required',
      ],
      destinationRules: [
        v => !!v || 'Field is required',
      ],
      currentLocationRules: [
        v => !!v || 'Field is required',
      ],
    };
  },

  mounted(){
    var user = JSON.parse(localStorage.getItem("user"));
    if(user.role != "admin"){
        window.location.href="/Dashboard"
    }
  },
  methods: {
    submit() {
        axios
          .post(`${base_url}/addshipment`, { firstName: this.firstName,
            lastName: this.lastName, email: this.email, 
            phoneNumber: this.phoneNumber, password: this.password,
            address:this.address,
            item_name:this.item_name,
            item_cost:this.item_cost,
            details:this.details,
            destination:this.destination,
            current_location:this.current_location,
            statuses:this.statuses   
          })
          .then((res) => {
            this.success = res.data.message;
            if (res.status === 201) {
              this.registerSucceful = true
              console.log(this.success);
            }
            console.log('Registration Successful');
          })
          .catch((error) => {
            console.log(error);
          })
      }
    }
  }

</script>

<style scoped>

.error {
  color: green;
  font-size: 1.5em;
  margin-top: 5px;
}
</style>