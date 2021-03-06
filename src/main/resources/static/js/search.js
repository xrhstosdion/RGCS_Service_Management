$(document).ready(function (){

       var vehicle = new Map();
       var user  = new Map();
       var repair = new Map();

       $('#searchSelect').on('change', function() {
         if(this.value == "Vehicle" || this.value == "Repair"){
            $('#firstAddon').html("PL");
            $('#secondAddon').html("VAT");
         }
         else if(this.value == "Owner"){
            $('#firstAddon').html("@");
            $('#secondAddon').html("VAT");
         }
       })

       $("#edit_btn").click(function (){
       var vat = $("#f1").html();
       var fname = $("#l1").html();
       var lname = $("#m1").html();
       var email = $("#o1").html();
       var password = $("#p1").html();
       var address = $("#q1").html();
       var type = $("#r1").html();
       var id = $("#s1").html();

       $("#id").val(id);
       $("#vat").val(vat);
       $("#firstname").val(fname);
       $("#lastname").val(lname);
       $("#email").val(email);
       $("#password").val(password);
       $("#confirmpassword").val(password);
       $("#address").val(address);
       $("#type").val(type);
    })

    $(".editVbtn").click(function (){
           var selectorArray = ($(this).attr('id')).split("-");
           var selector = selectorArray[0];

           var vatSelector = "#f2-".concat(selectorArray[0]);
           var vat = $(vatSelector).html();

           var brandSelector = "#l2-".concat(selectorArray[0]);
           var brand = $(brandSelector).html();

           var modelSelector = "#m2-".concat(selectorArray[0]);
           var model = $(modelSelector).html();

           var fdSelector = "#o2-".concat(selectorArray[0]);
           var fd = $(fdSelector).html();

           var colourSelector = "#p2-".concat(selectorArray[0]);
           var colour = $(colourSelector).html();

           var plateSelector = "#r2-".concat(selectorArray[0]);
           var plate = $(plateSelector).html();

           var id = selectorArray[0];

           $(".vehicleid").val(id);
           $("#uservat").val(vat);
           $("#licenseplates").val(plate);
           $("#brand").val(brand);
           $("#model").val(model);
           $("#colour").val(colour);
           $("#factorydate").val(fd);
        })

        $("#deleteUser").click(function (){
               var vat = $("#f1").html();
               var fname = $("#l1").html();
               var lname = $("#m1").html();
               var email = $("#o1").html();
               var password = $("#p1").html();
               var address = $("#q1").html();
               var type = $("#r1").html();
               var id = $("#s1").html();

               ////////////////////////////////////// populate user map after clearing it first
               user.clear();

               user.set("id",id);
               user.set("vat",vat);
               user.set("password",password);
               user.set("firstname",fname);
               user.set("lastname",lname);
               user.set("address",address);
               user.set("email",email);
               user.set("type",type);

            })

            $("#delUserBtn").click(function (){

            var userData = {
               "id": user.get("id"),
               "vat": user.get("vat"),
               "password": user.get("password"),
               "firstname": user.get("firstname"),
               "lastname": user.get("lastname"),
               "address": user.get("address"),
               "email": user.get("email"),
               "type": user.get("type")
            }

            $.ajax({
               type: "POST",
               contentType : 'application/json; charset=utf-8',
               url: "http://localhost:8080/admin/delUser",
               data: JSON.stringify(userData), // This converts the payLoad to Json to pass along to Controller
               success :function(result) {
                  alert(result);
                  window.location.replace("http://localhost:8080/admin/SearchOVR");
               }
            });

            })// end of click method



        $(".editRbtn").click(function (){
           var selectorArray = ($(this).attr('id')).split("-");
           var selector = selectorArray[0];

           var licenseplatesSelectorSelector = "#f3-".concat(selectorArray[0]);
           var licenseplates = $(licenseplatesSelectorSelector).html();

           var repairdateSelector = "#l3-".concat(selectorArray[0]);
           var repairdate = $(repairdateSelector).html().trim();
           repairdate = repairdate.slice(0, 10) + "T" + repairdate.slice(10, 16).replace(" ", "");

           var repairtypeSelector = "#m3-".concat(selectorArray[0]);
           var repairtype = $(repairtypeSelector).html();

           var repairCostSelector = "#o3-".concat(selectorArray[0]);
           var repairCost = $(repairCostSelector).html();


           var repairDescriptionSelector = "#p3-".concat(selectorArray[0]);
           var repairDescription = $(repairDescriptionSelector).html();


           var statusSelector = "#r3-".concat(selectorArray[0]);
           var status = $(statusSelector).html();


           var id = selectorArray[0];


           $(".repairid").val(id);
           $("#repairdate").val(repairdate);
           $(".repairPlates").val(licenseplates);
           $("#repairCost").val(repairCost);
           $("#repairtype").val(repairtype);
           $("#repairDescription").val(repairDescription);
           $("#status").val(status);
        })


        $(".deleteBtn").click(function (){
                   var selectorArray = ($(this).attr('id')).split("-");
                   var selector = selectorArray[0];

                   var vatSelector = "#f2-".concat(selectorArray[0]);
                   var vat = $(vatSelector).html();


                   var brandSelector = "#l2-".concat(selectorArray[0]);
                   var brand = $(brandSelector).html();


                   var modelSelector = "#m2-".concat(selectorArray[0]);
                   var model = $(modelSelector).html();


                   var fdSelector = "#o2-".concat(selectorArray[0]);
                   var fd = $(fdSelector).html();


                   var colourSelector = "#p2-".concat(selectorArray[0]);
                   var colour = $(colourSelector).html();


                   var plateSelector = "#r2-".concat(selectorArray[0]);
                   var plate = $(plateSelector).html();


                   var id = selectorArray[0];


                   ////////////////////////////////////// populate vehicle map after clearing it first
                   vehicle.clear();

                   vehicle.set("id",id);
                   vehicle.set("uservat",vat);
                   vehicle.set("licenseplates",plate);
                   vehicle.set("brand",brand);
                   vehicle.set("model",model);
                   vehicle.set("colour",colour);
                   vehicle.set("factorydate",fd);

                })


                $("#delVehiclebtn").click(function (){

                           var vehicleData = {
                             "id": vehicle.get("id").toString(),
                             "uservat": vehicle.get("uservat"),
                             "licenseplates": vehicle.get("licenseplates"),
                             "brand": vehicle.get("brand"),
                             "model": vehicle.get("model"),
                             "colour": vehicle.get("colour"),
                             "factorydate": vehicle.get("factorydate")
                            }

                           $.ajax({
                             type: "POST",
                             contentType : 'application/json; charset=utf-8',
                             url: "http://localhost:8080/admin/delVehicle",
                             data: JSON.stringify(vehicleData), // This converts the payLoad to Json to pass along to Controller
                             success :function(result) {
                              alert(result);
                              window.location.replace("http://localhost:8080/admin/SearchOVR");
                            }
                           });
                    })



        $(".deleteRepairBtn").click(function (){
                           var selectorArray = ($(this).attr('id')).split("-");
                           var selector = selectorArray[0];

                           var licenseplatesSelector = "#f3-".concat(selectorArray[0]);
                           var licenseplates = $(licenseplatesSelector).html();


                           var statusSelector = "#r3-".concat(selectorArray[0]);
                           var status = $(statusSelector).html();


                           var repairtypeSelector = "#m3-".concat(selectorArray[0]);
                           var repairtype = $(repairtypeSelector).html();


                           var repaircostSelector = "#o3-".concat(selectorArray[0]);
                           var repaircost = $(repaircostSelector).html();


                           var descriptionSelector = "#p3-".concat(selectorArray[0]);
                           var description = $(descriptionSelector).html();


                           var repairDateSelector = "#l3-".concat(selectorArray[0]);
                           var repairDate = $(repairDateSelector).html();


                           var id = selectorArray[0];


                           ////////////////////////////////////// populate repair map after clearing it first
                           repair.clear();

                           repair.set("id",id);
                           repair.set("licenseplates",licenseplates);
                           repair.set("status",status);
                           repair.set("repairtype",repairtype);
                           repair.set("repaircost",repaircost);
                           repair.set("description",description);
                           repair.set("repairDate",repairDate);
                        })


         $("#delRepairbtn").click(function (){

                                   var repairData = {
                                     "id": repair.get("id"),
                                     "status": repair.get("status"),
                                     "licenseplates": repair.get("licenseplates"),
                                     "repairtype": repair.get("repairtype"),
                                     "repaircost": repair.get("repaircost"),
                                     "description": repair.get("description"),
                                     "repairDate": repair.get("repairDate")
                                    }

                                   $.ajax({
                                     type: "POST",
                                     contentType : 'application/json; charset=utf-8',
                                     url: "http://localhost:8080/admin/delRepair",
                                     data: JSON.stringify(repairData), // This converts the payLoad to Json to pass along to Controller
                                     success :function(result) {
                                      alert(result);
                                      window.location.replace("http://localhost:8080/admin/SearchOVR");
                                    }
                                   });
                            })


         $("#delAdminRepairbtn").click(function (){

                                            var repairData = {
                                              "id": repair.get("id"),
                                              "status": repair.get("status"),
                                              "licenseplates": repair.get("licenseplates"),
                                              "repairtype": repair.get("repairtype"),
                                              "repaircost": repair.get("repaircost"),
                                              "description": repair.get("description"),
                                              "repairDate": repair.get("repairDate")
                                             }

                                            $.ajax({
                                              type: "POST",
                                              contentType : 'application/json; charset=utf-8',
                                              url: "http://localhost:8080/admin/delRepair",
                                              data: JSON.stringify(repairData), // This converts the payLoad to Json to pass along to Controller
                                              success :function(result) {
                                               alert(result);
                                               window.location.replace("http://localhost:8080/admin/home");
                                             }
                                            });
                                     })

});