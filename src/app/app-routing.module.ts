import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CareersComponent } from './pages/careers/careers.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { CommingSoonComponent } from './pages/comming-soon/comming-soon.component';
import { FaqComponent } from './pages/faq/faq.component';
import { MyaccountComponent } from './pages/myaccount/myaccount.component';
import { NewsDetailsComponent } from './pages/news-details/news-details.component';
import { NewsGridComponent } from './pages/news-grid/news-grid.component';
import { NewsListComponent } from './pages/news-list/news-list.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { ProjectComponent } from './pages/project/project.component';
import { ServicesComponent } from './pages/services/services.component';
import { ShopComponent } from './pages/shop/shop.component';
import { SingleProductComponent } from './pages/single-product/single-product.component';
import { TeamComponent } from './pages/team/team.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ChartComponent } from './admin/chart/chart.component';
import { ProfileComponent } from './admin/profile/profile.component';
import { InvoiceComponent } from './admin/invoice/invoice.component';
import { EmailComponent } from './admin/email/email.component';
import { FaqsComponent } from './admin/faqs/faqs.component';
import { TablesComponent } from './admin/tables/tables.component';
import { CalendarComponent } from './admin/calendar/calendar.component';
import { MediaComponent } from './admin/media/media.component';
import { BasicFormComponent } from './admin/basic-form/basic-form.component';
import { EmptyComponent } from './admin/empty/empty.component';
import { FormLayoutsComponent } from './admin/form-layouts/form-layouts.component';
import { GalleryComponent } from './admin/gallery/gallery.component';
import { InvoicePageComponent } from './admin/invoice-page/invoice-page.component';
import { UiProgressbarsComponent } from './admin/ui-progressbars/ui-progressbars.component';
import { UiTimelineComponent } from './admin/ui-timeline/ui-timeline.component';
import { UiCardsComponent } from './admin/ui-cards/ui-cards.component';
import { UiButtonsComponent } from './admin/ui-buttons/ui-buttons.component';
import { SearchResultComponent } from './admin/search-result/search-result.component';
import { RegisterComponent } from './admin/register/register.component';
import { LoginComponent } from './admin/login/login.component';
import { MapsComponent } from './admin/maps/maps.component';
import { ErrorComponent } from './admin/error/error.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'careers', component: CareersComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'cart', component: CartComponent},
  { path: 'checkout', component: CheckoutComponent},
  { path: 'cooming-soon', component: CommingSoonComponent},
  { path: 'faq', component: FaqComponent},
  { path: 'myaccount', component: MyaccountComponent},
  { path: 'news-details', component: NewsDetailsComponent},
  { path: 'news-grid', component: NewsGridComponent},
  { path: 'news-list', component: NewsListComponent},
  { path: 'pricing', component: PricingComponent},
  { path: 'project', component: ProjectComponent},
  { path: 'services', component: ServicesComponent},
  { path: 'shop', component: ShopComponent},
  { path: 'single-product', component: SingleProductComponent},
  { path: 'team', component: TeamComponent},
  { path: 'testimonials', component: TestimonialsComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'chart', component: ChartComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'invoice', component: InvoiceComponent},
  { path: 'email', component: EmailComponent},
  { path: 'faqs', component: FaqsComponent},
  { path: 'tables', component: TablesComponent},
  { path: 'calendar', component: CalendarComponent},
  { path: 'media', component: MediaComponent},
  { path: 'basic-form', component: BasicFormComponent},
  { path: 'empty', component: EmptyComponent},
  { path: 'form-layouts', component: FormLayoutsComponent},
  { path: 'gallery', component: GalleryComponent},
  { path: 'invoice-page', component: InvoicePageComponent},
  { path: 'ui-progressbars', component: UiProgressbarsComponent },
  { path: 'ui-timeline', component: UiTimelineComponent},
  { path: 'ui-cards', component: UiCardsComponent},
  { path: 'ui-buttons', component: UiButtonsComponent},
  { path: 'search-result', component: SearchResultComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'maps', component: MapsComponent},
  { path: 'basic-form', component: BasicFormComponent},
  { path: 'error', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
