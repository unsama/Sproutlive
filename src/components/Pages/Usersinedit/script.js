import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Newuser from "./../../Pages/Newuser/Newuser.vue"


export default{
    created: function () {
        document.title = this.title;
    },
    data(){
        return {
            head: "Users / Administrators",
            title: 'Administrators - Sprout',
            btnlinks: {
                discardbtnlink: "#/app/setting/usersin",
                savedbtnlink: "#/app/setting/"
            },
        }
    },


    components: {
        DashboardController,
        Newuser

    }
}
