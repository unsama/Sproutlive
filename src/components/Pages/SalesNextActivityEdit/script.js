import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Tabledrag from "./../../partials/Tabledrag/Tabledrag.vue"
import Message from "./../../partials/Message/Message.vue"
import Modal from "./../../partials/Modal/Modal.vue"
// import Request_Quotation_Lower from "./../../partials/Request_Quotation_Lower/Request_Quotation_Lower.vue"
import Request_Quotation_Lower from "./../../partials/Request_quotation_lower/Request_quotation_lower.vue"

export default{
    created: function () {



    },
    data () {
        return {
            activities: "Activities / Email",
            modal: "Open: Contacts",
            btnlinks: {
<<<<<<< HEAD
                createbtnlink:"/sales/newuser",
                importbtnlink:"/sales/imported",
                discardbtnlink:"/sales/Salesnextactivityview"
=======
                createbtnlink:"/Sales/newuser",
                importbtnlink:"/Sales/imported",
                discardbtnlink:"/Sales/Salesnextactivityview"
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
            },
            tableheader: [
                "Pricelist Name",
                "Currency"

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
        Tabledrag,
        Request_Quotation_Lower,
        Message,
        Modal
    }
}