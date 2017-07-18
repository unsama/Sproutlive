import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import ProductEdit from "./../../partials/ProductEdit/ProductEdit.vue"
import PipelineComponent from "./../../partials/PipelineComponent/PipelineComponent.vue"
import Modal from "./../../partials/Modal/Modal.vue"

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
            vendormenu: "Customers / Issues",
            modal: "Open: Contacts",
            btnlinks: {
                createbtnlink: "/Sales/salescustomercreate",
                discardbtnlink: "/Sales/salescustomeredit",
                importbtnlink: "/Sales/imported",
                editbtnlink: "/Sales/salescustomeredit",
            },
        }
    },
    components: {
        DashboardController,
        ProductEdit,
        PipelineComponent,
        Modal
    }
}