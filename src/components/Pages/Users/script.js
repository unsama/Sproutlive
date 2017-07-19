<<<<<<< HEAD
import DashboardController from "./../../partials/DashboardController/DashboardController.vue";
import TableMain from "./../../partials/TableMain/TableMain.vue";
=======
import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83


export default{
    created: function () {
<<<<<<< HEAD
        var self = this;
        var del = []; // initialize empty array
        document.title = this.title;
        this.select();
        $(function () {
            $("#action").hide();
            $("#changepassword").click(function () {
                self.pwd_update();
                window.location.href = "/setting/users";
            });
            $(".checkBoxClass").click(function () {
                if($(this).prop('checked')){
                    $("#action").show();
                }else{
                    $("#action").hide();
                }
               // alert("check it");
            });

            $("#num01").click(function () {
                self.ssubmit();

            });
            $("#num10").click(function () {
                self.psubmit();
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
            head: "Users",
            title: 'Users - Sprout',
<<<<<<< HEAD
            options: '',
            username: '',
            v: true,
            v1: false,
            btnlinks: {
                createbtnlink: "/setting/usersoutcreate",
                importbtnlink: "/setting/usersimport",
                deletebtnlink: "",
                exportbtnlink: "",
                changepasswordbtnlink: "",
                changepasswordbtnlink_modal: "",

            },
            tableheader: [
                "ID",
=======
            btnlinks: {
                createbtnlink: "/setting/usersoutcreate",
                importbtnlink: "/setting/usersimport",
            },
            tableheader: [
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
                "Name",
                "Login",
                "Language",
                "Latest Connection",

            ],
            tablefoot: [
                "",
                "",
                "",
                "",
                "",
<<<<<<< HEAD
                "",
=======
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
            ],
            tabledata: {
                "row": {
                    "data": [
<<<<<<< HEAD

                    ],
                    "url": "/recruitment/ReqDep"


                },

            },
        };
    },
    methods: {
        select: function () {
            var self = this;

            self.$http.post("/usertable", {
                "username": self.options,
            }).then(function(res){
                var data = res.body.result;
                self.tabledata = [];
                if(data.length > 0){
                    data.forEach(function(val) {
                        var j_date = new Date(val.created_at);
                        self.tabledata.push({
                            "data": [
                                val.id,
                                val.username,
                                val.email,
                                val.language,
                                j_date.getDate()+"-"+j_date.getMonth()+"-"+j_date.getFullYear()
                            ],
                            "url": "/setting/usersin/"+val.id,

                        });
                    });
                    console.log(self.tabledata);
                }
                //self.options =res.body.data;

            },function(err){
                //alert(err);
            });
        },
        pwd_update: function () {
            var self = this;
            //alert(self.current_company+ " ");
            self.$http.post("/user_pwd_update", {"id": self.$route.params.id ,"status": self.status}).then(function(res){
                console.log(res.body);
            },function(err){
                //alert(err);
            });
        },
        delete: function (del) {
            var self = this;
            //alert(self.current_company+ " ");
            console.log("a"+del);
            self.$http.post("/delete_users", {"delete_items": del}).then(function(res){

                //console.log(res.body);
            },function(err){
                //alert(err);
            });
        },
    },



=======
                        "Administrators",
                        "rajaunleashed@gmail.com",
                        "Pushto",
                        "12/6/19",
                    ],
                    "url": "/setting/usersin"
                },
            }
        }
    },


>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
    components: {
        DashboardController,
        TableMain

    }
<<<<<<< HEAD
};

=======
}
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
