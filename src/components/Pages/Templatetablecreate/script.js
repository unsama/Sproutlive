import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Templatetablecreatecompo from "./../../partials/Templatetablecreatecompo/Templatetablecreatecompo.vue"

export default{
    created: function () {
        document.title = this.title;

    },
    data(){
        return {
            head: "Templates / New",
            title: 'New - Sprout',
            btnlinks: {
                savedbtnlink: "#/app/setting/",
                discardbtnlink: "#/app/setting/Templatetable",
            },
        }
    },


    components: {
        DashboardController,
        Templatetablecreatecompo

    }
}
