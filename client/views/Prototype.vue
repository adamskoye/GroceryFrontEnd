<script>
    import LayoutDefault from "../layouts/LayoutDefault.vue"
    import axios from 'axios'

    export default {
      name: "Prototype",
      components: {
        LayoutDefault
      },
      created() {
      },
      data() {
          return {
            rows: [
              {payType: "foo", dailyLimit: 2, weeklyLimit: 3},
              {payType: "bar", dailyLimit: 2, weeklyLimit: 3},
              {payType: "baz", dailyLimit: 2, weeklyLimit: 3},
              {payType: "oof", dailyLimit: 2, weeklyLimit: 3},
            ],
            payType: "",
            dailyLimit: null,
            weeklyLimit: null
          }
      },
      methods: {
        addRow() {
          console.log(this.payType)

          if(this.rows.length > 0) {
            this.rows[this.rows.length - 1].dailyLimit = this.dailyLimit;
            this.rows[this.rows.length - 1].weeklyLimit = this.weeklyLimit;
          }

          this.rows.push({
            payType: this.payType
          })

          this.payType = ""
          this.dailyLimit = null
          this.weeklyLimit = null
        },

        deleteRow(index) {
          this.rows.splice(index, 1);
        }
      }
    };

</script>

<template>
  <layout-default>
      <div class="row mb-1">&nbsp;</div>

      <div class="row" v-if="rows.length > 0">
        <div class="col-sm">Pay Type</div>
        <div class="col-sm">Daily Limit</div>
        <div class="col-sm">Weekly Limit</div>
        <div class="col-sm"></div>
      </div>


      <div v-for="(row, index) of rows" class="row">
        <div class="col-sm">{{ row.payType }}</div>
        <div class="col-sm">{{ row.dailyLimit == null ? "-" : row.dailyLimit }}</div>
        <div class="col-sm">{{ row.weeklyLimit == null ? "-" : row.weeklyLimit }}</div>
        <div class="col-sm"><button class="btn-danger" @click="deleteRow(index)"><span class="bi-trash"></span></button></div>
      </div>

      <div class="row mb-3">

      </div>

      <div class="row">
        <div class="col">
          <form class="form-inline">
            <div v-if="rows.length==0">
              <span class="mr-2">My main Pay Type is</span>
            </div>
            <div v-else>
              <span class="mr-2">Any hours over</span>
              <input type="number" id="dailyLimit" class="form-control mr-2 width-5" v-model="dailyLimit"/>
              <span class="mr-2">a day, or</span>
              <input type="number" id="weeklyLimit" class="form-control mr-2 width-5" v-model="weeklyLimit"/>
              <span class="mr-2">a week become</span>
            </div>

            <select id="payType" class="form-control mr-2" v-model="payType">
              <option value="" disabled>Please Select</option>
              <option>Regular Time</option>
              <option>Double Time</option>
              <option>Triple Time</option>
            </select>
            <button type="submit" id="addButton" class="btn-secondary" @click="addRow"><span class="bi-plus-circle"></span></button>
          </form>
        </div>
      </div>
  </layout-default>
</template>
