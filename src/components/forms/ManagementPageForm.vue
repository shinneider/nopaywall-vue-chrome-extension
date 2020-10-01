<template>
  <div>
    <div class="site-list">
      <div class="site-slider">
        <b class="capitalize">{{ thisSite }}:</b>
        <CheckBoxSwitch
          :rounded="true"
          :value.sync="domainStatus"
          style="float: right"
        />
      </div>
      <i>{{ domain }}</i>
      <hr />
    </div>
    <div class="site-list" v-if="domainStatus">
      <div class="site-slider">
        <b class="capitalize">{{ thisPage }}:</b>
        <CheckBoxSwitch
          :rounded="true"
          :value.sync="pathStatus"
          style="float: right"
        />
      </div>
      <i>{{ path }}</i>
      <hr />
    </div>
    <div class="refresh">
      <Button text="Refresh Page" v-if="refreshNeeded" @click="refresh" />
    </div>
  </div>
</template>

<script>
import CheckBoxSwitch from "@/components/forms-fields/CheckBoxSwitch.vue";
import Button from "@/components/forms-fields/Button.vue";
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "ManagementSitesForm",
  components: {
    CheckBoxSwitch,
    Button,
  },
  data() {
    return {
      url: "",
    };
  },
  methods: {
    ...mapActions("domainActions", ["refreshPage"]),
    ...mapMutations("domainActions", ["blockDomain", "blockPath"]),
    refresh: function () {
      this.refreshPage();
      window.close();
    },
  },
  computed: {
    ...mapGetters("domainActions", [
      "domain",
      "path",
      "blockedDomain",
      "blockedPath",
      "refreshNeeded",
    ]),
    thisSite: () => browser.i18n.getMessage("thisSite"),
    thisPage: () => browser.i18n.getMessage("thisPage"),
    domainStatus: {
      get: function () {
        return !this.blockedDomain;
      },
      set: function (val) {
        this.blockDomain(!val);
      },
    },
    pathStatus: {
      get: function () {
        return !this.blockedPath;
      },
      set: function (val) {
        this.blockPath(!val);
      },
    },
  },
};
</script>

<style scoped>
.site-list {
  font-size: 0.89em;
}
.capitalize {
  text-transform: capitalize;
}
.refresh {
  justify-content: center;
  display: flex;
  padding-top: 2px;
}
</style>
