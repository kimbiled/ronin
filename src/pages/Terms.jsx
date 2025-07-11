
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from "react-router-dom";
const Terms = () => {

    const navigate = useNavigate();
     const [activeSection, setActiveSection] = useState(null);
     const goHome = () => {
        navigate("/")
     }
  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

 const sections = [
  {
    id: 'about',
    title: '1. About Ronin',
    content: (
      <>
        <p>
          Ronin is a digital design studio offering creative services in UX/UI, branding, and product design. The Site provides information about our team, portfolio, and services, and allows users to contact us for business inquiries.
        </p>
      </>
    )
  },
  {
    id: 'eligibility',
    title: '2. Eligibility and Acceptable Use',
    content: (
      <>
        <p>
         By using this Site, you confirm that:
        </p>
        <ul className="list-disc pl-5 mt-4 space-y-1 ml-1">
          <li>You are at least 18 years old or the legal age in your jurisdiction.</li>
          <li>You will not use the Site for any unlawful, misleading, or malicious purposes.</li>
          <li>You will not attempt to interfere with or gain unauthorized access to our systems.</li>
          <li>You will not impersonate Ronin or submit false or misleading information.</li>
        </ul>
        <p className="mt-4">
          You agree to use the Site in a respectful, legal, and reasonable manner at all times.
        </p>
      </>
    )
  },
  {
    id: 'property',
    title: '3. Intellectual Property',
    content: (
      <>
        <p className="font-medium">
         All content on the Site — including designs, text, visuals, and branding — is the intellectual property of Ronin or its clients, unless otherwise stated.
        </p>
         <p>
         You may not:
        </p>
        <ul className="list-disc pl-5 mt-4 space-y-1 ml-1">
          <li>Copy, reuse, or modify our content without explicit permission.</li>
          <li>Claim ownership over our designs or work.</li>
          <li>Use our branding in a way that misrepresents your relationship with Ronin.</li>
        </ul>
      </>
    )
  },
  {
    id: 'privacy',
    title: '4. Privacy and Data',
    content: (
      <>
        <p>
         We collect and process personal data only as necessary to respond to your inquiries and improve our services. For full details, see our Privacy Policy.
        </p>
        <p className="mt-4">
          By submitting a form or reaching out to us, you consent to the use of your data in accordance with that policy.
        </p>
      </>
    )
  },
  {
    id: 'guarantee',
    title: '5. No Guarantees',
    content: (
      <>
        <p>
        All content on the Site is provided “as is.” While we aim to keep it accurate and current, we do not guarantee:
        </p>
        <ul className="list-disc pl-5 mt-4 space-y-1 ml-1">
          <li>That the Site will be free of errors or available at all times.</li>
          <li>That submitted forms or messages will be delivered without technical issues.</li>
          <li>That the Site or email communications are fully secure or immune from third-party interference.</li>
        </ul>
        <p className="mt-4">
          You can adjust your browser settings to block or remove cookies at any time.
        </p>
      </>
    )
  },
  {
    id: 'limitation',
    title: '6. Limitation of Liability',
    content: (
     <> 
      <p>
       To the maximum extent allowed by law, Ronin will not be liable for:
      </p>
       <ul className="list-disc pl-5 mt-4 space-y-1 ml-1">
          <li>Any indirect, incidental, or consequential damages.</li>
          <li>Loss of data, time, or opportunities arising from use of the Site.</li>
          <li>Third-party content, links, or platforms accessed via this Site.</li>
        </ul>
     </>
    )
  },
  {
    id: 'third-party-links',
    title: '7. Third-Party Links',
    content: (
      <p>
       Our Site may include links to external websites (e.g., Behance, Instagram). We are not responsible for the content, privacy practices, or availability of these sites.
      </p>
    )
  },
  {
    id: 'updates-terms',
    title: '8. Updates to These Terms',
    content: (
      <p>
        We may revise these Terms at any time. Updates will be posted on this page with a new effective date. Continued use of the Site after such updates indicates acceptance.
      </p>
    )
  },
  
  {
    id: 'contact',
    title: '9. Contact Us',
    content: (
      <>
        <p>
         For any questions regarding these Terms, you can contact us at:
        </p>
        <div className="mt-4 space-y-2">
          <p className="font-medium">Ronin</p>
          <p className="font-medium">Email: <a href="mailto:hi@ronindsgn.com" className="underline font-base">hi@ronindsgn.com</a></p>
          <p className="font-medium">Website: <a href="https://ronindsgn.com" className="underline font-base">https://ronindsgn.com</a></p>
        </div>
      </>
    )
  }
];

  return (
    <div className="font-ppneue flex flex-col items-center justify-between text-[#090C21] bg-white">
      <Header />
            <div className="flex flex-col mx-auto w-[90%] justify-between">
      {/* Breadcrumbs */}
      <div className="text-[#090C21AD] mb-8 text-[10px]" >
        <span className="hover:text-black cursor-pointer "
        onClick={goHome}>Home</span> / <span className="text-black">Terms and Conditions</span>
      </div>

      {/* Заголовок */}
      <h1 className="text-[30px] font-medium mb-16">Terms and Conditions</h1>
      <hr />
      <div className="border-[1px] border-[#D4E0ED] rounded-[12px] w-full p-[16px] flex flex-col gap-[10px] mt-8 mb-8 text-xs">
        <div>
        <p><span className="font-medium">Website:</span><a href="https://ronindsgn.com/" className="underline"> https://ronindsgn.com</a></p>
        <p><span className="font-medium">Entity:</span> Ronin</p>
        <p><span className="font-medium">Effective Date:</span> June 26, 2025</p>
      </div>

      {/* Введение (всегда видимое) */}
      <div>
        <p className="mb-4">
          Welcome to Ronin. These Terms and Conditions ("Terms") govern your access to and use of the Ronin website and any related services, forms, or communications provided through <span><a href="https://ronindsgn.com/" className="underline">https://ronindsgn.com </a></span> ("Site"). By accessing or using the Site, you agree to be bound by these Terms. If you do not agree, please do not use the Site.
        </p>
      </div>
      </div>

      {/* Аккордеон секций */}
      <div className="flex flex-col gap-8">
        {sections.map((section) => (
          <div key={section.id} className="border-[1px] border-[#D4E0ED] rounded-[12px] p-[16px]">
            <button
              onClick={() => toggleSection(section.id)}
              className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
            >
              <h2 className="text-[14px] font-medium">{section.title}</h2>
              <span className="text-2xl">
                {activeSection === section.id ? '−' : '+'}
              </span>
            </button>

            <AnimatePresence>
              {activeSection === section.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pb-4 text-[#090C21AD] text-xs">
                    {section.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
     <Footer />
    </div>
  );
};

export default Terms;