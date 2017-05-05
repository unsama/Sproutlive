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
                savedbtnlink: "#/app/setting/",
                discardbtnlink: "#/app/setting/templatetablein",
            },
        }
    },


    components: {
        DashboardController,
        Templatetablecreatecompo

    }
}
