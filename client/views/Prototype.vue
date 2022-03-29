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
            dailyLimit: "",
            weeklyLimit: ""
          }
      },
      methods: {
        addRow() {
          console.log(this.payType)

          this.rows.push({
            payType: this.payType,
            dailyLimit: this.dailyLimit,
            weeklyLimit: this.weeklyLimit
          })
          this.payType = ""
          this.dailyLimit = ""
          this.weeklyLimit = ""
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
        <div class="col-sm">{{ row.dailyLimit }}</div>
        <div class="col-sm">{{ row.weeklyLimit }}</div>
        <div class="col-sm"><button class="btn-danger" @click="deleteRow(index)"><span class="bi-trash"></span></button></div>
      </div>

      <div class="row mb-3">

      </div>

      <form>
        <div class="row">
          <div class="col-sm">
              <label class="form-label" for="payType">Pay Type</label>
              <select id="payType" class="form-control" v-model="payType">
                <option value="" disabled>Please Select</option>
                <option>Regular Time</option>
                <option>Double Time</option>
                <option>Triple Time</option>
              </select>
          </div>
          <div class="col-sm">
            <label class="form-label" for="dailyLimit">Daily Limit</label>
            <input type="number" id="dailyLimit" class="form-control" v-model="dailyLimit" :disabled="rows.length==0"/>
          </div>
          <div class="col-sm">
            <label class="form-label" for="weeklyLimit">Weekly Limit</label>
            <input type="number" id="weeklyLimit" class="form-control" v-model="weeklyLimit" :disabled="rows.length==0"/>
          </div>
          <div class="col-sm">
            <div class="position-absolute bottom-0">
            <button type="submit" id="addButton" class="btn-secondary" @click="addRow"><span class="bi-plus-circle"></span></button>
            </div>
          </div>
        </div>
      </form>

  </layout-default>
</template>