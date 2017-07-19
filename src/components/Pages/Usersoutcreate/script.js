import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Newuser from "./../../Pages/Newuser/Newuser.vue"


export default{
    created: function () {
        document.title = this.title;
    },
    data(){
        return {
            head: "Users / New",
            title: 'New - Sprout',
            btnlinks: {
<<<<<<< HEAD
                discardbtnlink: "/setting/users",
=======
                discardbtnlink: "#/app/setting/users",
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
                savebtnlink:"",

            },
        }
    },


    components: {
        DashboardController,
        Newuser

    }
}
