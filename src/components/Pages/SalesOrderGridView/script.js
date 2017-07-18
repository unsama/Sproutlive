import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import SalesGridview from "./../../partials/SalesGridview/SalesGridview.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            nextactivity: "Quotations",
            btnlinks: {
                createbtnlink:"/Sales/salesnextactivitiescreate",
                importbtnlink:"/Sales/salesnextactivityimport",
                firstbtnlink:"/Sales/order",
                secondbtnlink:"/Sales/salesordergridview",
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
                        "Need 20 Days of Consultancy",
                        "Demo",
                        "Need 20 Days of Consultancy",
                        "Need 20 Days of Consultancy",
                        "test",
                        "Proposition",
                        "60,000.00",
                        "30,23"
                    ],
                    "url": "/Sales/Salesnextactivityview"

                },
                "row1": {
                    "data": [
                        "Need 20 Days of Consultancy",
                        "Demo",
                        "Need 20 Days of Consultancy",
                        "Need 20 Days of Consultancy",
                        "test",
                        "Proposition",
                        "60,000.00",
                        "30,23"
                    ],
                    "url": "/Sales/Salesnextactivityview"

                },
                "row2": {
                    "data": [
                        "Need 20 Days of Consultancy",
                        "Demo",
                        "Need 20 Days of Consultancy",
                        "Need 20 Days of Consultancy",
                        "test",
                        "Proposition",
                        "60,000.00",
                        "30,23"
                    ],
                    "url": "/Sales/Salesnextactivityview"

                },

            }
        }
    },


    components: {
        DashboardController,
        SalesGridview
    }
}