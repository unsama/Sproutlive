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
                createbtnlink:"#/app/Sales/salesnextactivitiescreate",
                importbtnlink:"#/app/Sales/salesnextactivityimport",
                firstbtnlink:"#/app/Sales/nextactivities",
                secondbtnlink:"#/app/Sales/salesnextactivitylistview",
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