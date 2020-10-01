<template>
  <div>
    <Header />
    <Section color="alternate" v-if="thisSite">
      <template v-slot:content>
        <SectionTitle :title="disablePaywall" />
        <ManagementForm />
      </template>
    </Section>
    <Footer />
  </div>
</template>

<script>
import ManagementForm from "@/components/forms/ManagementPageForm.vue";
import Section from "@/components/sections/Section.vue";
import SectionTitle from "@/components/sections/SectionTitle.vue";
import Footer from "@/components/sections/Footer.vue";
import Header from "@/components/sections/Header.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    Header,
    ManagementForm,
    Section,
    SectionTitle,
    Footer,
  },
  computed: {
    ...mapGetters("sitesPaywall", ["thisSite"]),
    disablePaywall: () => browser.i18n.getMessage("disablePaywall"),
  },
};
</script>

<style>
html {
  width: 340px;
  height: 50px;
}

body {
  font-size: 100%;
  margin: 0px;
}
</style>
