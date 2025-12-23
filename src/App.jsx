import  { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';

// About pages
import About from './pages/about/AboutAlignAfrica';
import OurNamePage from './pages/about/aboutourName';
import PhilosophyPage from './pages/about/PhilosophyPage';
import HistoryPage from './pages/about/historyalighAfrica';
import BoardOfDirectorsPage from './pages/about/boardDirective';
import InHouseProtocolsPage from './pages/about/InhourseProtocol';
import StaffPage from './pages/about/StaffPage';
import OverviewPage from './pages/about/overviewOfAlignAfrica';
import FQASPage from './pages/about/FQASPage';
import PrivacyPolicyPage from './pages/about/PrivacyPolicyPage';
import SafeguardingPage from './pages/about/SafeguardingPage';
import EthioSpirulinaHome from './pages/ethio-spirulina/EthioSpirulinaHome';
import SpirulinaAbout from './pages/ethio-spirulina/SpirulinaAbout';
import SpirulinaBenefits from './pages/ethio-spirulina/SpirulinaBenefits';
import SpirulinaProducts from './pages/ethio-spirulina/SpirulinaProducts';
import SpirulinaCertificates from './pages/ethio-spirulina/SpirulinaCertificates';
import SpirulinaFQA from './pages/ethio-spirulina/FAQ';
import SpirulinaTerms from './pages/ethio-spirulina/SpirulinaTerms';
import SpirulinaContact from './pages/ethio-spirulina/SpirulinaContact';
import DevelopmentPartners from './pages/developmentPartners/DevelopmentPartners';
import Membership from './pages/developmentPartners/alignafricaMemebership';
import Donors from './pages/developmentPartners/Donors';
import OneHealthProject from './pages/projects/oneHealthProject';
import Dance4LifeProject from './pages/projects/Danace4life';
import CapacityBuildingProject from './pages/projects/RMNHProject';
import RMNHProject from './pages/projects/RMNHProject';
import MultiPurposeVillage from './pages/projects/MultiPurposeVillage';
import SpirulinaProgram from './pages/projects/SpirulinaProgram';
import GenderEquality from './pages/projects/GenderEqualityProject';
import HIVProject from './pages/projects/HIVProject';
import NutritionProject from './pages/projects/NutritionProject';
import PeaceBuildingProjects from './pages/projects/PeaceBuildingProjects';
import YouthEmpowermentProject from './pages/projects/YouthEmpowermentProject';
import SocialActionGambella from './pages/projects/SocialActionGambella';
import TargetProject from './pages/projects/TARGETProject';
import YouthVoiceEthiopia from './pages/projects/YouthVoiceEthiopia';
import HopeAddicted from './pages/success-stories/HopeAddicted';
import RIFProject from './pages/success-stories/RIFProject';
import DanceForLife from './pages/success-stories/DanceForLife';
import TARGETProjectSuccess from './pages/success-stories/TARGETProjectSuccess';
import YouthVoiceProjectSuccess from './pages/success-stories/YouthVoiceProjectSuccess';
import GirmaWoldeGiorgies from './pages/hero/GirmaWoldeGiorgies';
import EducationProblems from './pages/problems/EducationProblems';
import HealthProblems from './pages/problems/HealthProblems';
import LivelihoodProblems from './pages/problems/LivelihoodProblems';
import SanitationProblems from './pages/problems/SanitationProblems';
import WaterSecurityProblems from './pages/problems/WaterSecurityProblems';
import GenderInequalityProblems from './pages/problems/GenderInequalityProblems';
import YouthIssuesProblems from './pages/problems/YouthIssuesProblems';
import EducationSolutions from './pages/solutions/EducationSolutions';
import HealthSolutions from './pages/solutions/HealthSolutions';
import LivelihoodSolutions from './pages/solutions/LivelihoodSolutions';
import PartnershipSolutions from './pages/solutions/PartnershipSolutions';
import WaterSecuritySolutions from './pages/solutions/WaterSecuritySolutions';
import WomenEmpowermentSolutions from './pages/solutions/WomenEmpowermentSolutions';
import SanitationHygieneSolutions from './pages/solutions/SanitationHygieneSolutions';
import EthiopiaFacts from './pages/ethiopians/EthiopiaFacts';
import AgricultureEthiopia from './pages/ethiopians/AgricultureEthiopia';
import EthiopianCalendar from './pages/ethiopians/EthiopianCalendar';
import EthiopianCoffee from './pages/ethiopians/EthiopianCoffee';
import EducationEthiopia from './pages/ethiopians/EducationEthiopia';
import EthiopianArt from './pages/ethiopians/EthiopianArt';
import EthiopianCities from './pages/ethiopians/EthiopianCities';
import EthiopianFoods from './pages/ethiopians/EthiopianFoods';
import Home from './pages/Home';
import History from './pages/FQAS';
import ContactPage from './pages/Contact';
import Resource from './pages/resource';
import DonatePage from './pages/notDonationitAnEvevestment';
// import SafeguardingPage from './pages/about/SafeguardingPage';

// Ethio-Spirulina pages
// import EthioSpirulinaHome from './pages/ethio-spirulina/EthioSpirulinaHome';
// import SpirulinaAbout from './pages/ethio-spirulina/SpirulinaAbout';
// import SpirulinaBenefits from './pages/ethio-spirulina/SpirulinaBenefits';
// import SpirulinaProducts from './pages/ethio-spirulina/SpirulinaProducts';
// import SpirulinaCertificates from './pages/ethio-spirulina/SpirulinaCertificates';
// import SpirulinaFQA from './pages/ethio-spirulina/SpirulinaFQA';
// import SpirulinaTerms from './pages/ethio-spirulina/SpirulinaTerms';
// import SpirulinaContact from './pages/ethio-spirulina/SpirulinaContact';

// Development Partners pages
// import DevelopmentPartners from './pages/development-partners/DevelopmentPartners';
// import Membership from './pages/development-partners/Membership';
// import Donors from './pages/development-partners/Donors';

// Projects pages
// import ProjectsHome from './pages/projects/ProjectsHome';
// import OneHealthProject from './pages/projects/OneHealthProject';
// import Dance4LifeProject from './pages/projects/Dance4LifeProject';
// import CapacityBuildingProject from './pages/projects/CapacityBuildingProject';
// import YouthEmpowermentProject from './pages/projects/YouthEmpowermentProject';
// import RMNHProject from './pages/projects/RMNHProject';
// import MultiPurposeVillage from './pages/projects/MultiPurposeVillage';
// import SpirulinaProgram from './pages/projects/SpirulinaProgram';
// import GenderEqualityProject from './pages/projects/GenderEqualityProject';
// import HIVProject from './pages/projects/HIVProject';
// import NutritionProject from './pages/projects/NutritionProject';
// import PeaceBuildingProjects from './pages/projects/PeaceBuildingProjects';
// import SocialActionGambella from './pages/projects/SocialActionGambella';
// import TARGETProject from './pages/projects/TARGETProject';
// import YouthVoiceEthiopia from './pages/projects/YouthVoiceEthiopia';

// Reports pages
// import ReportsHome from './pages/reports/ReportsHome';
// import NarrativeReport2021 from './pages/reports/NarrativeReport2021';
// import OrganizationalStructure from './pages/reports/OrganizationalStructure';
// import YouthVoiceReport from './pages/reports/YouthVoiceReport';

// Success Stories pages
// import SuccessStoriesHome from './pages/success-stories/SuccessStoriesHome';
// import HopeAddicted from './pages/success-stories/HopeAddicted';
// import RIFProject from './pages/success-stories/RIFProject';
// import DanceForLife from './pages/success-stories/DanceForLife';
// import TARGETProjectSuccess from './pages/success-stories/TARGETProjectSuccess';
// import YouthVoiceProjectSuccess from './pages/success-stories/YouthVoiceProjectSuccess';

// Heroes pages
// import HeroesHome from './pages/heroes/HeroesHome';
// import GirmaWoldeGiorgies from './pages/heroes/GirmaWoldeGiorgies';

// Problems pages
// import ProblemsHome from './pages/problems/ProblemsHome';
// import EducationProblems from './pages/problems/EducationProblems';
// import HealthProblems from './pages/problems/HealthProblems';
// import LivelihoodProblems from './pages/problems/LivelihoodProblems';
// import SanitationProblems from './pages/problems/SanitationProblems';
// import WaterSecurityProblems from './pages/problems/WaterSecurityProblems';
// import GenderInequalityProblems from './pages/problems/GenderInequalityProblems';
// import YouthIssuesProblems from './pages/problems/YouthIssuesProblems';

// Solutions pages
// import SolutionsHome from './pages/solutions/SolutionsHome';
// import EducationSolutions from './pages/solutions/EducationSolutions';
// import HealthSolutions from './pages/solutions/HealthSolutions';
// import LivelihoodSolutions from './pages/solutions/LivelihoodSolutions';
// import PartnershipSolutions from './pages/solutions/PartnershipSolutions';
// import WaterSecuritySolutions from './pages/solutions/WaterSecuritySolutions';
// import WomenEmpowermentSolutions from './pages/solutions/WomenEmpowermentSolutions';
// import SanitationHygieneSolutions from './pages/solutions/SanitationHygieneSolutions';

// Ethiopians pages
// import EthiopiansHome from './pages/ethiopians/EthiopiansHome';
// import EthiopiaFacts from './pages/ethiopians/EthiopiaFacts';
// import AgricultureEthiopia from './pages/ethiopians/AgricultureEthiopia';
// import EthiopianCalendar from './pages/ethiopians/EthiopianCalendar';
// import EthiopianCoffee from './pages/ethiopians/EthiopianCoffee';
// import EducationEthiopia from './pages/ethiopians/EducationEthiopia';
// import EthiopianArt from './pages/ethiopians/EthiopianArt';
// import EthiopianCities from './pages/ethiopians/EthiopianCities';
// import EthiopianFoods from './pages/ethiopians/EthiopianFoods';
// import EthnicGroups from './pages/ethiopians/EthnicGroups';
// import EthiopianHolidays from './pages/ethiopians/EthiopianHolidays';
// import NaturalResources from './pages/ethiopians/NaturalResources';
// import EthiopianRuralLife from './pages/ethiopians/EthiopianRuralLife';
// import EthiopianSports from './pages/ethiopians/EthiopianSports';
// import TraditionalDress from './pages/ethiopians/TraditionalDress';
// import Lalibela from './pages/ethiopians/Lalibela';
// import QuickEthiopiaFacts from './pages/ethiopians/QuickEthiopiaFacts';

// Lazy load main pages
// const Home = lazy(() => import('./pages/Home'));
// const Contact = lazy(() => import('./pages/Contact'));
// const Donate = lazy(() => import('./pages/Donate'));

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-16"> 
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
             
              <Route path="/" element={<Home />} />
              <Route path="/faqs" element={<History />} />
              <Route path="/contactsUs" element={<ContactPage />} />
              <Route path="/resource" element={<Resource />} />
              <Route path="/donate" element={<DonatePage />} />

              
              <Route path="/about/about-align-africa" element={<About />} />
              <Route path="/about/our-name" element={<OurNamePage />} />
              <Route path="/about/history" element={<HistoryPage />} />
              <Route path="/about/philosophy" element={<PhilosophyPage />} />
              <Route path="/about/board-of-directors" element={<BoardOfDirectorsPage />} />
              <Route path="/about/in-house-protocols" element={<InHouseProtocolsPage />} />
              <Route path="/about/staff" element={<StaffPage />} />
              <Route path="/about/overview" element={<OverviewPage />} />
              <Route path="/about/fqas" element={<FQASPage />} />
              <Route path="/about/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/about/safeguarding" element={<SafeguardingPage />} />
              
              {/* Ethio-Spirulina */}
               <Route path="/ethio-spirulina" element={<EthioSpirulinaHome />} />
              <Route path="/ethio-spirulina/about" element={<SpirulinaAbout />} />
              <Route path="/ethio-spirulina/benefits" element={<SpirulinaBenefits />} />
              <Route path="/ethio-spirulina/products" element={<SpirulinaProducts />} />
              <Route path="/ethio-spirulina/certificates" element={<SpirulinaCertificates />} />
              <Route path="/ethio-spirulina/fqa" element={<SpirulinaFQA />} />
              <Route path="/ethio-spirulina/terms" element={<SpirulinaTerms />} />
              <Route path="/ethio-spirulina/contact" element={<SpirulinaContact />} /> 
              
             
              
              {/* Development Partners */}
              <Route path="/development-partners" element={<DevelopmentPartners />} />
              <Route path="/development-partners/membership" element={<Membership />} />
              <Route path="/development-partners/donors" element={<Donors />} /> 
              
              
              
              {/* Projects */}
              <Route path="/projects/one-health" element={<OneHealthProject />} />
              <Route path="/projects/dance4life" element={<Dance4LifeProject />} />
              <Route path="/projects/capacity-building" element={<CapacityBuildingProject />} />
              <Route path="/projects/rmnh" element={<RMNHProject />} />
              <Route path="/projects/multi-purpose-village" element={<MultiPurposeVillage />} />
              <Route path="/projects/spirulina-program" element={<SpirulinaProgram />} />
              <Route path="/projects/gender-equality" element={<GenderEquality />} />
              <Route path="/projects/hiv-project" element={<HIVProject />} />
              <Route path="/projects/nutrition-project" element={<NutritionProject />} />
              <Route path="/projects/peace-building" element={<PeaceBuildingProjects />} />
              <Route path="/projects/youth-empowerment" element={<YouthEmpowermentProject />} />
              <Route path="/projects/social-action-gambella" element={<SocialActionGambella />} />
                <Route path="/projects/target-project" element={<TargetProject />} />
              <Route path="/projects/youth-voice-ethiopia" element={<YouthVoiceEthiopia />} />
              {/* <Route path="/projects" element={<ProjectsHome />} />
            
               */}
              
              {/* Reports */}
              {/* <Route path="/reports" element={<ReportsHome />} />
              <Route path="/reports/2021-narrative" element={<NarrativeReport2021 />} />
              <Route path="/reports/organizational-structure" element={<OrganizationalStructure />} />
              <Route path="/reports/youth-voice" element={<YouthVoiceReport />} /> */}
              
              {/* Success Stories */}
              {/* <Route path="/success-stories" element={<SuccessStoriesHome />} /> */}
              <Route path="/success-stories/hope-addicted" element={<HopeAddicted />} />
              <Route path="/success-stories/rif-project" element={<RIFProject />} />
              <Route path="/success-stories/dance-for-life" element={<DanceForLife />} />
              <Route path="/success-stories/target-project" element={<TARGETProjectSuccess />} />
              <Route path="/success-stories/youth-voice" element={<YouthVoiceProjectSuccess />} />
              
              {/* Heroes */}
              <Route path="/heroes/girma-wolde-giorgies" element={<GirmaWoldeGiorgies />} /> 
              
              {/* <Route path="/heroes" element={<HeroesHome />} />
              */}
              
              {/* Problems */}
               <Route path="/problems/education" element={<EducationProblems />} />
              <Route path="/problems/health" element={<HealthProblems />} />
              <Route path="/problems/livelihood" element={<LivelihoodProblems />} />
              <Route path="/problems/sanitation" element={<SanitationProblems />} />
              <Route path="/problems/water-security" element={<WaterSecurityProblems />} />
              <Route path="/problems/gender-inequality" element={<GenderInequalityProblems />} />
              <Route path="/problems/youth-issues" element={<YouthIssuesProblems />} />
              {/* <Route path="/problems" element={<ProblemsHome />} />
              
             
               */}
              
              {/* Solutions */}
               <Route path="/solutions/education" element={<EducationSolutions />} />
              <Route path="/solutions/health" element={<HealthSolutions />} />
              <Route path="/solutions/livelihood" element={<LivelihoodSolutions />} />
              <Route path="/solutions/partnership" element={<PartnershipSolutions />} />
              <Route path="/solutions/water-security" element={<WaterSecuritySolutions />} />
              <Route path="/solutions/women-empowerment" element={<WomenEmpowermentSolutions />} />
              <Route path="/solutions/sanitation-hygiene" element={<SanitationHygieneSolutions />} />
              {/* <Route path="/solutions" element={<SolutionsHome />} />
              */}
              
              {/* The Ethiopians */}
               <Route path="/ethiopians/facts" element={<EthiopiaFacts />} />
               <Route path="/ethiopians/agriculture" element={<AgricultureEthiopia />} />
               
              
              <Route path="/ethiopians/calendar" element={<EthiopianCalendar />} />
              <Route path="/ethiopians/coffee" element={<EthiopianCoffee />} />
              <Route path="/ethiopians/education" element={<EducationEthiopia />} />
              <Route path="/ethiopians/art" element={<EthiopianArt />} />
              <Route path="/ethiopians/cities" element={<EthiopianCities />} />
              <Route path="/ethiopians/foods" element={<EthiopianFoods />} />
              {/* <Route path="/ethiopians/ethnic-groups" element={<EthnicGroups />} /> */}
              {/* <Route path="/ethiopians/holidays" element={<Ethiopia />} /> */}
              {/* <Route path="/ethiopians/natural-resources" element={<NaturalResources />} /> */}
              {/* <Route path="/ethiopians/rural-life" element={<EthiopianRuralLife />} /> */}
              {/* <Route path="/ethiopians/sports" element={<EthiopianSports />} /> */}
              {/* <Route path="/ethiopians/traditional-dress" element={<TraditionalDress />} /> */}
              {/* <Route path="/ethiopians/lalibela" element={<Lalibela />} /> */}
              {/* <Route path="/ethiopians/quick-facts" element={<QuickEthiopiaFacts />} /> */}
              {/* <Route path="/ethiopians" element={<EthiopiansHome />} />
             
               */}
              
              {/* Other pages */}
              {/* <Route path="/contact" element={<Contact />} />
              <Route path="/donate" element={<Donate />} /> */}
              
              {/* 404 Page - Keep this at the end */}
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;