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
                createbtnlink:"/Sales/newuser",
                importbtnlink: "/Sales/salescustomerimport",
                firstbtnlink:"/Sales/customers",
                secondbtnlink:"/Sales/salescustomerlistview"
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
                    "url": "/Sales/salescustomerview"

                },
                "row1": {
                    "data": [
                        "Agrolait",
                        "+32 10 588 558",
                        "agrolait@yourcompany.example.com",
                    ],
                    "url": "/Sales/salescustomerview"

                },
                "row2": {
                    "data": [
                        "Agrolait",
                        "+32 10 588 558",
                        "agrolait@yourcompany.example.com",
                    ],
                    "url": "/Sales/salescustomerview"

                },

            }
        }
    },


    components: {
        DashboardController,
        TableMain
    }
}