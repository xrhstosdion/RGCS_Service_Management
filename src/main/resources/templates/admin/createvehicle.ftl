<#include "/base.ftl">
    <#include "/macros/navbar.ftl">

        <!-- PAGE HEADER GOES HERE -->
        <#macro page_head>
            <title> User Registration </title>
        </#macro>


        <!--  BODY CODE HOES HERE -->
        <#macro page_body>


            <@navbar/>
            <div class="container">
                <div class="row">
                    <form class="form-horizontal" action="/admin/CreateVehicle" method="post">
                        <fieldset>

                            <!-- Form Name -->
                            <legend>Vehicle Registration Form</legend>

                            <!-- Text input-->
                            <div class="form-group">
                                <label class="col-md-4 control-label" for="uservat">User VAT</label>
                                <div class="col-md-5">
                                    <#if vatNumber??>
                                    <input id="uservat" name="uservat" type="text" value="${vatNumber}"
                                           placeholder="Please type the Owner's VAT Number"
                                           class="form-control input-md" required="" disabled>
                                    <#else>
                                        <input id="uservat" name="uservat" type="text" value=""
                                               placeholder="Please type the Owner's VAT Number"
                                               class="form-control input-md" required="" >
                                    </#if>

                                </div>
                            </div>

                            <!-- Text input-->
                            <div class="form-group">
                                <label class="col-md-4 control-label" for="licenseplates">License Plate</label>
                                <div class="col-md-5">
                                    <input id="licenseplates" name="licenseplates" type="text"
                                           placeholder="Vehicle's Licence Plate"
                                           class="form-control input-md" required="">
                                    <span class="help-block">ABC-1234</span>

                                </div>
                            </div>

                            <!-- Text input-->
                            <div class="form-group">
                                <label class="col-md-4 control-label" for="brand">Brand</label>
                                <div class="col-md-5">
                                    <input id="brand" name="brand" type="text" placeholder="Vehicle brand"
                                           class="form-control input-md" required="">
                                </div>
                            </div>

                            <!-- Text input-->
                            <div class="form-group">
                                <label class="col-md-4 control-label" for="model">Model</label>
                                <div class="col-md-5">
                                    <input id="model" name="model" type="text" placeholder="Vehicle model"
                                           class="form-control input-md" required="">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-md-4 control-label" for="colour">Colour</label>
                                <div class="col-md-5">
                                    <input id="colour" name="colour" type="text" placeholder="Colour"
                                           class="form-control input-md" required="">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-md-4 control-label" for="factorydate">FactoryDate</label>
                                <div class="col-md-5">
                                    <input id="factorydate" name="factorydate" type="text" placeholder="FactoryDate"
                                           class="form-control input-md" required="">
                                </div>
                            </div>

                            <!-- Button -->
                            <div class="form-group">
                                <label class="col-md-4 control-label" for="createvehicle"></label>
                                <div class="col-md-4">
                                    <button id="createvehicle" name="createvehicle" class="btn btn-primary">Create Vehicle
                                    </button>
                                </div>
                            </div>

                        </fieldset>
                    </form>

                </div>
                <br>
                <#if binding_result??>
                    <p style="text-align:center; font-size:larger; color:lightSlateGrey;">
                        Form errors on previous try :
                    </p>
                    <#list errorsList as error>
                        <div class="row alert alert-warning">
                            <br>
                            <p> <!--style="color:red;font-weight:bold;text-align:center;"-->
                                error : ${error.getDefaultMessage()!error.toString()}
                            </p>
                        </div>
                    </#list>
                </#if>
                <br>
                <#if errorMessage??>
                    <p style="text-align:center; font-size:larger; color:lightSlateGrey;">
                        Exceptions that occured on previous submission try :
                    </p>
                    <div class="row">
                        <br>
                        <p style="color:red;font-weight:bold;text-align:center;">
                            error : ${errorMessage}
                            <#if registrationResult??>
                                <br>
                                registration result : ${registrationResult}
                            </#if>
                        </p>
                    </div>
                </#if>
            </div>


        </#macro>

        <@display_page/>