import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import ProductEdit from "./../../partials/ProductEdit/ProductEdit.vue"
import Request_quotation_lower from "./../../partials/Request_quotation_lower/Request_quotation_lower.vue"
import Modal from "./../../partials/Modal/Modal.vue"
import Message from "./../../partials/Message/Message.vue"

export default{
    created: function(){
        document.title = this.title;
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
            title: "Users - Sprout",
            modal: "Open: Contacts",
            btnlinks: {
<<<<<<< HEAD
                createbtnlink: "/sales/salescustomercreate",
                discardbtnlink: "/sales/salescustomeredit",
                importbtnlink: "/sales/salescustomerimport",
                editbtnlink: "/sales/salescustomeredit",
=======
                createbtnlink: "/Sales/salescustomercreate",
                discardbtnlink: "/Sales/salescustomeredit",
                importbtnlink: "/Sales/salescustomerimport",
                editbtnlink: "/Sales/salescustomeredit",
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
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