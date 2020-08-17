<template>
  <b-container class="bv-example-row">
    <b-row>
      <h3>Click the ID to see the user detail</h3>
    </b-row>
    <b-row>
      <b-col>
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="my-table"
        ></b-pagination>
      </b-col>
      <b-col>
        <strong>Total Record :</strong>
        <b-form-select v-model="totalRecord" :options="options"></b-form-select>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-table
          :items="items"
          :fields="fields"
          :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc"
          responsive="sm"
          :per-page="perPage"
          :current-page="currentPage"
        >
          <template v-slot:cell(id)="data">
            <router-link :to="`/user/${data.value}`">{{data.value}}</router-link>
          </template>
        </b-table>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import data from "../data.json";
export default {
  data() {
    return {
      sortBy: "age",
      sortDesc: false,
      fields: [
        { key: "id", sortable: true },
        { key: "first_name", sortable: true },
        { key: "last_name", sortable: true },
        { key: "email", sortable: true }
      ],
      items: data.persons,
      currentPage: 1,
      totalRecord: "3",
      options: [
        { text: "3", value: "3" },
        { text: "5", value: "5" },
        { text: "10", value: "10" },
        { text: "all", value: "all" }
      ]
    };
  },
  computed: {
    rows() {
      return this.items.length;
    },
    perPage() {
      return this.totalRecord === "all" ? this.items.length : this.totalRecord;
    }
  }
};
</script>