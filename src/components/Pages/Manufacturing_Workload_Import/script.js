import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Imported from "./../Imported/Imported.vue"

export default{
    created: function(){
        document.title = this.title;

    },
    data () {
        return {
            activityimport: "Workorder Messages / Import a File",
            title: "Import a File - Sprout",
            btnlinks: {
<<<<<<< HEAD
                createbtnlink: "#/app/sales/salescustomercreate",
                discardbtnlink: "#/app/sales/salescustomeredit",
                importbtnlink: "#/app/sales/salesnextactivityimport",
=======
                createbtnlink: "#/app/Sales/salescustomercreate",
                discardbtnlink: "#/app/Sales/salescustomeredit",
                importbtnlink: "#/app/Sales/salesnextactivityimport",
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
                cancelbtnlink:"/manufacturing_order"
            },
        }
    },
    components: {
        DashboardController,
        Imported
    }
}