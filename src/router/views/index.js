/*
  Main page.
*/
import HomeView from './homeView.vue'

/*
  Basic information about the company, revealing its activities.
*/
import OurClients from './about/ourClients.vue'
import OurDocuments from './about/ourDocuments.vue'
import OurHistory from './about/ourHistory.vue'

/*
  Audit services.
*/
import AuditInitiative from './services/audit-services/auditInitiative.vue'
import AuditStatutory from './services/audit-services/auditStatutory.vue'
import AuditServices from './services/audit-services/auditView.vue'

/*
  Auditing and audit-related services.
*/
import AssociatedAgreedProcedures from './services/associated-services/agreedProcedures.vue'
import AssociatedServices from './services/associated-services/associatedView.vue'
import AssociatedCompilingInformation from './services/associated-services/compilingInformation.vue'
import AssociatedReviewOfAccountingStatements from './services/associated-services/reviewOfAccountingStatements.vue'
import AssociatedStaffingAudit from './services/associated-services/staffingAudit.vue'
import AssociatedTaxAudit from './services/associated-services/taxAudit.vue'

/*
  Other audit services.
*/
import OtherLegalAssistance from './services/other-services/legalAssistance.vue'
import OtherServices from './services/other-services/otherView.vue'
import OtherTaxConsulting from './services/other-services/taxConsulting.vue'
import OtherTaxServices from './services/other-services/taxServices.vue'

/*
  Mandatory disclosure of information.
*/
import Report2017 from './reports/public/2017.vue'
import Report2018 from './reports/public/2018.vue'
import Report2019 from './reports/public/2019.vue'
import Report2020 from './reports/public/2020.vue'
import Report2021 from './reports/public/2021.vue'
import Report2022 from './reports/public/2022.vue'

/*
  Contact Information.
*/
import ContactsView from './contactsView.vue'

/*
  Legal Information.
*/
import TermsView from './termsView.vue'

const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/about/our-history',
    component: OurHistory
  },
  {
    path: '/about/our-clients',
    component: OurClients
  },
  {
    path: '/about/our-documents',
    component: OurDocuments
  },
  {
    path: '/services/audit-services',
    component: AuditServices
  },
  {
    path: '/services/audit-services/audit-statutory',
    component: AuditStatutory
  },
  {
    path: '/services/audit-services/audit-initiative',
    component: AuditInitiative
  },
  {
    path: '/services/associated-services',
    component: AssociatedServices
  },
  {
    path: '/services/associated-services/review-of-accounting-statements',
    component: AssociatedReviewOfAccountingStatements
  },
  {
    path: '/services/associated-services/compiling-information',
    component: AssociatedCompilingInformation
  },
  {
    path: '/services/associated-services/agreed-procedures',
    component: AssociatedAgreedProcedures
  },
  {
    path: '/services/associated-services/tax-audit',
    component: AssociatedTaxAudit
  },
  {
    path: '/services/associated-services/staffing-audit',
    component: AssociatedStaffingAudit
  },
  {
    path: '/services/other-services',
    component: OtherServices
  },
  {
    path: '/services/other-services/tax-services',
    component: OtherTaxServices
  },
  {
    path: '/services/other-services/tax-consulting',
    component: OtherTaxConsulting
  },
  {
    path: '/services/other-services/legal-assistance',
    component: OtherLegalAssistance
  },
  {
    path: '/reports/public/report2017',
    component: Report2017
  },
  {
    path: '/reports/public/report2018',
    component: Report2018
  },
  {
    path: '/reports/public/report2019',
    component: Report2019
  },
  {
    path: '/reports/public/report2020',
    component: Report2020
  },
  {
    path: '/reports/public/report2021',
    component: Report2021
  },
  {
    path: '/reports/public/report2022',
    component: Report2022
  },
  {
    path: '/contacts',
    component: ContactsView
  },
  {
    path: '/terms-and-conditions',
    component: TermsView
  }
]

export default routes
