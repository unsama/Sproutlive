import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Import_Board from "./../../partials/Import_Board/Import_Board.vue"

export default{
    created: function () {
        document.title = this.title;


    },
    data () {
        return {
            salesorder: "Orders to Upsell",
            title: "Orders to Upsell - Sprout",
            btnlinks: {
<<<<<<< HEAD
                createbtnlink: "/sales/ordertoupsellcreate",
                importbtnlink: "/sales/salesordertoupsellimport"
=======
                createbtnlink: "/Sales/ordertoupsellcreate",
                importbtnlink: "/Sales/salesordertoupsellimport"
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
            },
        }
    },

    components: {
        DashboardController,
        Import_Board

    }
}