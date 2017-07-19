import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import SalesGridview from "./../../partials/SalesGridview/SalesGridview.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            nextactivity: "Quotation",
            btnlinks: {
<<<<<<< HEAD
                createbtnlink:"/sales/salesnextactivitiescreate",
                importbtnlink:"/sales/salesnextactivityimport",
                firstbtnlink:"/sales/quotation",
                secondbtnlink:"/sales/salesnextactivitylistview",
=======
                createbtnlink:"/Sales/salesnextactivitiescreate",
                importbtnlink:"/Sales/salesnextactivityimport",
                firstbtnlink:"/Sales/quotation",
                secondbtnlink:"/Sales/salesnextactivitylistview",
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
            },
            tableheader: [
                "Opportunity",
                "Customer",
                "Next Activity Date",
                "Next Activity",
                "Next Activity Summary",
                "Stage",
                "Expected Revenue",
                "Expected closing"

            ],
            tabledata: {
                "row": {
                    "data": [
                        "Chic/IN/00004",

                    ],
<<<<<<< HEAD
                    "url": "/sales/salesquotationview"
=======
                    "url": "/Sales/salesquotationview"
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83


                },


            }
        }
    },


    components: {
        DashboardController,
        SalesGridview
    }
}