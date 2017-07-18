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
                createbtnlink: "/Sales/salescustomercreate",
                importbtnlink: "/Sales/imported",
                firstbtnlink: "/Sales/customers",
                secondbtnlink: "/Sales/salescustomerlistview"
            },
        }
    },
    components: {
        DashboardController,
        Vendor_Boxes
    },

}