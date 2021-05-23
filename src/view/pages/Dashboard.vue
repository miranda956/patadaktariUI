<template>
  <div class="row">
									<div class="col-lg-6">
										<!--begin::Card-->
										<div class="card card-custom gutter-b">
											<!--begin::Header-->
											<div class="card-header h-auto">
												<!--begin::Title-->
												<div class="card-title py-5">
													<h3 class="card-label">WEEKLY STASTICS </h3>
												</div>
												<!--end::Title-->
											</div>
											<!--end::Header-->
											<div class="card-body">
												<!--begin::Chart-->
												<div id="chart_1"></div>
												<!--end::Chart-->
											</div>
										</div>
										<!--end::Card-->
									</div>
									<div class="col-lg-6">
										<!--begin::Card-->
										<div class="card card-custom gutter-b">
											<div class="card-header">
												<div class="card-title">
													<h3 class="card-label">MONTHLY STASTICS</h3>
												</div>
											</div>
											<div class="card-body">
												<!--begin::Chart-->
												<div id="chart_2"></div>
												<!--end::Chart-->
											</div>
										</div>
										<!--end::Card-->
									</div>
								</div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
/*import AdvancedTableWidget2 from "@/view/content/widgets/advance-table/Widget2.vue";
//import MixedWidget1 from "@/view/content/widgets/mixed/Widget1.vue";
import ListWidget1 from "@/view/content/widgets/list/Widget1.vue";
import ListWidget3 from "@/view/content/widgets/list/Widget3.vue";
import ListWidget4 from "@/view/content/widgets/list/Widget4.vue";
import ListWidget8 from "@/view/content/widgets/list/Widget8.vue";
import ListWidget9 from "@/view/content/widgets/list/Widget9.vue";
import StatsWidget7 from "@/view/content/widgets/stats/Widget7.vue";
import StatsWidget12 from "@/view/content/widgets/stats/Widget12.vue";
*/
export default {
  name: "dashboard",
  components: {
    
    
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "PRISMHEALTH" }]);
  },
  methods: {
    setActiveTab1(event) {
      this.tabIndex = this.setActiveTab(event);
    },
    setActiveTab2(event) {
      this.tabIndex2 = this.setActiveTab(event);
    },
    /**
     * Set current active on click
     * @param event
     */
    setActiveTab(event) {
      // get all tab links
      const tab = event.target.closest('[role="tablist"]');
      const links = tab.querySelectorAll(".nav-link");
      // remove active tab links
      for (let i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
      }

      // set current active tab
      event.target.classList.add("active");

      // set clicked tab index to bootstrap tab
      return parseInt(event.target.getAttribute("data-tab"));
    }
  }
};
</script>
