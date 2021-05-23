<template>
  <!-- begin:: Header Topbar -->
  <div class="topbar">
    <!--begin: Search -->
    
    <!--end: Search -->

    <!--begin: Notifications -->
    
    <!--end: Notifications -->

    <!--begin: Quick Actions -->
    
    <!--end: Quick Actions -->

    <!--begin: My Cart -->
    
    <!--end: My Cart -->

    <!--begin: Quick panel toggle -->
    <!--end: Quick panel toggle -->

    <!--begin: Language bar -->
    <div class="topbar-item">
      <button type="button" class="btn btn-primary btn-sm">LOGOUT</button>

    </div>
    <!--end: Language bar -->

    <!--begin: User Bar -->
    <!--end: User Bar -->
  </div>
  <!-- end:: Header Topbar -->
</template>

<style lang="scss">
.topbar {
  .dropdown-toggle {
    padding: 0;
    &:hover {
      text-decoration: none;
    }

    &.dropdown-toggle-no-caret {
      &:after {
        content: none;
      }
    }
  }

  .dropdown-menu {
    margin: 0;
    padding: 0;
    outline: none;
    .b-dropdown-text {
      padding: 0;
    }
  }
}
</style>

<script>
//import KTSearchDefault from "@/view/layout/extras/dropdown/SearchDefault.vue";
/*import KTDropdownNotification from "@/view/layout/extras/dropdown/DropdownNotification.vue";
import KTDropdownQuickAction from "@/view/layout/extras/dropdown/DropdownQuickAction.vue";
import KTDropdownMyCart from "@/view/layout/extras/dropdown/DropdownMyCart.vue";
import KTDropdownLanguage from "@/view/layout/extras/dropdown/DropdownLanguage.vue";
import KTQuickUser from "@/view/layout/extras/offcanvas/QuickUser.vue";
import KTQuickPanel from "@/view/layout/extras/offcanvas/QuickPanel.vue";
*/
import i18nService from "@/core/services/i18n.service.js";


export default {
  name: "KTTopbar",
  data() {
    return {
      languageFlag: "",
      languages: i18nService.languages
    };
  },
  components: {
    
    
  },
  methods: {
    onLanguageChanged() {
      this.languageFlag = this.languages.find(val => {
        return val.lang === i18nService.getActiveLanguage();
      }).flag;
    }
  },
  computed: {
    getLanguageFlag() {
      return this.onLanguageChanged();
    }
  }
};
</script>
