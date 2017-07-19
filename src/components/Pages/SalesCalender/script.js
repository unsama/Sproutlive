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
<<<<<<< HEAD
                createbtnlink: "/sales/salesnextactivitiescreate",
                discardbtnlink: "/sales/customers",
                importbtnlink: "/sales/app/imported",
                editbtnlink: "/sales/salesnextactivityedit"
=======
                createbtnlink: "/Sales/salesnextactivitiescreate",
                discardbtnlink: "/Sales/customers",
                importbtnlink: "/Sales/app/imported",
                editbtnlink: "/Sales/salesnextactivityedit"
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
            },
        }
    },
    components: {
        DashboardController,
        Calendar


    }

}