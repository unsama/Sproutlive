import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import ProductEdit from "./../../partials/ProductEdit/ProductEdit.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            nextactivity: "Products / New",
            btnlinks: {
                createbtnlink: "/Sales/salescustomeredit",
                discardbtnlink: "/Sales/products",
                importbtnlink: "/Sales/imported"
            },
        }
    },
    components: {
        DashboardController,
        ProductEdit,

    },

}