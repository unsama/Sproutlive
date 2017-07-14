import Users from "./../../components/Pages/Users/Users.vue"
import Company from "./../../components/Pages/Company/Company.vue"
import Companypopup from "./../../components/partials/Companypopup/Companypopup.vue"
import Companyimport   from "./../../components/Pages/Companyimport/Companyimport.vue"
import Companycreate   from "./../../components/Pages/Companycreate/Companycreate.vue"
import Companycreatecompo   from "./../../components/partials/Companycreatecompo/Companycreatecompo.vue"
import Companyin   from "./../../components/Pages/Companyin/Companyin.vue"
import Companyinedit   from "./../../components/Pages/Companyinedit/Companyinedit.vue"
import Tableview from "./../../components/partials/Tableview/Tableview.vue"
import Newuser  from "./../../components/Pages/Newuser/Newuser.vue"
import Imported  from "./../../components/Pages/Imported/Imported.vue"
import Generalsetting from "./../../components/Pages/Generalsetting/Generalsetting.vue"
import Tabs from "./../../components/partials/Tabs/Tabs.vue"
import Panel5 from "./../../components/partials/panel5/panel5.vue"
import Dashboardsetting  from "./../../components/partials/Dashboardsetting/Dashboardsetting.vue"
import SettingLayout from "./../../components/Pages/SettingLayout/SettingLayout.vue"
import Setting from "./../../components/partials/Setting/Setting.vue"
import Dashboardsetting2  from "./../../components/partials/Dashboardsetting2/Dashboardsetting2.vue"
import Formview from "./../../components/Pages/Formview/Formview.vue"
import Partner from "./../../components/Pages/Partner/Partner.vue"
import Templatetableimport   from "./../../components/Pages/Templatetableimport/Templatetableimport.vue"
import Templatetablecreate   from "./../../components/Pages/Templatetablecreate/Templatetablecreate.vue"
import Templatetable  from "./../../components/Pages/Templatetable/Templatetable.vue"
import Templatetablecreatecompo   from "./../../components/partials/Templatetablecreatecompo/Templatetablecreatecompo.vue"
import Templatetableincompo   from "./../../components/partials/Templatetableincompo/Templatetableincompo.vue"
import Templatetablein   from "./../../components/Pages/Templatetablein/Templatetablein.vue"
import Templatetableedit  from "./../../components/Pages/Templatetableedit/Templatetableedit.vue"
import Temp_customer  from "./../../components/Pages/Temp_customer/Temp_customer.vue"
import Temp_create  from "./../../components/Pages/Temp_create/Temp_create.vue"
import EditTab  from "./../../components/Pages/EditTab/EditTab.vue"
import Profile  from "./../../components/Pages/Profile/Profile.vue"
import Companies  from "./../../components/Pages/Companies/Companies.vue"
import Buttonsgroup  from "./../../components/partials/Buttonsgroup/Buttonsgroup.vue"
import Producting from "./../../components/Pages/Producting/Producting.vue"
import Usersimport   from "./../../components/Pages/Usersimport/Usersimport.vue"
import Usersin   from "./../../components/Pages/Usersin/Usersin.vue"
import Usersinedit   from "./../../components/Pages/Usersinedit/Usersinedit.vue"
import Usersincreate   from "./../../components/Pages/Usersincreate/Usersincreate.vue"
import Usersoutcreate   from "./../../components/Pages/Usersoutcreate/Usersoutcreate.vue"
import Test   from "./../../components/Pages/Test/Test.vue"
import tssignup   from "./../../components/Pages/Signup/Signup.vue"


const routes = [
    { path: '/', component: Test,
        children: [
            { path: 'setting', component: SettingLayout,
                children: [
                    { path: 'users', component: Users},
                    { path: 'company', component: Company},
                    { path: 'Companypopup', component: Companypopup},
                    { path: 'Tableview', component: Tableview},
                    { path: 'Newuser', component: Newuser},
                    { path: 'Imported', component: Imported},
                    { path: 'generalsetting', component: Generalsetting},
                    { path: 'Tabs', component: Tabs},
                    { path: 'panel5', component: Panel5},
                    { path: 'setting', component: Setting},
                    { path: 'Formview', component: Formview},
                    { path: 'Partner', component: Partner},
                    { path: 'templatetable', component: Templatetable},
                    { path: 'temp_customer', component: Temp_customer},
                    { path: 'Dashboardsetting', component: Dashboardsetting},
                    { path: 'Temp_create', component: Temp_create},
                    { path: 'edittab', component: EditTab},
                    { path: 'Dashboardsetting2', component: Dashboardsetting2},
                    { path: 'profile', component: Profile},
                    { path: 'Companies', component: Companies},
                    { path: 'Buttonsgroup', component: Buttonsgroup},
                    { path: 'Producting', component: Producting},
                    { path: 'usersimport', component: Usersimport},
                    { path: 'usersin', component: Usersin},
                    { path: 'usersincreate', component: Usersincreate},
                    { path: 'usersinedit', component: Usersinedit},
                    { path: 'usersoutcreate', component: Usersoutcreate},
                    { path: 'companyimport', component: Companyimport},
                    { path: 'companycreate', component: Companycreate},
                    { path: 'companycreatecompo', component: Companycreatecompo},
                    { path: 'companyin', component: Companyin},
                    { path: 'companyinedit', component: Companyinedit},
                    { path: 'templatetableimport', component: Templatetableimport},
                    { path: 'templatetablecreate', component: Templatetablecreate},
                    { path: 'templatetablecreatecompo', component: Templatetablecreatecompo},
                    { path: 'templatetableincompo', component: Templatetableincompo},
                    { path: 'templatetablein', component: Templatetablein},
                    { path: 'templatetableedit', component: Templatetableedit},
                    { path: 'tssignup', component: tssignup},

                ]
            },
        ]
    },
];

module.exports = routes