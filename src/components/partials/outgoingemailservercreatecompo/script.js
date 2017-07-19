export default{
    created: function () {
        var self = this;
        $(function() {
            $("#save").click(function () {
                    self.submit();
            });
        });
        $(function() {
            $("#test").click(function () {
                self.testsmtp();
            });
        });
    },
    props: [
        "edit",
    ],
    data () {
        return {
            description: "",
            priority: "",
            smtp_server: "",
            smtp_port: "",
            connection_security: "",
            username: "",
            password: "",

        }
    },
    methods: {
        testsmtp: function () {
            var self = this;
            self.$http.get("/setting/testsmtp", {
                "descriptio_n": self.description,
                "priorit_y": self.priority,
                "smtpserver": self.smtp_server,
                "smtpport": self.smtp_port,
                "connectionsecurity": self.connection_security,
                "usernam_e": self.username,
                "passwor_d": self.password,
            }).then(function(res){
                if(res.body.status == "error") {
                    alert("passs ho gaya");
                }
                else {
                    alert("pappu fail ho gaya");
                }
            },function(err){
                alert(err);
            });
        },
        submit: function () {
            var self = this;
            self.$http.post("/outgoingmail", {
                "descriptio_n": self.description,
                "priorit_y": self.priority,
                "smtpserver": self.smtp_server,
                "smtpport": self.smtp_port,
                "connectionsecurity": self.connection_security,
                "usernam_e": self.username,
                "passwor_d": self.password,
            }).then(function(res){
                console.log(res.body);
                alert(self.portalaccess);
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