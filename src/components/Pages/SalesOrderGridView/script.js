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
<<<<<<< HEAD
                createbtnlink:"/sales/salesnextactivitiescreate",
                importbtnlink:"/sales/salesnextactivityimport",
                firstbtnlink:"/sales/order",
                secondbtnlink:"/sales/salesordergridview",
=======
                createbtnlink:"/Sales/salesnextactivitiescreate",
                importbtnlink:"/Sales/salesnextactivityimport",
                firstbtnlink:"/Sales/order",
                secondbtnlink:"/Sales/salesordergridview",
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
                        "Need 20 Days of Consultancy",
                        "Demo",
                        "Need 20 Days of Consultancy",
                        "Need 20 Days of Consultancy",
                        "test",
                        "Proposition",
                        "60,000.00",
                        "30,23"
                    ],
<<<<<<< HEAD
                    "url": "/sales/Salesnextactivityview"
=======
                    "url": "/Sales/Salesnextactivityview"
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83

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
<<<<<<< HEAD
                    "url": "/sales/Salesnextactivityview"
=======
                    "url": "/Sales/Salesnextactivityview"
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83

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
<<<<<<< HEAD
                    "url": "/sales/Salesnextactivityview"
=======
                    "url": "/Sales/Salesnextactivityview"
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