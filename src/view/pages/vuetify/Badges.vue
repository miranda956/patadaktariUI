<template>
  <div class="d-flex flex-column-fluid">
							<!--begin::Container-->
							<div class="container">
								<!--begin::Notice-->
								
								<!--end::Notice-->
								<!--begin::Card-->
								<div class="card card-custom">
									<div class="card-header flex-wrap py-5">
										<div class="card-title">
											<h3 class="card-label">STAFF
											<div class="text-muted pt-2 font-size-sm">STAFF DETAILS</div></h3>
										</div>
										<div class="card-toolbar">
											<!--begin::Dropdown-->
											<div class="dropdown dropdown-inline mr-2">
												<button type="button" class="btn btn-light-primary font-weight-bolder dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												<i class="la la-download"></i>Export</button>
												<!--begin::Dropdown Menu-->
												<div class="dropdown-menu dropdown-menu-sm dropdown-menu-right">
													<ul class="nav flex-column nav-hover">
														<li class="nav-header font-weight-bolder text-uppercase text-primary pb-2">Choose an option:</li>
														<li class="nav-item">
															<a href="#" class="nav-link">
																<i class="nav-icon la la-print"></i>
																<span class="nav-text">Print</span>
															</a>
														</li>
														<li class="nav-item">
															<a href="#" class="nav-link">
																<i class="nav-icon la la-copy"></i>
																<span class="nav-text">Copy</span>
															</a>
														</li>
														<li class="nav-item">
															<a href="#" class="nav-link">
																<i class="nav-icon la la-file-excel-o"></i>
																<span class="nav-text">Excel</span>
															</a>
														</li>
														<li class="nav-item">
															<a href="#" class="nav-link">
																<i class="nav-icon la la-file-text-o"></i>
																<span class="nav-text">CSV</span>
															</a>
														</li>
														<li class="nav-item">
															<a href="#" class="nav-link">
																<i class="nav-icon la la-file-pdf-o"></i>
																<span class="nav-text">PDF</span>
															</a>
														</li>
													</ul>
												</div>
												<!--end::Dropdown Menu-->
											</div>
											<!--end::Dropdown-->
											<!--begin::Button-->
											<a href="#" class="btn btn-primary font-weight-bolder">
											<i class="la la-plus"></i>New Staff</a>
											<!--end::Button-->
										</div>
									</div>
                  <div class="input-group">
                      <div class="ml-auto">
                    <input type="search" id="form1" class="form-control" placeholder="search"  />
                     <label class="form-label" for="form1"></label>
                   </div>
                    
                  </div>
									<div class="card-body">
										<!--begin: Datatable-->
										<table class="table table-separate table-head-custom table-checkable" id="kt_datatable">
											<thead>
												<tr>
													<th>Record ID</th>
													<th>Staff Name</th>
													<th>Gender</th>
													<th>contact</th>
													<th> Email</th>
													<th>Role</th>
													<th>Status</th>
													
												</tr>
											</thead>
											<tbody>
												
											</tbody>
										</table>
										<!--end: Datatable-->
									</div>
								</div>
								<!--end::Card-->
							</div>
							<!--end::Container-->
						</div>  
</template>

<script>
//import KTCodePreview from "@/view/content/CodePreview.vue";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";

