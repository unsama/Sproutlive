import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Templatetablecreatecompo from "./../../partials/Templatetablecreatecompo/Templatetablecreatecompo.vue"

export default{
    created: function () {
        document.title = this.title;

    },
    data(){
        return {
            head: "Templates / Partner Review",
            title: 'Partner Review - Sprout',
            btnlinks: {
<<<<<<< HEAD
                savebtnlink: "#/app/setting/",
                discardbtnlink: "/setting/templatetablein",
=======
                savedbtnlink: "#/app/setting/",
                discardbtnlink: "#/app/setting/templatetablein",
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
            },
        }
    },


    components: {
        DashboardController,
        Templatetablecreatecompo

    }
}
