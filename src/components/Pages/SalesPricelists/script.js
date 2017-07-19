import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Tabledrag from "./../../partials/Tabledrag/Tabledrag.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            pricelists: "Pricelists",
            title: "Pricelists -Sprout",
            btnlinks: {
<<<<<<< HEAD
                createbtnlink:"/sales/salespricelistscreate",
                importbtnlink:"/sales/salespricelistsimport"
=======
                createbtnlink:"/Sales/salespricelistscreate",
                importbtnlink:"/Sales/salespricelistsimport"
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
            },
            tableheader: [
                "Message Type",
                "Number of Days",
                "Sales Teams"

            ],
            tablefooter: [
              "",
              "",
              "",
              "",
              "",
            ],
            tabledata: {
                "row": {
                    "data": [
                        "Email",
                        "",
                        "0"
                    ],
<<<<<<< HEAD
                    "url": "/sales/salespricelistsview"
=======
                    "url": "/Sales/salespricelistsview"
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83

                },
                "row1": {
                    "data": [
                        "Indirect Sales",
                        "",
                        "30"
                    ],
<<<<<<< HEAD
                    "url": "/sales/salespricelistsview"
=======
                    "url": "/Sales/salespricelistsview"
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83

                },
                "row2": {
                    "data": [
                        "Website Sales",
                        "",
                        "50"

                    ],
<<<<<<< HEAD
                    "url": "/sales/salespricelistsview"
=======
                    "url": "/Sales/salespricelistsview"
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