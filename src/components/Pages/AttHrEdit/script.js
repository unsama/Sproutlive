import Emptyform from "./../../partials/Emptyform/Emptyform.vue"
import Tabs from "./../../partials/Tabs/Tabs.vue"
import ModelDescription from "./../../partials/Modeldescription/Modeldescription.vue"
import Componame from "./../../partials/Componame/Componame.vue"
import Tableview from "./../../partials/Tableview/Tableview.vue"
import Editing from "./../../partials/Editing/Editing.vue"
import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Message from "./../../partials/Message/Message.vue"
import Request_quotation_lower from "./../../partials/Request_quotation_lower/Request_quotation_lower.vue"


export default{
    created: function () {
        $(document).ready(function() {
            $('.dateRangePicker')
                .datepicker({
                    format: 'mm/dd/yyyy',
                    startDate: '01/01/2010',
                    endDate: '12/30/2020'
                })
        });

        $(document).ready(function() {
            $('.dateRangePicker1')
                .datepicker({
                    format: 'mm/dd/yyyy ',
                    startDate: '01/01/2010',
                    endDate: '12/30/2020'
                });
            $('.datetimepicker1').datetimepicker();
        });

        $('#openBtn').click(function(){
            $('#myModal').modal({show:true})
        });


    },
    data(){
        return{

            nextactivity: "Attendances/hassan from 2017-03-14 12:53:47 to 2017-03-23 12:53:50/hassan",
            btnlinks: {
                createbtnlink: "#/app/sales/salescustomeredit",
                discardbtnlink: "#/app/attendance/AttHr",
                importbtnlink: "#/app/imported",
                editbtnlink:""
            },
        }
    },
    components: {
        Emptyform,
        Tabs,
        ModelDescription,
        Componame,
        Tableview,
        Editing,
        Message,
        Request_quotation_lower,
        dashconterller: DashboardController


    }
}