import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            salesofinvoices: "Sales to Invoice",
            title: "Sales to Invoice -sprout",
            btnlinks: {
<<<<<<< HEAD
                createbtnlink:"/sales/salesofinvoicecreate",
                importbtnlink:"/sales/salesofinvoiceimport"
=======
                createbtnlink:"/Sales/salesofinvoicecreate",
                importbtnlink:"/Sales/salesofinvoiceimport"
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
                "25,000,00"
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
                    "url": "/sales/saleofinvoiceview"
=======
                    "url": "/Sales/saleofinvoiceview"
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
                    "url": "/sales/saleofinvoiceview"
=======
                    "url": "/Sales/saleofinvoiceview"
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
                    "url": "/sales/saleofinvoiceview"
=======
                    "url": "/Sales/saleofinvoiceview"
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