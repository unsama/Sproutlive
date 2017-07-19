import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Tablemain from "./../../partials/Tablemain/Tablemain.vue"



export default{
    created: function () {
        var self = this;
        document.title = this.title;
        this.select();
    },
    data () {
        return {
            title:"Outgoing Mail Servers - Sprout",
            head: "General Settings / Outgoing Mail Servers",
            btnlinks: {
                createbtnlink:"/setting/outgoingemailservercreate",
                importbtnlink:"/setting/outgoingemailserverimport"
            },
            tableheader: [
                "Priority",
                "Decsription",
                "SMTP Server",
                "User name",
                "Connection Security",

            ],
            tablefoot: [
                "",
                "",
                "",
                "",
                "",
                "",

            ],
            tabledata: {
                "row": {
                    "data": [
                        "10",
                        "localhost",
                        "localhost",
                        "ada",
                        "TLS (STARTTLS)",

                    ],
                    "url": "/setting/outgoingemailserverin"
                },
            }
        }
    },
    methods: {
        select: function () {
            var self = this;
            self.$http.post("/outgoingtable", {
                "username": self.options,
            }).then(function(res){
                var data = res.body.result;
                self.tabledata = [];
                if(data.length > 0){
                    data.forEach(function(val) {
                        self.tabledata.push({
                            "data": [
                                val.priority,
                                val.description,
                                val.smtp_server,
                                val.username,
                                val.connection_security,
                            ],
                            "url": "/setting/outgoingemailserverin/"+val.id,

                        });
                    });
                    console.log(self.tabledata);
                }
                //self.options =res.body.data;

            },function(err){
                alert(err);
            });
        },
        delete: function () {
            var self = this;
            //alert(self.current_company+ " ");
            self.$http.post("/delete_users", {"id": self.$route.params.id ,"status": self.status}).then(function(res){
                console.log(res.body);
            },function(err){
                //alert(err);
            });
        },
    },


    components: {
        DashboardController,
        Tablemain


    }
}