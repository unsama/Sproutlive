import TableMain from "./../../partials/TableMain/TableMain.vue"
import Request_quotation_lower from "./../../partials/Request_quotation_lower/Request_quotation_lower.vue"
import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Modal from "./../../partials/Modal/Modal.vue"
import Topcontroller from "./../../partials/Topcontroller/Topcontroller.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
    return {
        nextactivity: "Inventory Valuation / CARD: 3.0Unit(s)",
        modal2: "Open: History",
        btnlinks: {
            createbtnlink:"#/app/inventory/all_transfer_create",
            editbtnlink:"#/app/inventory/all_transfer_edit",
        },
        tableheader: [
            "Transfer Reference",
            "Quantity",
            "Partner",


        ],
        tabledata: {
            "row": {
                "data": [
                    "Chic/In/0004",
                    "Chic/Stock",
                    "AsusTek",


                ],
                "url": "",
                "modal": ".bd-example-modal-lg3"

            },
            "row1": {
                "data": [
                    "Chic/In/0004",
                    "Chic/Stock",
                    "AsusTek",


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
        Modal,
        Topcontroller,
}
}