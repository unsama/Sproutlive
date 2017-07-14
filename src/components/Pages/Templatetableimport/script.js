import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Imported from "./../../Pages/Imported/Imported.vue"

export default{
    created: function () {

    },
    data(){
        return{
            nextactivity: "Templates / Import a File",
            btnlinks: {
                importbtnlink: "#app/setting/Manage",
                cancelbtnlink:"#app/setting/Templatetable"

            },
        }
    },
    components: {

        DashboardController,
        Imported


    }
}