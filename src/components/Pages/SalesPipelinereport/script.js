import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Pivot from "./../../partials/Pivot/Pivot.vue"
import Imported from "./../Imported/Imported.vue"

export default{
    created: function(){
        document.title = this.title;
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
            activityimport: "Pipeline Analysis",
            title: "Pipeline Analysis - Sprout",
            btnlinks: {
<<<<<<< HEAD
                createbtnlink: "/sales/salescustomercreate",
                discardbtnlink: "/sales/salescustomeredit",
                importbtnlink: "/sales/salesofinvoiceimport",
                cancelbtnlink: "/sales/salesofinvoices",
=======
                createbtnlink: "/Sales/salescustomercreate",
                discardbtnlink: "/Sales/salescustomeredit",
                importbtnlink: "/Sales/salesofinvoiceimport",
                cancelbtnlink: "/Sales/salesofinvoices",
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
            },
        }
    },
    components: {
        DashboardController,
        Imported,
        Pivot
    }
}