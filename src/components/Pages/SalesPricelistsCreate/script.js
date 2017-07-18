import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Tabledrag from "./../../partials/Tabledrag/Tabledrag.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            pricelists: "Pricelists / New",
            btnlinks: {
                createbtnlink:"/Sales/newuser",
                importbtnlink:"/Sales/imported",
                discardbtnlink:"/Sales/salespricelists"
            },
            tableheader: [
                "Name"


            ],
            tablefooter:[
              "",
              "",
            ],
            tabledata: {
                "row": {
                    "data": [
                        "Add an Items",

                    ],
                    "url": "/Sales/request_quotation_inner"

                },
                "row1": {
                    "data": [
                        "",

                    ],
                    "url": "/Sales/request_quotation_inner"

                },
                "row2": {
                    "data": [
                        "",


                    ],
                    "url": "/Sales/request_quotation_inner"

                },

            }
        }
    },


    components: {
        DashboardController,
        Tabledrag,
        TableMain
    }
}