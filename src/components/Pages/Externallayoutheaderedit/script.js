import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
<<<<<<< HEAD:src/components/Pages/Externallayoutheaderedit/script.js
=======
import Newuser from "./../../Pages/Newuser/Newuser.vue"
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83:src/components/Pages/Usersincreate/script.js


export default{
    created: function () {
        document.title = this.title;
<<<<<<< HEAD:src/components/Pages/Externallayoutheaderedit/script.js
        $(function(){
            CKEDITOR.replace('editor1');
        });

    },
    data () {
        return {
            activityimport: "",
            btnlinks: {
                savebtnlink: "",
                discardbtnlink: "/setting/externallayoutheader",
            },
        }
    },
    components: {
        DashboardController,
=======
    },
    data(){
        return {
            head: "Users / New",
            title: 'New - Sprout',
            btnlinks: {
                discardbtnlink: "#/app/setting/users",
                savedbtnlink: "#/app/setting/"
            },
        }
    },


    components: {
        DashboardController,
        Newuser

>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83:src/components/Pages/Usersincreate/script.js
    }
}
