import Emptyform from "./../Emptyform/Emptyform.vue"
import ModelDescription from "./../Modeldescription/Modeldescription.vue"
import Componame from "./../Componame/Componame.vue"
import Tableview from "./../Tableview/Tableview.vue"
import DashboardController from "./../DashboardController/DashboardController.vue"



export default{
    created: function(){
<<<<<<< HEAD
        var self = this;
        $(function () {
           self.submit();
        });
=======
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
        $(document).ready(function () {
            $("button.samosearchicon").click(function () {
                $(".samodropdownbutton2").toggle();
            });
        });
    },
<<<<<<< HEAD
    data(){
        return {
            title: 'Discuss',
            options: '',
            userinfo: '',
        };
    },

    computed: {
        fullname: function () {
            return this.first + " " + this.last;
        }
    },
    methods: {
        select: function () {
            var self = this;
            //alert(self.companyName);
            self.$http.post("/user_info", {"username": self.username}).then(function(res){self.userinfo =res.body.data[0];},function(err){
                console.log(self.userinfo);
                alert(err);
            });

        },
        validateBeforeSubmit() {
            this.$validator.validateAll().then(() => {
                // eslint-disable-next-line

                this.submit();
                alert('From Submitted!');
            }).catch(() => {
                // eslint-disable-next-line
                alert('Correct them errors!');
            });
=======

    data(){
        return {
            btneditlinks: {
                editbtnlinks:"#/app/setting/newuser",
                discardbtnlinks:"#/app/setting/tabs"
            },

>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
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
