import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Tabledrag from "./../../partials/Tabledrag/Tabledrag.vue"


export default{
    created: function () {
<<<<<<< HEAD
        var self = this;
        var del = []; // initialize empty array
        document.title = this.title;
        this.select();
        $(function () {
            $("#action").hide();
            // $("#changepassword").click(function () {
            //     self.pwd_update();
            //     window.location.href = "/setting/users";
            // });
            $(".checkBoxClass").click(function () {
                if($(this).prop('checked')){
                    $("#action").show();
                }else{
                    $("#action").hide();
                }
                // alert("check it");
            });
            $("#delete").click(function () {
                $(".checkBoxClass:checked").each(function(){
                    del.push($(this).val());
                    // self.btnlinks.deletebtnlink = "/setting/users/"+del;
                    // self.delete();
                });
                console.log(del);
                self.delete(del);
                alert(del);
            });

        });
=======
        document.title = this.title;

>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
    },
    data(){
        return {
            head: "Companies",
            title: 'Companies - Sprout',
            btnlinks: {
                createbtnlink: "/setting/companycreate",
                importbtnlink: "/setting/companyimport",
<<<<<<< HEAD
                deletebtnlink: "",
                exportbtnlink: "",
                changepasswordbtnlink: "",
                changepasswordbtnlink_modal: "",
=======
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
            },
            tableheader: [
                "Company Name",
                "Partner",
<<<<<<< HEAD
                "ID",

=======
                "",
                "",
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
            ],
            tablefoot: [
                "",
                "",
                "",
                "",
<<<<<<< HEAD

=======
                "",
                "",
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
            ],
            tabledata: {
                "row": {
                    "data": [
                        "ALU pak industries",
                        "alupak industries",
<<<<<<< HEAD

                    ],
                    "url": "/setting/companiesin"
=======
                        "",
                        "",
                    ],
                    "url": "/#/app/setting/companyin"
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
                },
                "row1": {
                    "data": [
                        "My industries",
                        "my industries",
<<<<<<< HEAD
                        
                    ],
                    "url": "/setting/usersin"
=======
                        "",
                        "",
                    ],
                    "url": "/#/app/setting/usersin"
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
                },
            }
        }
    },
<<<<<<< HEAD
    methods: {
        select: function () {
            var self = this;
            self.$http.post("/companytable", {
                "username": self.options,
            }).then(function(res){
                var data = res.body.result;
                self.tabledata = [];
                if(data.length > 0){
                    data.forEach(function(val) {
                        self.tabledata.push({
                            "data": [
                                val.id,
                                val.company_name,
                                val.company_name,
                            ],
                            "url": "/setting/companiesin/"+val.id,

                        });
                    });
                    console.log(self.tabledata);
                }
                //self.options =res.body.data;

            },function(err){
                alert(err);
            });
        },
        delete: function (del) {
            var self = this;
            //alert(self.current_company+ " ");
            console.log("a"+del);
            self.$http.post("/delete_company_info", {"delete_items": del}).then(function(res){

                //console.log(res.body);
            },function(err){
                //alert(err);
            });
        },
    },
=======

>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83

    components: {
        DashboardController,
        Tabledrag

    }
}
