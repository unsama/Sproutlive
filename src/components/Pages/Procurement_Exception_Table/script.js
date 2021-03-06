import TableMain from "./../../partials/TableMain/TableMain.vue"
import Request_quotation_lower from "./../../partials/Request_quotation_lower/Request_quotation_lower.vue"
import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Message from "./../../partials/Message/Message.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
    return {
        nextactivity: "Procurement Exceptions / OP/00002",
        btnlinks: {
            createbtnlink:"#/app/inventory/procurement_exception_create",
            importbtnlink:"#/app/imported",
            editbtnlink:"#/app/inventory/procurement_exception_edit"
        },
        tableheader: [
            "Reference",
            "Destination Location Zone",
            "Partner",
            "Schduled Date",
            "Source Document",
            "Back Order Of",
            "Status",

        ],
        tabledata: {
            "row": {
                "data": [
                    "Chic/In/0004",
                    "Chic/Stock",
                    "AsusTek",
                    "01/28/2017 19:23:00",
                    "Chicago Warehouse",
                    "Proposition",
                    "Available",

                ],
<<<<<<< HEAD
                "url": "/#/app/sales/request_quotation_inner"
=======
                "url": "/#/app/Sales/request_quotation_inner"
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83

            },
            "row1": {
                "data": [
                    "Chic/In/0004",
                    "Chic/Stock",
                    "AsusTek",
                    "01/28/2017 19:23:00",
                    "Chicago Warehouse",
                    "Proposition",
                    "Available",

                ],
<<<<<<< HEAD
                "url": "/#/app/sales/request_quotation_inner"
=======
                "url": "/#/app/Sales/request_quotation_inner"
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83

            },
            "row2": {
                "data": [
                    "Chic/In/0004",
                    "Chic/Stock",
                    "AsusTek",
                    "01/28/2017 19:23:00",
                    "Chicago Warehouse",
                    "Proposition",
                    "Available",

                ],
<<<<<<< HEAD
                "url": "/#/app/sales/request_quotation_inner"
=======
                "url": "/#/app/Sales/request_quotation_inner"
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83

            },

        }
    }
},


components: {
    TableMain,
        Request_quotation_lower,
        DashboardController,
        Message,
}
}