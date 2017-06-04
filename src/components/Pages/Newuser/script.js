export default{
    created: function () {
        console.log("this is some check");
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

        }
    },

    computed: {
        fullname: function () {
            return this.first + " " + this.last;
        }
    },
    methods: {

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
                this.submit();
                alert('From Submitted!');
            }).catch(() => {
                // eslint-disable-next-line
                alert('Correct them errors!');
            });
        }
    },

}