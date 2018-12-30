import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { LoginLayoutComponent } from "./layout/login-layout/login-layout.component";
import { HomeLayoutComponent } from "./layout/home-layout/home-layout.component";
import { ProductListingComponent } from "./product-listing/product-listing.component";
import { ProductAddComponent } from "./product-add/product-add.component";
import { ProductEditComponent } from "./product-edit/product-edit.component";

const appRoutes: Routes = [
    {
        path: '',
        component: LoginLayoutComponent,
        children: [
            { path: '', component: LoginComponent, pathMatch: 'full' },
            { path: 'login', component: LoginComponent }

        ]
    },
    // {
    //     path: '',
    //     component: HomeLayoutComponent,
    //     children: [
    //         { path: 'welcome', component: WelcomeComponent, pathMatch: 'full' },
    //         { path: 'products', component: ProductListingComponent, pathMatch: 'full' },
    //         { path: 'products/add', component: ProductAddComponent, pathMatch: 'full' },
    //         { path: 'products/edit:productId', component: ProductEditComponent, pathMatch: 'full' }


    //     ]
    // },
    { path: 'welcome',
     component: HomeLayoutComponent,
     children:[
        { path: '', component: WelcomeComponent, pathMatch: 'full' },
     ]
     },
    {
        path: 'products',
        component: HomeLayoutComponent,
        children: [
            { path: '', component: ProductListingComponent, pathMatch: 'full' },
            { path: 'add', component: ProductAddComponent, pathMatch: 'full' },
            { path: 'edit/:productId', component: ProductEditComponent, pathMatch: 'full' }


        ]
    },
    { path: 'page-not-found', component: PageNotFoundComponent },
    { path: '**', redirectTo: '/page-not-found' }
];

@NgModule(
    {
        imports: [
            //RouterModule.forRoot(appRoutes,{useHash:true})
            RouterModule.forRoot(appRoutes)
        ],
        exports: [
            RouterModule
        ]
    }
)

export class AppRoutingModule {

}