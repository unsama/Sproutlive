import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Tablemain from "./../../partials/Tablemain/Tablemain.vue"



export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            nextactivity: "Expense Reports To pay",
            btnlinks: {
                createbtnlink: "/expenses/expensespaycreate",
                importbtnlink: "/expenses/expensespayimport",
                firstbtnlink:"/expenses/expensespaygrid",
                secondbtnlink:"/expenses/expensespay",

            },



        }
    },


    components: {
        DashboardController,
        Tablemain,
    },

}