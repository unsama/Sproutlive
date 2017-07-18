import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Calendar from "./../../partials/Calendar/Calendar.vue"


export default{
    created: function(){
        console.log("this is some check")
    },
    data () {
        return {
            nextactivity: "Dashboard / Meetings (Week 13)",
            modal: "Log an Activity",
            btnlinks: {
                createbtnlink: "/Sales/salesnextactivitiescreate",
                discardbtnlink: "/Sales/customers",
                importbtnlink: "/Sales/app/imported",
                editbtnlink: "/Sales/salesnextactivityedit"
            },
        }
    },
    components: {
        DashboardController,
        Calendar


    }

}