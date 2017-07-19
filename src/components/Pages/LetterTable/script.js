import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"

export default{
    created: function () {
        $(function () {
            $(".colorbg").on("click", function (e) {
                e.preventDefault();
                var col = $(this).css("backgroundColor");
                var parent = $(this).parent().parent().parent().parent().parent().parent().parent().parent().parent().parent();
                parent.css({"backgroundColor":col});
                var subparent = $(this).parent().parent().parent().parent().parent();
                subparent.css({"backgroundColor":col});
            });
        });


    },
    data () {
        return {
            nextactivity: "Resumes and Letters",
            dashboard: "Dashboard",
            btnlinks: {
                createbtnlink: "#/app/Employees/Dep",
<<<<<<< HEAD
                discardbtnlink: "#/app/sales/Salesnextactivityview",
=======
                discardbtnlink: "#/app/Sales/Salesnextactivityview",
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
                importbtnlink: "#/app/imported",
                secondbtnlink: "#/app/Employees/TableDep",
                firstbtnlink: "#/app/Recruitment/Letters",
            },
            tableheader: [
                "  Attachment Name",
                " File Name",
                " Resource Model",
                " Resource Feild",
                " Resource Id",
                " Type",
                " Company",
                " Owner",
                " Date Created",

            ],
            tablefooter:[
                "",
                "",
                "",
                "",
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
                        "Williams_CV.doc",
                        "Williams_CV.doc",
                        "hr.applicant",
                        "",
                        "9",
                        "URL",
                        "Alupak Industriess",
                        "Administrators",
                        "02/12/2017 08:12:40",


                    ],
                    "url": "#/app/Recruitment/ResumeandLetters"


                },

            },

        }
    },

    components: {
        DashboardController,
        TableMain,



    }

}