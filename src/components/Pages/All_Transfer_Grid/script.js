import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Grid_View from "./../../partials/Grid_View/Grid_View.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
    return {
        quotation: "Stock Operations",
        title: "Stock Operations - Sprout",
        btnlinks: {
<<<<<<< HEAD
            createbtnlink:"/sales/salesquotationcreate",
            importbtnlink:"/sales/salesquotationimport",
            cancelbtnlink:"/sales/quotation",
=======
            createbtnlink:"/Sales/salesquotationcreate",
            importbtnlink:"/Sales/salesquotationimport",
            cancelbtnlink:"/Sales/quotation",
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
            firstbtnlink:"/inventory/all_transfer_grid",
            secondbtnlink:"/inventory/all_transfers",
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
                "url": "/#/app/sales/salesquotationview"
=======
                "url": "/#/app/Sales/salesquotationview"
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
                "url": "/#/app/sales/salesquotationview"
=======
                "url": "/#/app/Sales/salesquotationview"
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
                "url": "/#/app/sales/salesquotationview"
=======
                "url": "/#/app/Sales/salesquotationview"
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83

            },

        }
    }
},


components: {
    DashboardController,
        Grid_View
}
}