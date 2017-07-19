import DashboardController from "./../DashboardController/DashboardController.vue"
// import Request_Quotation_Lower from "./../Request_Quotation_Lower/Request_Quotation_Lower.vue"
import Request_Quotation_Lower from "./../Request_quotation_lower/Request_quotation_lower.vue"

export default{
    created: function () {
        $(function(){
            $('.samobuttopcontroller2').off('click');
            $('.samobuttopcontroller2').on('click', function () {
                let check = $('#createform').css("display");
                if(check == "none"){
                    $('#createform').show();
                    $('#createedit').hide();
                }else{
                    $('#createform').hide();
                    $('#createedit').show();
                }

            });
        });
    },
    props: [
        "edit",

    ],
    data () {
        return {
            nextactivity: "Next ActivitiesNeed / to customize the solution",
            btnlinks: {
<<<<<<< HEAD
                createbtnlink: "#/app/sales/salescustomeredit",
                discardbtnlink: "#/app/sales/customers",
=======
                createbtnlink: "#/app/Sales/salescustomeredit",
                discardbtnlink: "#/app/Sales/customers",
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
                importbtnlink: "#/app/imported"
            },
        }
    },
    components: {
        DashboardController,
        Request_Quotation_Lower
    },


}