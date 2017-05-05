import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Imported from "./../imported/imported.vue"



export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            head: "Refused Expenses / Import a File",
            title: "Import a File - Sprout",
            btncancellink: {
                cancelbtnlink: "/expenses/expensesrefused",

            },


        }
    },


    components: {
        DashboardController,
        Imported
    },

}