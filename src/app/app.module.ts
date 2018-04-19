import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { FormsModule } from '@angular/forms'
import { CustomFormsModule } from 'ng2-validation'

import { AppComponent } from './app.component'
import { NavbarComponent } from './navbar/navbar.component'
import { HomeComponent } from './home/home.component'
import { ProductsComponent } from './products/products.component'
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component'
import { CheckOutComponent } from './check-out/check-out.component'
import { OrderSuccessComponent } from './order-success/order-success.component'
import { MyOrdersComponent } from './my-orders/my-orders.component'
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component'
import { AdminProductsComponent } from './admin/admin-products/admin-products.component'
import { LoginComponent } from './login/login.component'
import { provideAuth, AuthHttp } from 'angular2-jwt'
import { fakeBackendProvider } from './helpers/fake-backend'
import { MockBackend } from '@angular/http/testing'
import { BaseRequestOptions, Http, ConnectionBackend, HttpModule } from '@angular/http'
import { AuthService } from './services/auth.service'
import { AuthGuardService } from './services/auth-guard.service'
import { NoAccessComponent } from './no-access/no-access.component'
import { AdminAuthGuardService } from './services/admin-auth-guard.service'
import { ProductFormComponent } from './admin/product-form/product-form.component'
import { CategoryService } from './services/category.service'
import { ProductService } from './services/product.service'

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		HomeComponent,
		ProductsComponent,
		ShoppingCartComponent,
		CheckOutComponent,
		OrderSuccessComponent,
		MyOrdersComponent,
		AdminOrdersComponent,
		AdminProductsComponent,
		LoginComponent,
		NoAccessComponent,
		ProductFormComponent
	],
	imports: [
		BrowserModule,
		NgbModule.forRoot(),
		FormsModule,
		CustomFormsModule,
		HttpModule,
		RouterModule.forRoot([
			{ path: '', component: HomeComponent, canActivate: [ AuthGuardService ] },
			{ path: 'login', component: LoginComponent },
			{ path: 'products', component: ProductsComponent, canActivate: [ AuthGuardService ] },
			{
				path: 'shopping-cart',
				component: ShoppingCartComponent,
				canActivate: [ AuthGuardService ]
			},

			{ path: 'my-orders', component: MyOrdersComponent, canActivate: [ AuthGuardService ] },
			{ path: 'check-out', component: CheckOutComponent, canActivate: [ AuthGuardService ] },
			{
				path: 'order-success',
				component: OrderSuccessComponent,
				canActivate: [ AuthGuardService ]
			},
			{
				path: 'admin/orders',
				component: AdminOrdersComponent,
				canActivate: [ AuthGuardService, AdminAuthGuardService ]
			},
			{
				path: 'admin/products/new',
				component: ProductFormComponent,
				canActivate: [ AuthGuardService, AdminAuthGuardService ]
			},
			{
				path: 'admin/products/:id',
				component: ProductFormComponent,
				canActivate: [ AuthGuardService, AdminAuthGuardService ]
			},
			{
				path: 'admin/products',
				component: AdminProductsComponent,
				canActivate: [ AuthGuardService, AdminAuthGuardService ]
			},
			{
				path: 'no-access',
				component: NoAccessComponent
			}
		])
	],
	providers: [
		AuthService,
		AuthGuardService,
		AdminAuthGuardService,
		AuthHttp,
		provideAuth({
			headerName: 'Authorization',
			headerPrefix: 'Bearer',
			tokenName: 'token',
			tokenGetter: () => localStorage.getItem('token'),
			globalHeaders: [ { 'Content-Type': 'application/json' } ],
			noJwtError: true
		}),
		CategoryService,
		ProductService

		// // For creating a mock back-end. You don't need these in a real app.
		// fakeBackendProvider,
		// MockBackend,
		// BaseRequestOptions
	],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
