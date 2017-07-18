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
                createbtnlink:"/Sales/salesofinvoicecreate",
                importbtnlink:"/Sales/salesofinvoiceimport"
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
                    "url": "/Sales/saleofinvoiceview"

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
                    "url": "/Sales/saleofinvoiceview"

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
                    "url": "/Sales/saleofinvoiceview"

                },

            }
        }
    },


    components: {
        DashboardController,
        TableMain
    }
}