export default {
  data() {
    return {
      code1: {
        html: `<v-toolbar>
  <v-tabs
    dark
    background-color="primary"
    grow
  >
    <v-tab>
      <v-badge
        color="pink"
        dot
      >
        Item One
      </v-badge>
    </v-tab>

    <v-tab>
      <v-badge
        color="green"
        content="6"
      >
        Item Two
      </v-badge>
    </v-tab>

    <v-tab>
      <v-badge
        color="deep-purple accent-4"
        icon="mdi-vuetify"
      >
        Item Three
      </v-badge>
    </v-tab>
  </v-tabs>
</v-toolbar>`
      },

      code2: {
        html: `<div class="text-center">
  <v-badge
    :value="hover"
    color="deep-purple accent-4"
    content="9999+"
    left
    transition="slide-x-transition"
  >
    <v-hover v-model="hover">
      <v-icon
        color="grey lighten-1"
        large
      >
        mdi-account-circle
      </v-icon>
    </v-hover>
  </v-badge>
</div>`,
        js: `export default {
    data: () => ({
      hover: false,
    }),
  }`,
        hover: false
      },

      code3: {
        html: ` <v-container>
  <v-row justify="space-around">
    <div>
      <v-btn
        class="mx-1"
        color="primary"
        @click="messages++"
      >
        Send Message
      </v-btn>

      <v-btn
        class="mx-1"
        color="error"
        @click="messages = 0"
      >
        Clear Notifications
      </v-btn>
    </div>

    <v-badge
      :content="messages"
      :value="messages"
      color="green"
      overlap
    >
      <v-icon large>mdi-email</v-icon>
    </v-badge>
  </v-row>
</v-container>`,
        js: `export default {
    data () {
      return {
        messages: 0
      }
    },
  }`,
        messages: 0
      },

      code4: {
        html: `<v-container>
  <v-row
    align="center"
    justify="center"
  >
    <v-badge
      bordered
      color="error"
      icon="mdi-lock"
      overlap
    >
      <v-btn
        class="white--text"
        color="error"
        depressed
      >
        Lock Account
      </v-btn>
    </v-badge>

    <div class="mx-3"></div>

    <v-badge
      bordered
      bottom
      color="deep-purple accent-4"
      dot
      offset-x="10"
      offset-y="10"
    >
      <v-avatar size="40">
        <v-img src="media/users/300_2.jpg"></v-img>
      </v-avatar>
    </v-badge>

    <div class="mx-3"></div>

    <v-badge
      avatar
      bordered
      overlap
    >
      <template v-slot:badge>
        <v-avatar>
          <v-img src="media/project-logos/7.png"></v-img>
        </v-avatar>
      </template>

      <v-avatar size="40">
        <v-img src="media/users/100_3.jpg"></v-img>
      </v-avatar>
    </v-badge>
  </v-row>
</v-container>`
      }
    };
  },
  components: {
    
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      
    ]);
  }
};
</script>
<style>
body {
    color: #566787;
    background: #f5f5f5;
    font-family: 'Roboto', sans-serif;
}
.table-responsive {
    margin: 30px 0;
}
.table-wrapper {
    min-width: 1000px;
    background: #fff;
    padding: 20px;
    box-shadow: 0 1px 1px rgba(0,0,0,.05);
}
.table-title {
    padding-bottom: 10px;
    margin: 0 0 10px;
    min-width: 100%;
}
.table-title h2 {
    margin: 8px 0 0;
    font-size: 22px;
}
.search-box {
    position: relative;        
    float: right;
}
.search-box input {
    height: 34px;
    border-radius: 20px;
    padding-left: 35px;
    border-color: #ddd;
    box-shadow: none;
}
.search-box input:focus {
    border-color: #3FBAE4;
}
.search-box i {
    color: #a0a5b1;
    position: absolute;
    font-size: 19px;
    top: 8px;
    left: 10px;
}
table.table tr th, table.table tr td {
    border-color: #e9e9e9;
}
table.table-striped tbody tr:nth-of-type(odd) {
    background-color: #fcfcfc;
}
table.table-striped.table-hover tbody tr:hover {
    background: #f5f5f5;
}
table.table th i {
    font-size: 13px;
    margin: 0 5px;
    cursor: pointer;
}
table.table td:last-child {
    width: 130px;
}
table.table td a {
    color: #a0a5b1;
    display: inline-block;
    margin: 0 5px;
}
table.table td a.view {
    color: #03A9F4;
}
table.table td a.edit {
    color: #FFC107;
}
table.table td a.delete {
    color: #E34724;
}
table.table td i {
    font-size: 19px;
}    
.pagination {
    float: right;
    margin: 0 0 5px;
}
.pagination li a {
    border: none;
    font-size: 95%;
    width: 30px;
    height: 30px;
    color: #999;
    margin: 0 2px;
    line-height: 30px;
    border-radius: 30px !important;
    text-align: center;
    padding: 0;
}
.pagination li a:hover {
    color: #666;
}	
.pagination li.active a {
    background: #03A9F4;
}
.pagination li.active a:hover {        
    background: #0397d6;
}
.pagination li.disabled i {
    color: #ccc;
}
.pagination li i {
    font-size: 16px;
    padding-top: 6px
}
.hint-text {
    float: left;
    margin-top: 6px;
    font-size: 95%;
}    
</style>