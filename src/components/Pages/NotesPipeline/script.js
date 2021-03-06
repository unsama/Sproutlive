import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Modal from "./../../partials/Modal/Modal.vue"
import ScheduleanActivity from "./../../partials/ScheduleanActivity/ScheduleanActivity.vue"


export default{
    created: function () {
        $(function () {
            $("#sortable1, #sortable2").sortable({
                connectWith: ".connectedSortable"
            }).disableSelection();

            $("#click").on("click", function () {
                $('#opencreate').toggle();
            });
            $("#click1").on("click", function () {
                $('#opencreate1').toggle();
            });
            $("#click2").on("click", function () {
                $('#opencreate2').toggle();
            });
            $("#click3").on("click", function () {
                $('#opencreate3').toggle();
            });
            $("#addnew").on("click", function () {
                $('#addshow').show();
                $('#addnew').hide();
            });
            $("#discard").on("click", function () {
                $('#addnew').show();
                $('#addshow').hide();
            });
            $(".colorbg").on("click", function (e) {
                e.preventDefault();
                var col = $(this).css("backgroundColor");
                var parent = $(this).parent().parent().parent().parent().parent().parent();
                parent.css({"backgroundColor":col});
            });
        });


    },
    data(){
        return {
            modalheading: "Schedule an Activity",
            pipeline: "Notes",
            btnlinks: {
                createbtnlink: "/notes/notespipelinecreate",
                importbtnlink: "/notes/imported",
                firstbtnlink: "/notes/pipeline",
                secondbtnlink: "/notes/pipelinelistview"
            },
        }
    },
    components: {
        dashconterller: DashboardController,
        Modal,
        ScheduleanActivity

    }
}



