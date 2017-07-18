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
                createbtnlink:"/Sales/salesnextactivitiescreate",
                importbtnlink:"/Sales/salesnextactivityimport",
                firstbtnlink:"/Sales/quotation",
                secondbtnlink:"/Sales/salesnextactivitylistview",
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
                    "url": "/Sales/salesquotationview"


                },


            }
        }
    },


    components: {
        DashboardController,
        SalesGridview
    }
}