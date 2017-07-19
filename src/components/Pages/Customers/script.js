import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Vendor_Boxes from "./../../partials/Vendor_Boxes/Vendor_Boxes.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            customers: "Customers",
            title : "Customers - Sprout",
            btnlinks: {
<<<<<<< HEAD
                createbtnlink: "/sales/salescustomercreate",
                importbtnlink: "/sales/imported",
                firstbtnlink: "/sales/customers",
                secondbtnlink: "/sales/salescustomerlistview"
=======
                createbtnlink: "/Sales/salescustomercreate",
                importbtnlink: "/Sales/imported",
                firstbtnlink: "/Sales/customers",
                secondbtnlink: "/Sales/salescustomerlistview"
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
            },
        }
    },
    components: {
        DashboardController,
        Vendor_Boxes
    },

}