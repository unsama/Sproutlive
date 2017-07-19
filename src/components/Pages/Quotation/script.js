import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            quotation: "Quotations",
            title: "Quotations - Sprout",
            btnlinks: {
<<<<<<< HEAD
                createbtnlink:"/sales/salesquotationcreate",
                importbtnlink:"/sales/salesquotationimport",
                cancelbtnlink:"/sales/quotation",
                firstbtnlink:"/sales/quotation",
                secondbtnlink:"/sales/salesquotationgridview",
=======
                createbtnlink:"/Sales/salesquotationcreate",
                importbtnlink:"/Sales/salesquotationimport",
                cancelbtnlink:"/Sales/quotation",
                firstbtnlink:"/Sales/quotation",
                secondbtnlink:"/Sales/salesquotationgridview",
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
                "",
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
                    "url": "/sales/salesquotationview"
=======
                    "url": "/Sales/salesquotationview"
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
                    "url": "/sales/salesquotationview"
=======
                    "url": "/Sales/salesquotationview"
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
        TableMain
    }
}