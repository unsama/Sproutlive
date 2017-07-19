import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import ProductEdit from "./../../partials/ProductEdit/ProductEdit.vue"
import Request_quotation_lower from "./../../partials/Request_quotation_lower/Request_quotation_lower.vue"
import Modal from "./../../partials/Modal/Modal.vue"
import Message from "./../../partials/Message/Message.vue"

export default{
    created: function(){
        $(function(){
            $(".colorbg").on("click", function (e) {
                e.preventDefault();
                var col = $(this).css("backgroundColor");
                var anch = $(this).parent().parent().parent().parent().parent().find("a:first-child");
                anch.css({"backgroundColor":col});
            });
        });
    },
    data () {
        return {
            vendormenu: "Customers / Agrolait",
            modal: "Open: Contacts",
            btnlinks: {
                createbtnlink: "#/app/attendance/Creatingemp",
<<<<<<< HEAD
                discardbtnlink: "#/app/sales/salescustomeredit",
=======
                discardbtnlink: "#/app/Sales/salescustomeredit",
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
                importbtnlink: "#/app/imported",
                editbtnlink: "#/app/attendance/Editcompany",
            },
        }
    },
    components: {
        DashboardController,
        ProductEdit,
        Request_quotation_lower,
        Modal,
        Message
    }
}