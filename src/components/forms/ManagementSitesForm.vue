<template>
  <div>
    <div class="site-list capitalize">
      O Globo
      <CheckBoxSwitch :rounded="true" style="float: right" />
    </div>
    <hr />
    <div class="site-list capitalize">
      O Globo
      <CheckBoxSwitch :rounded="true" style="float: right" />
    </div>
  </div>
</template>

<script>
import CheckBoxSwitch from "@/components/forms-fields/CheckBoxSwitch.vue";

export default {
  name: "ManagementSitesForm",
  components: {
    CheckBoxSwitch,
  },
};
</script>

<style scoped>
footer {
  padding: 16px;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 13px;
  color: #585858;
  border-top: 1px solid #e6e6e6;
}

hr {
  margin-top: 0px;
  margin-bottom: 2px;
}
.capitalize {
  text-transform: capitalize;
}

.site-list {
  height: 30px;
}
</style>
