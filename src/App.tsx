import { useState } from 'react';
import { TopBanner } from './components/layout/TopBanner';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Stats } from './components/sections/Stats';
import { Courses } from './components/sections/Courses';
import { Features } from './components/sections/Features';
import { Teachers } from './components/sections/Teachers';
import { Results } from './components/sections/Results';
import { Testimonials } from './components/sections/Testimonials';
import { Pricing } from './components/sections/Pricing';
import { FAQ } from './components/sections/FAQ';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';
import { LeadModal } from './components/sections/LeadModal';

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string>('');

  const handleOpenModal = (courseName?: string) => {
    if (courseName) {
      setSelectedCourse(courseName);
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSelectCourse = (courseTitle: string) => {
    setSelectedCourse(courseTitle);
    setIsModalOpen(true);
  };

  const handleSelectPlan = (planName: string) => {
    setSelectedCourse(`${planName} ta'rifi`);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-emerald-500 selection:text-white">
      {/* Discount / Announcement Top Banner */}
      <TopBanner onOpenModal={() => handleOpenModal()} />

      {/* Sticky Main Navigation */}
      <Navbar onOpenModal={() => handleOpenModal()} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero onOpenModal={() => handleOpenModal()} />
        <Stats />
        <Courses onSelectCourse={handleSelectCourse} />
        <Features />
        <Teachers />
        <Results />
        <Testimonials />
        <Pricing onSelectPlan={handleSelectPlan} />
        <FAQ />
        <Contact initialCourse={selectedCourse} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Quick Lead Capture Modal */}
      <LeadModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        selectedCourse={selectedCourse}
      />
    </div>
  );
}

export default App;