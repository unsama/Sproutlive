import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Tabledrag from "./../../partials/Tabledrag/Tabledrag.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            activities: "Activities",
            title: "Activities - Sprout",
            btnlinks: {
<<<<<<< HEAD
                createbtnlink:"/sales/salesactivitycreate",
                importbtnlink:"/sales/salesactivityimport"
=======
                createbtnlink:"/Sales/salesactivitycreate",
                importbtnlink:"/Sales/salesactivityimport"
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
            },
            tableheader: [
                "Pricelist Name",
                "Currency"

            ],
            tablefooter : [
                "",
                "",
                "",
                "",
            ],
            tabledata: {
                "row": {
                    "data": [
                        "Public Pricelist",
                        "USD"
                    ],
<<<<<<< HEAD
                    "url": "/sales/salesactivityview"
=======
                    "url": "/Sales/salesactivityview"
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83

                },
                "row1": {
                    "data": [
                        " Sales",
                        ""
                    ],
<<<<<<< HEAD
                    "url": "/sales/salesactivityview"
=======
                    "url": "/Sales/salesactivityview"
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83

                },
                "row2": {
                    "data": [
                        " Sales",
                        ""

                    ],
<<<<<<< HEAD
                    "url": "/sales/salesactivityview"
=======
                    "url": "/Sales/salesactivityview"
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83

                },

            }
        }
    },


    components: {
        DashboardController,
        Tabledrag
    }
}