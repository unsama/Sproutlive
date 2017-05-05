import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Tabs from "./../../partials/Tabs/Tabs.vue"


export default{
    created: function () {
        document.title = this.title;
    },
    data(){
        return {
            head: "Users / Administrators",
            title: 'Administrators - Sprout',
            btnlinks: {
                createbtnlink: "#/app/setting/usersincreate",
                editbtnlink: "#/app/setting/usersinedit"
            },
        }
    },


    components: {
        DashboardController,
        Tabs

    }
}
