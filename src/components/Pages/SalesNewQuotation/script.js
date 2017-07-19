import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Modal from "./../../partials/Modal/Modal.vue"
import SalesofInvoiceCreate from "./../../Pages/SalesofInvoiceCreate/SalesofInvoiceCreate.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            salesnextactivities: "Next Activities / Need to customize the solution / New",
            btnlinks: {
<<<<<<< HEAD
                createbtnlink: "/sales/salescustomeredit",
                discardbtnlink: "/sales/Salesnextactivityview",
                importbtnlink: "/sales//imported"
=======
                createbtnlink: "/Sales/salescustomeredit",
                discardbtnlink: "/Sales/Salesnextactivityview",
                importbtnlink: "/Sales//imported"
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
            },
        }
    },
    components: {
        DashboardController,
        Modal,
        SalesofInvoiceCreate
    },

}