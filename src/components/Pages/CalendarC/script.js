import Sidebar from "./../../partials/Sidebar/Sidebar.vue"
import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Topcontroller from "./../../partials/Topcontroller/Topcontroller.vue"
import CalendarT from "./../../partials/CalendarT/CalendarT.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            quotation: "Calendar",
            btnlinks: {
<<<<<<< HEAD
                createbtnlink:"#/app/sales/salesnextactivitiescreate",
                importbtnlink:"#/app/sales/salesnextactivityimport",
                firstbtnlink:"#/app/sales/nextactivities",
                secondbtnlink:"#/app/sales/salesnextactivitylistview",
=======
                createbtnlink:"#/app/Sales/salesnextactivitiescreate",
                importbtnlink:"#/app/Sales/salesnextactivityimport",
                firstbtnlink:"#/app/Sales/nextactivities",
                secondbtnlink:"#/app/Sales/salesnextactivitylistview",
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
            },
        }
    },

    components: {
        Sidebar,
        DashboardController,
        Topcontroller,
        CalendarT

    }

}