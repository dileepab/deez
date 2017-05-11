import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AddRoleComponent} from './add-role/add-role.component';
import {AuthGuard} from './services/auth.guard';


const appRoutes: Routes = [
    {path: '', canActivate: [AuthGuard], component: HomeComponent},
    {path: 'login', canActivate: [AuthGuard], component: LoginComponent},
    {path: 'register', canActivate: [AuthGuard], component: RegisterComponent},
    {path: 'addRole', canActivate: [AuthGuard], component: AddRoleComponent},
    {
        path: 'cut',
        loadChildren: 'app/cut/cut.module#CutModule'
        // children: [
        //     {path: '', redirectTo: 'allCuts', pathMatch: 'full'},
        //     {path: '', loadChildren: 'app/cut/cut.module#CutModule'}
        // ]
    },
    {
        path: 'attendance',
        loadChildren: 'app/attendance/attendance.module#AttendanceModule'
        // children: [
        //     {path: '', redirectTo: 'addAttendance', pathMatch: 'full'},
        //     {path: '', loadChildren: 'app/attendance/attendance.module#AttendanceModule'}
        // ]
    },
    {
        path: 'settings',
        loadChildren: 'app/settings/settings.module#SettingsModule'
        // children: [
        //     // {path: '', redirectTo: 'settings', pathMatch: 'full'},
        //     {path: 'settings', loadChildren: 'app/settings/settings.module#SettingsModule'}
        // ]
    },
    {
        path: 'login', canActivate: [AuthGuard], component: LoginComponent
    },

    // otherwise redirect to home
    {path: '**', redirectTo: ''}

];

export const RoutingModule = RouterModule.forRoot(appRoutes);
