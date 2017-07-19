import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Imported from "./../../Pages/Imported/Imported.vue"

export default{
    created: function () {

    },
    data(){
        return{
            nextactivity: "Templates / Import a File",
            btnlinks: {
<<<<<<< HEAD
                importbtnlink: "/setting/Manage",
                cancelbtnlink:"/setting/Templatetable"
=======
                importbtnlink: "#app/setting/Manage",
                cancelbtnlink:"#app/setting/Templatetable"
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83

            },
        }
    },
    components: {

        DashboardController,
        Imported


    }
}