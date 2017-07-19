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
<<<<<<< HEAD
                createbtnlink: "/sales/salescustomeredit",
                discardbtnlink: "/sales/products",
                importbtnlink: "/sales/imported"
=======
                createbtnlink: "/Sales/salescustomeredit",
                discardbtnlink: "/Sales/products",
                importbtnlink: "/Sales/imported"
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
            },
        }
    },
    components: {
        DashboardController,
        ProductEdit,

    },

}