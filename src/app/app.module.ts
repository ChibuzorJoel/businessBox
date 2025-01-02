import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { CareersComponent } from './pages/careers/careers.component';
import { CartComponent } from './pages/cart/cart.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { CommingSoonComponent } from './pages/comming-soon/comming-soon.component';
import { FaqComponent } from './pages/faq/faq.component';
import { MyaccountComponent } from './pages/myaccount/myaccount.component';
import { NewsDetailsComponent } from './pages/news-details/news-details.component';
import { NewsGridComponent } from './pages/news-grid/news-grid.component';
import { NewsListComponent } from './pages/news-list/news-list.component';
import { TeamComponent } from './pages/team/team.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ProjectComponent } from './pages/project/project.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { ServicesComponent } from './pages/services/services.component';
import { SingleProductComponent } from './pages/single-product/single-product.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ChartComponent } from './admin/chart/chart.component';
import { EmailComponent } from './admin/email/email.component';
import { InvoiceComponent } from './admin/invoice/invoice.component';
import { ProfileComponent } from './admin/profile/profile.component';
import { FaqsComponent } from './admin/faqs/faqs.component';
import { TablesComponent } from './admin/tables/tables.component';
import { CalendarComponent } from './admin/calendar/calendar.component';
import { MediaComponent } from './admin/media/media.component';
import { EmptyComponent } from './admin/empty/empty.component';
import { FormLayoutsComponent } from './admin/form-layouts/form-layouts.component';
import { GalleryComponent } from './admin/gallery/gallery.component';
import { BasicFormComponent } from './admin/basic-form/basic-form.component';
import { InvoicePageComponent } from './admin/invoice-page/invoice-page.component';
import { LoginComponent } from './admin/login/login.component';
import { MapsComponent } from './admin/maps/maps.component';
import { RegisterComponent } from './admin/register/register.component';
import { SearchResultComponent } from './admin/search-result/search-result.component';
import { UiButtonsComponent } from './admin/ui-buttons/ui-buttons.component';
import { UiCardsComponent } from './admin/ui-cards/ui-cards.component';
import { UiTimelineComponent } from './admin/ui-timeline/ui-timeline.component';
import { UiProgressbarsComponent } from './admin/ui-progressbars/ui-progressbars.component';
import { ErrorComponent } from './admin/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    CareersComponent,
    CartComponent,
    ContactComponent,
    CheckoutComponent,
    CommingSoonComponent,
    FaqComponent,
    MyaccountComponent,
    NewsDetailsComponent,
    NewsGridComponent,
    NewsListComponent,
    TeamComponent,
    TestimonialsComponent,
    ShopComponent,
    ProjectComponent,
    PricingComponent,
    ServicesComponent,
    SingleProductComponent,
    DashboardComponent,
    ChartComponent,
    EmailComponent,
    InvoiceComponent,
    ProfileComponent,
    FaqsComponent,
    TablesComponent,
    CalendarComponent,
    MediaComponent,
    EmptyComponent,
    FormLayoutsComponent,
    GalleryComponent,
    BasicFormComponent,
    InvoicePageComponent,
    LoginComponent,
    MapsComponent,
    RegisterComponent,
    SearchResultComponent,
    UiButtonsComponent,
    UiCardsComponent,
    UiTimelineComponent,
    UiProgressbarsComponent,
    ErrorComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
