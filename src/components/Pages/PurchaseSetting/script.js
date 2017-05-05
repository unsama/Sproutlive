import TopController from "./../../partials/TopController/TopController.vue"

export default{
    created: function(){
        document.title = this.title;
        $(document).ready(function () {
            $("button.samosearchicon").click(function () {
                $(".samodropdownbutton2").toggle();
            });
        });
    },

    components: {
        TopController,
    }
}