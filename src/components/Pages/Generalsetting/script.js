<<<<<<< HEAD


export default{
    created: function () {
        var self = this;

        $(function() {
            $(".checked").prop('checked', true);
            $("#apply").click(function () {
                 self.submit();
            });


            $(".checkit").click(function () {
                alert("aewfdaw");
                $(".gayab").show();
                // if($(this).prop('checked')){
                //     $("#gayab").show();
                // }else{
                //     $("#gayab").hide();
                // }
            });



        });
        self.select();

        $(document).ready(function() {
            alert("abc");
        });



    },
    props: [
        "edit",
    ],
    data () {
        return {
            aliasdomain: "",
            passwordreset: "",
            externaluser: "",
            portalaccess: "",
            authencation: "",
            importexport: "",
            multicompany: "",
            multicurrency: "",
            intercompany: "",
            sharepartners: "",
            shareproducts: "",
            googledrive: "",
            googledrivecode: "",
            name: "",
            papersize: "",
            orientation1: "",
            topmargin: "",
            bottommargin: "",
            leftmargin: "",
            rightmargin: "",
            displayheader: "",
            headerspacing: "",
            outputdpi: "",
            customreportfooter: "",


        }
    },
    methods: {
        submit: function () {
            var self = this;
            self.$http.post("/general", {
                "aliasdomain": self.aliasdomain,
                "portalaccess": self.portalaccess,
                "authencation": self.authencation,
                "importexport": self.importexport,
                "multicompany": self.multicompany,
                "multicurrency": self.multicurrency,
                "intercompany": self.intercompany,
                "sharepartners": self.sharepartners,
                "shareproducts": self.shareproducts,
                "googledrive": self.googledrive,
            }).then(function(res){
                console.log(res.body);
                alert(self.portalaccess);
            },function(err){
                alert(err);
            });
        },
        submitpaper : function () {
            var self = this;
            self.$http.post("/paperformat", {"name": self.name,"paper_size": self.papersize,"orientation_1": self.orientation1,"top_margin": self.topmargin,"bottom_margin": self.bottommargin,"left_margin": self.leftmargin,"right_margin": self.rightmargin,"display_header": self.displayheader,"header_spacing": self.headerspacing,"output_dpi": self.outputdpi,}).then(function(res){
                console.log(res.body);

            },function(err){
                alert(err);
            });
        },

        // validateBeforeSubmit() {
        //     this.$validator.validateAll().then(() => {
        //         // eslint-disable-next-line
        //         this.submit();
        //         alert('From Submitted!');
        //     }).catch(() => {
        //         // eslint-disable-next-line
        //         alert('Correct them errors!');
        //     });
        // },
        // validateBeforeSubmit() {
        //     this.$validator.validateAll().then(() => {
        //         // eslint-disable-next-line
        //         this.submitpaper();
        //         alert('From Submitted!');
        //     }).catch(() => {
        //         // eslint-disable-next-line
        //         alert('Correct them errors!');
        //     });
        // }


    },



}
=======
export default{
    created: function(){
        document.title = this.title;
    },
    data(){
        return{
            title: 'Generalsetting - sprout'
        }
    },

}
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
