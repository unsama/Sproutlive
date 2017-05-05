import Emptyform from "./../Emptyform/Emptyform.vue"
import ModelDescription from "./../ModelDescription/ModelDescription.vue"
import Componame from "./../Componame/Componame.vue"
import Tableview from "./..//Tableview/Tableview.vue"
import DashboardController from "./../DashboardController/DashboardController.vue"



export default{
    created: function(){
        $(document).ready(function () {
            $("button.samosearchicon").click(function () {
                $(".samodropdownbutton2").toggle();
            });
        });
    },

    data(){
        return {
            btneditlinks: {
                editbtnlinks:"#/app/setting/newuser",
                discardbtnlinks:"#/app/setting/tabs"
            },

        }
    },



    components: {
        Emptyform,
        ModelDescription,
        Componame,
        Tableview,
        dashconterller: DashboardController

    }

}
