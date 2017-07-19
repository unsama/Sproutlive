import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import ProductEdit from "./../../partials/ProductEdit/ProductEdit.vue"
import Request_quotation_lower from "./../../partials/Request_quotation_lower/Request_quotation_lower.vue"
import Message from "./../../partials/Message/Message.vue"
import Modal from "./../../partials/Modal/Modal.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"

export default{
    created: function(){
        $(function(){


            $("button.samosearchicon").click(function () {
                $(".samodropdownbutton2").toggle();
            });
        });
    },
    data () {
        return {
            vendormenu: "Customers / Agrolait",
            modal: "Open: Contacts",
            modal1: "Open: Title",
            modal2: "Open: Account Receivable",
            modal3: "Open: Account Payable",
            btnlinks: {
<<<<<<< HEAD
                createbtnlink: "/sales/salescustomercreate",
                discardbtnlink: "/sales/salescustomerview",
                importbtnlink: "/sales/app/imported",
=======
                createbtnlink: "/Sales/salescustomercreate",
                discardbtnlink: "/Sales/salescustomerview",
                importbtnlink: "/Sales/app/imported",
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
            },
            tableheader: [
                "Name"
            ],
            tabledata: {
                "row": {
                    "data": [
                        "Add an Items",

                    ],
<<<<<<< HEAD
                    "url": "/sales/request_quotation_inner"
=======
                    "url": "/Sales/request_quotation_inner"
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83

                },
                "row1": {
                    "data": [
                        "",

                    ],
<<<<<<< HEAD
                    "url": "/sales/request_quotation_inner"
=======
                    "url": "/Sales/request_quotation_inner"
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83

                },
                "row2": {
                    "data": [
                        "",


                    ],
<<<<<<< HEAD
                    "url": "/sales/request_quotation_inner"
=======
                    "url": "/Sales/request_quotation_inner"
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83

                },

            }
        }
    },

    components: {
        DashboardController,
        ProductEdit,
        Request_quotation_lower,
        Message,
        Modal,
        TableMain
    }
}