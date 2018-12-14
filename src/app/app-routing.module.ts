import { NgModule } from "@angular/core";
import {Routes, RouterModule } from "@angular/router"
import { CurrentViewComponent } from "./current-view/current-view.component";




const routes: Routes = [

    
    {path: 'current/:id', component: CurrentViewComponent}  
       
    

]

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {onSameUrlNavigation:'reload'})
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutngModule { }
