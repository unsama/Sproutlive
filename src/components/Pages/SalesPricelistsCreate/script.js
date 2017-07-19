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
<<<<<<< HEAD
                createbtnlink:"/sales/newuser",
                importbtnlink:"/sales/imported",
                discardbtnlink:"/sales/salespricelists"
=======
                createbtnlink:"/Sales/newuser",
                importbtnlink:"/Sales/imported",
                discardbtnlink:"/Sales/salespricelists"
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
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
<<<<<<< HEAD
                    "url": "/sales/request_quotation_inner"
=======
                    "url": "/Sales/request_quotation_inner"
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83

                },
                "row1": {
                    "data": [
                        "",

                    ],
<<<<<<< HEAD
                    "url": "/sales/request_quotation_inner"
=======
                    "url": "/Sales/request_quotation_inner"
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83

                },
                "row2": {
                    "data": [
                        "",


                    ],
<<<<<<< HEAD
                    "url": "/sales/request_quotation_inner"
=======
                    "url": "/Sales/request_quotation_inner"
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83

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