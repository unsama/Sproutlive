import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Pivot from "./../../partials/Pivot/Pivot.vue"
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
            activityimport: "Departments/Attendance Analysis",
            btnlinks: {
<<<<<<< HEAD
                createbtnlink: "#/app/sales/salescustomercreate",
                discardbtnlink: "#/app/sales/salescustomeredit",
                importbtnlink: "#/app/sales/salesofinvoiceimport",
                cancelbtnlink: "#/app/sales/salesofinvoices",
=======
                createbtnlink: "#/app/Sales/salescustomercreate",
                discardbtnlink: "#/app/Sales/salescustomeredit",
                importbtnlink: "#/app/Sales/salesofinvoiceimport",
                cancelbtnlink: "#/app/Sales/salesofinvoices",
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