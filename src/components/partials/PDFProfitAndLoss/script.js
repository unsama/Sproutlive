import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"

export default{
    created: function () {
        document.title = this.title;
        $(function () {
            $("#tb").hide();
            $("#tabs").hide();
            $("#table").hide();
            $("#table2").hide();
            $("#tbl").hide();

            $( "#check1" ).on("change", function() {
                var selVal = $(this).val();
                if(selVal == "View") {
                    $("#tb").hide();
                    $("#tabs").hide();
                    $("#table").hide();
                    $("#table2").hide();
                    $("#tbl").hide();
                }
                else if (selVal == "Accounts") {
                    $("#tb").show();
                    $("#tabs").show();
                    $("#table").show();
                    $("#table2").hide();
                    $("#tbl").hide();
                }
                else if (selVal == "Account Type") {
                    $("#tb").hide();
                    $("#tabs").show();
                    $("#table").show();
                    $("#table2").hide();
                    $("#tbl").show();
                }
                else if (selVal == "Report Value") {
                    $("#tb").hide();
                    $("#tabs").show();
                    $("#table").hide();
                    $("#table2").show();
                    $("#tbl").hide();
                }


            });

        });


        $(function () {
            $("#tab1").hide();
            $("#tab2").hide();
            $("#tabs1").hide();

            $("#chkbox").click(function() {

                if($(this).is(":checked")) {
                    $("#tab1").show();
                    $("#tabs1").show();
                    $("#td1").hide();
                    $("#td2").hide();
                }
                else {
                    $("#tab1").hide();
                    $("#tab2").hide();
                    $("#tabs1").hide();
                    $("#td1").show();
                    $("#td2").show();

                }




            });

        });

        $(function () {
            $( "#o_field_input_18" ).on("change", function() {
                var selVal = $(this).val();
                if(selVal == "nofilter") {
                    $("#tab2").hide();

                }
                else if (selVal == "date") {
                    $("#tab2").show();

                }


            });

        });





    },
    data () {
        return {
            nextactivity: "Next Activity",
            btnlinks: {
<<<<<<< HEAD
                createbtnlink:"#/app/sales/nextactivitiescreate",
=======
                createbtnlink:"#/app/Sales/nextactivitiescreate",
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
                importbtnlink:"#/app/imported"
            },
            tableheader: [
                "Code",
                "Name",
                "Type",
                "Account Type",
                "Company"

            ],
            tabledata: {
                "row": {
                    "data": [
                        "Need 20 ",
                        "Demo",
                        "Need 20 Days of Consultancy",
                        "Need of tancy",
                        "testt"
                    ],
<<<<<<< HEAD
                    "url": "/#/app/sales/request_quotation_inner"
=======
                    "url": "/#/app/Sales/request_quotation_inner"
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83

                },
                "row1": {
                    "data": [
                        "Need 20 Days of Consultancy",
                        "Demo",
                        "Need 20 Days of Consultancy",
                        "Need 20 Days of Consultancy",
                        "test"
                    ],
<<<<<<< HEAD
                    "url": "/#/app/sales/request_quotation_inner"
=======
                    "url": "/#/app/Sales/request_quotation_inner"
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83

                },
                "row2": {
                    "data": [
                        "Need 20 Days of Consultancy",
                        "Demo",
                        "Need 20 Days of Consultancy",
                        "Need 20 Days of Consultancy",
                        "test"
                    ],
<<<<<<< HEAD
                    "url": "/#/app/sales/request_quotation_inner"
=======
                    "url": "/#/app/Sales/request_quotation_inner"
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83

                },

            },
            tableheader1: [

                "Account Type",
                "Type"

            ],
            tabledata1: {
                "row": {
                    "data": [
                        " ",
                        " "
                    ],
<<<<<<< HEAD
                    "url": "/#/app/sales/request_quotation_inner"
=======
                    "url": "/#/app/Sales/request_quotation_inner"
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83

                },
                "row1": {
                    "data": [
                        " ",
                        " "
                    ],
<<<<<<< HEAD
                    "url": "/#/app/sales/request_quotation_inner"
=======
                    "url": "/#/app/Sales/request_quotation_inner"
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83

                },
                "row2": {
                    "data": [
                        " ",
                        " "
                    ],
<<<<<<< HEAD
                    "url": "/#/app/sales/request_quotation_inner"
=======
                    "url": "/#/app/Sales/request_quotation_inner"
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83

                },

            }
        }
    },


    components: {
        DashboardController,
        TableMain
    }
}