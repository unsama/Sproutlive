export default{
    created: function () {
<<<<<<< HEAD
        var self = this;
        console.log("this is some check");
        $(function () {
            $("#save").click(function () {
                self.$validator.validateAll().then(result => {
                    if (!result) {
                        // validation failed.
                    }
                    self.submit();
                    window.location.href = "../setting/users";
                });
            });
            $('#submitSaveBtn').on("click",function(){

            });
            CKEDITOR.replace( 'editor1' );
        });
        this.select();
=======
        console.log("this is some check");
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
    },
    data(){
        return {
            title: 'Discuss',
            username: '',
            email: '',
            password: '',
            company_name: '',
            current_company: '',
            sales: '',
            project: '',
            inventory: '',
            manufacturing: '',
            accounting: '',
            purchases: '',
            recruitment: '',
            expenses: '',
            timesheets: '',
            attendance: '',
            fleet: '',
            massmailing: '',
            pointofsale: '',
            administration: '',
            employees: '',
<<<<<<< HEAD
            officer: '',
            equipment_manager: '',
            manager: '',
            country_id: '1',
            options:'',
            language:'',
            timezone:'',
            emailmessages:'',
            alias:'',
            signature:'',
            options2:'',
            barcode:'',
            security_pin:'',
            v: true,
            v1: false

=======
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83

        }
    },

    computed: {
        fullname: function () {
            return this.first + " " + this.last;
        }
    },
    methods: {
<<<<<<< HEAD
        select: function () {
            var self = this;
            //alert(self.companyName);
            self.$http.post("/source", {"company_name": self.company_name}).then(function(res){self.options =res.body.data;},function(err){
                //alert(err);
            });
            self.$http.post("/get_alias", {"name": self.name}).then(function(res){self.options2 =res.body.data;},function(err){
                //alert(err);
            });
        },
        submit: function () {
            //alert("adasdsadsad");
            var self = this;
            //var ckeditor_value = CKEDITOR.instances.editor1.getData();
            //alert(self.current_company+ " ");
            self.$http.post("/add_user", {
                "username": self.username,
                "company_name": self.company_name,
                "current_company": self.current_company,
                "email": self.email,
                "country_id": self.country_id,
                "sales": self.sales,
                "project": self.project,
                "inventory": self.inventory,
                "manufacturing": self.manufacturing,
                "accounting": self.accounting,
                "purchases": self.purchases,
                "recruitment": self.recruitment,
                "expenses": self.expenses,
                "timesheets": self.timesheets,
                "attendance": self.attendance,
                "fleet": self.fleet,
                "massmailing": self.massmailing,
                "pointofsale": self.pointofsale,
                "administration": self.administration ,
                "employees": self.employees,
                "language": self.language,
                "timezone": self.timezone,
                "officer": self.officer,
                "equipment_manager": self.equipment_manager,
                "manager": self.manager,
                "emailmessages": self.emailmessages ,
                "alias": self.alias,
                //"signature": ckeditor_value,
                "barcode": self.barcode,
                "security_pin": self.security_pin
            }).then(function(res){
                //console.log(res.body);
            },function(err){
                //alert(err);
            });
        },
        validateBeforeSubmit() {
            this.$validator.validateAll().then(() => {
                // eslint-disable-next-line

=======

        submit: function () {
            var self = this;
              //alert(self.username+ " " + self.email+ " " + self.company_name+ " " + self.current_company+ " " + self.sales+ " " + self.project+ " " + self.inventory+ " " + self.employees+ " " );
            self.$http.post("/add_user", {"username": self.username,"company_name": self.company_name,"current_company": self.current_company, "email": self.email, "sales": self.sales, "project": self.project,
                "inventory": self.inventory, "manufacturing": self.manufacturing, "accounting": self.accounting, "purchases": self.purchases, "recruitment": self.recruitment,
                "expenses": self.expenses, "timesheets": self.timesheets, "attendance": self.attendance, "fleet": self.fleet, "massmailing": self.massmailing, "pointofsale":
                self.pointofsale, "administration": self.administration , "employees": self.employees }).then(function(res){
                console.log(res.body);
            },function(err){
                alert(err);
            });
        },
        
        validateBeforeSubmit() {
            this.$validator.validateAll().then(() => {
                // eslint-disable-next-line
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
                this.submit();
                alert('From Submitted!');
            }).catch(() => {
                // eslint-disable-next-line
                alert('Correct them errors!');
            });
        }
    },

}