import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"

export default{
    created: function () {
        $(function () {
            $(".colorbg").on("click", function (e) {
                e.preventDefault();
                var col = $(this).css("backgroundColor");
                var parent = $(this).parent().parent().parent().parent().parent().parent().parent().parent().parent().parent();
                parent.css({"backgroundColor":col});
                var subparent = $(this).parent().parent().parent().parent().parent();
                subparent.css({"backgroundColor":col});
            });
        });


    },
    data () {
        return {
            heading: "Requests for Quotation",
            dashboard: "Dashboard",
            btnlinks: {
                createbtnlink: "#/app/purchase/RQcreate",
<<<<<<< HEAD
                discardbtnlink: "#/app/sales/Salesnextactivityview",
=======
                discardbtnlink: "#/app/Sales/Salesnextactivityview",
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
                importbtnlink: "#/app/purchase/RQImport",
                secondbtnlink: "",
                firstbtnlink: "",
            },
            tableheader: [
                " Reference",
                " Order Date",
                " Vendor",
                " Company",
                " Scheduled Date",
                " Source Document",
                " Untaxed",
                " Total",
                " Status",

            ],
            tablefooter:[
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "4564656",
                "4545445",
                "",

            ],
            tabledata: {
                "row": {
                    "data": [
                        "P00007",
                        "02/18/2017 18:28:06",
                        "Delta PC",
                        "Alupak",
                        "02/18/2017 18:28:06",
                        "",
                        "232.0",
                        "7878",
                        "RFQ",



                    ],
                    "url": "#/app/purchase/RQ"


                },

            },

        }
    },

    components: {
        DashboardController,
        TableMain,



    }

}