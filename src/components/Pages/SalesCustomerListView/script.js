import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"

export default{
    created: function () {
        $(function(){
            $('.samobuttopcontroller2').off('click');
            $('.samobuttopcontroller2').on('click', function () {
                let check = $('#aview').css("display");
                if(check == "none"){
                    $('#aview').show();
                    $('#aedit').hide();
                }else{
                    $('#aview').hide();
                    $('#aedit').show();
                }

            });
        });

    },
    data () {
        return {
            customers: "Customers",
            btnlinks: {
<<<<<<< HEAD
                createbtnlink:"/sales/newuser",
                importbtnlink: "/sales/salescustomerimport",
                firstbtnlink:"/sales/customers",
                secondbtnlink:"/sales/salescustomerlistview"
=======
                createbtnlink:"/Sales/newuser",
                importbtnlink: "/Sales/salescustomerimport",
                firstbtnlink:"/Sales/customers",
                secondbtnlink:"/Sales/salescustomerlistview"
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
            },
            tableheader: [
                "Name",
                "Phone",
                "Email",

            ],
            tablefooter:[
              "",
              "",
              "",
              "",
            ],
            tabledata: {
                "row": {
                    "data": [
                        "Agrolait",
                        "+32 10 588 558",
                        "agrolait@yourcompany.example.com",
                    ],
<<<<<<< HEAD
                    "url": "/sales/salescustomerview"
=======
                    "url": "/Sales/salescustomerview"
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83

                },
                "row1": {
                    "data": [
                        "Agrolait",
                        "+32 10 588 558",
                        "agrolait@yourcompany.example.com",
                    ],
<<<<<<< HEAD
                    "url": "/sales/salescustomerview"
=======
                    "url": "/Sales/salescustomerview"
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83

                },
                "row2": {
                    "data": [
                        "Agrolait",
                        "+32 10 588 558",
                        "agrolait@yourcompany.example.com",
                    ],
<<<<<<< HEAD
                    "url": "/sales/salescustomerview"
=======
                    "url": "/Sales/salescustomerview"
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