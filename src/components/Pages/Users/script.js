import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"


export default{
    created: function () {
        document.title = this.title;

    },
    data(){
        return {
            head: "Users",
            title: 'Users - Sprout',
            btnlinks: {
                createbtnlink: "/setting/usersoutcreate",
                importbtnlink: "/setting/usersimport",
            },
            tableheader: [
                "Name",
                "Login",
                "Language",
                "Latest Connection",

            ],
            tablefoot: [
                "",
                "",
                "",
                "",
                "",
            ],
            tabledata: {
                "row": {
                    "data": [
                        "Administrators",
                        "rajaunleashed@gmail.com",
                        "Pushto",
                        "12/6/19",
                    ],
                    "url": "/setting/usersin"
                },
            }
        }
    },


    components: {
        DashboardController,
        TableMain

    }
}
