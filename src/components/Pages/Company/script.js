import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Tabledrag from "./../../partials/Tabledrag/Tabledrag.vue"


export default{
    created: function () {
        document.title = this.title;

    },
    data(){
        return {
            head: "Companies",
            title: 'Companies - Sprout',
            btnlinks: {
                createbtnlink: "/setting/companycreate",
                importbtnlink: "/setting/companyimport",
            },
            tableheader: [
                "Company Name",
                "Partner",
                "",
                "",
            ],
            tablefoot: [
                "",
                "",
                "",
                "",
                "",
                "",
            ],
            tabledata: {
                "row": {
                    "data": [
                        "ALU pak industries",
                        "alupak industries",
                        "",
                        "",
                    ],
                    "url": "/#/app/setting/companyin"
                },
                "row1": {
                    "data": [
                        "My industries",
                        "my industries",
                        "",
                        "",
                    ],
                    "url": "/#/app/setting/usersin"
                },
            }
        }
    },


    components: {
        DashboardController,
        Tabledrag

    }
}
