import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Imported from "./../Imported/Imported.vue"

export default{
    created: function(){
        $(function(){
            $('.samobuttopcontroller2').off('click');
            $('.samobuttopcontroller2').on('click', function () {
                let check = $('#customerform').css("display");
                if(check == "none"){
                    $('#customerform').show();
                    $('#customeredit').hide();
                }else{
                    $('#customerform').hide();
                    $('#customeredit').show();
                }

            });

            $("button.samosearchicon").click(function () {
                $(".samodropdownbutton2").toggle();
            });
        });
    },
    data () {
        return {
            activityimport: "Orders to Upsell / Import a File",
            btnlinks: {
<<<<<<< HEAD
                createbtnlink: "/sales/salescustomercreate",
                discardbtnlink: "/sales/salescustomeredit",
                importbtnlink: "/sales/salesordertoupsellimport",
                cancelbtnlink: "/sales/orderstoupsell",
=======
                createbtnlink: "/Sales/salescustomercreate",
                discardbtnlink: "/Sales/salescustomeredit",
                importbtnlink: "/Sales/salesordertoupsellimport",
                cancelbtnlink: "/Sales/orderstoupsell",
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
            },
        }
    },
    components: {
        DashboardController,
        Imported
    }
}