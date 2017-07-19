import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            salesorder: "Sales Orders",
            title: "Sales Orders -Sprout",
            btnlinks: {
<<<<<<< HEAD
                createbtnlink:"/sales/salesordercreate",
                importbtnlink:"/sales/salesorderimport",
                firstbtnlink:"/sales/order",
                secondbtnlink:"/sales/salesordergridview",
=======
                createbtnlink:"/Sales/salesordercreate",
                importbtnlink:"/Sales/salesorderimport",
                firstbtnlink:"/Sales/order",
                secondbtnlink:"/Sales/salesordergridview",
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
            },
            tableheader: [
                "Quotations Number",
                "Order Date",
                "Customer",
                "Salesperson",
                "Total",
                "Status"

            ],
            tablefoot: [
                "",
                "",
                "",
                "",
                "",
                "25,000,00",
                ""
            ],
            tabledata: {
                "row": {
                    "data": [
                        "SO014",
                        "03/08/2017 02:49:19",
                        "Camptocamp",
                        "Administrators",
                        "$ 0.00",
                        "Cancelled"
                    ],
<<<<<<< HEAD
                    "url": "/sales/salesorderview"
=======
                    "url": "/Sales/salesorderview"
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83

                },
                "row1": {
                    "data": [
                        "SO014",
                        "03/08/2017 02:49:19",
                        "Camptocamp",
                        "Administrators",
                        "$ 0.00",
                        "Quotation"
                    ],
<<<<<<< HEAD
                    "url": "/sales/salesorderview"
=======
                    "url": "/Sales/salesorderview"
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83

                },
                "row2": {
                    "data": [
                        "SO014",
                        "03/08/2017 02:49:19",
                        "Camptocamp",
                        "Administrators",
                        "$ 0.00",
                        "Cancelled"
                    ],
<<<<<<< HEAD
                    "url": "/sales/salesorderview"
=======
                    "url": "/Sales/salesorderview"
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83

                },

            }
        }
    },


    components: {
        DashboardController,
        TableMain
    }
}