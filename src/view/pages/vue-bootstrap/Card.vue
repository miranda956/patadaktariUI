<template>
    <div class="col-lg-10">
    <div class="card card-custom gutter-b example example-compact">
        <div class="card-header">
            <h3 class="card-title">Assign Role </h3>
        </div>
        <!--begin::Form-->
        <form class="form">
            <div class="card-body">
                <h3 class="font-size-lg text-dark font-weight-bold mb-6 text-uppercase "></h3>
                <div class="mb-15">
                    <div class="form-group row">
                        <label class="col-lg-3 col-form-label">Staff Number:</label>
                        <div class="col-lg-6">
                            <input type="text" class="form-control" placeholder="staff Number" name="senderName" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-lg-3 col-form-label">Staff Name:</label>
                        <div class="col-lg-6">
                            <input type="text" class="form-control" placeholder="StaffName" name="senderPhone" />					
                        </div>
                    </div>
                    <h3>Roles:
                        
                    </h3>
                    <div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
  <label class="form-check-label" for="exampleRadios1">
Super Admin  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
  <label class="form-check-label" for="exampleRadios2">
Admin  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
  <label class="form-check-label" for="exampleRadios2">
Support  </label>
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