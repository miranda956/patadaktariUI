<template>
  <div class="col-lg-10">
    <div class="card card-custom gutter-b example example-compact">
        <div class="card-header">
            <h3 class="card-title">Product information</h3>
        </div>
        <!--begin::Form-->
        <form class="form">
            <div class="card-body">
                <h3 class="font-size-lg text-dark font-weight-bold mb-6 text-uppercase ">Product  Information</h3>
                <div class="mb-15">
                    <div class="form-group row">
                        <label class="col-lg-3 col-form-label">Product Name:</label>
                        <div class="col-lg-6">
                            <input type="text" class="form-control" placeholder="Enter product Name" name="senderName" />
                        </div>
                    </div>
                  <h3>Product Category</h3>

                    <div>
               <b-dropdown id="dropdown-1" text="Product Category">
                  <b-dropdown-item>Contraceptive</b-dropdown-item>
                  <b-dropdown-item>Family planning</b-dropdown-item>
                    <b-dropdown-item>Anti-aging</b-dropdown-item>
                 <b-dropdown-divider></b-dropdown-divider>
               
  </b-dropdown>

</div>
 <div>
                                     <h3>ProductSubcategory</h3>

               <b-dropdown id="dropdown-1" text="Product Category">
                  <b-dropdown-item>Condoms</b-dropdown-item>
                  <b-dropdown-item>pills</b-dropdown-item>
                    <b-dropdown-item>implant</b-dropdown-item>
                 <b-dropdown-divider></b-dropdown-divider>

  </b-dropdown>
</div>
                </div>
                
    
                <div class="mb-15">
                 

                    <div class="form-group row">
                        <label class="col-lg-3 col-form-label">Product price:</label>
                        <div class="col-lg-6">
                            <input type="text" class="form-control" placeholder="product Price" name="receiverPhone" />					
                        </div>
                    </div>
                     <div class="form-group row">
                        <label class="col-lg-3 col-form-label">Product Quantity</label>
                        <div class="col-lg-6">
                            <input type="text" class="form-control" placeholder="Enter product quantity" name="receiverPhone" />					
                        </div>
                    </div>

                </div>
                <!--begin: Code-->
                <div class="example-code mt-10">
                    <ul class="example-nav nav nav-tabs nav-bold nav-tabs-line nav-tabs-line-2x">
                        <li class="nav-item">
                            <a class="nav-link active" data-toggle="tab" href="#example_code_html_3"></a>
                        </li>
                    </ul>
                    <div class="tab-content">
                        <div class="tab-pane active" id="example_code_html_3" role="tabpanel">
                            <div class="example-highlight">
                                <pre style="height:400px"/>
                            </div>
                        </div>
                    </div>
                </div>
                  <v-file-input multiple label="Product image"></v-file-input>

                <!--end: Code-->
            </div>
            <div class="card-footer">
                <div class="row">
                    <div class="col-lg-3"></div>
                    <div class="col-lg-6">
                        <button type="reset" class="btn btn-success mr-2" id="sendSubmit">Submit</button>
                        <button type="reset" class="btn btn-secondary" id="cancelTransaction">Cancel</button>
                    </div>
                </div>
            </div>
        </form>
        <!--end::Form-->
    </div>
</div>

</template>
<script>
export default {
  
}
</script>