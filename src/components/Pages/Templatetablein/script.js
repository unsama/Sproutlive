import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Templatetableincompo from "./../../partials/Templatetableincompo/Templatetableincompo.vue"

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
                createbtnlink: "/setting/templatetablecreate",
                editbtnlink: "/setting/templatetableedit",
=======
                createbtnlink: "#/app/setting/templatetablecreate",
                editbtnlink: "#/app/setting/templatetableedit",
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
            },
        }
    },


    components: {
        DashboardController,
        Templatetableincompo

    }
}
