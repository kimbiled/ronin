import Header from '../components/mobile/Header';
import Footer from '../components/mobile/Footer';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
const Cookies = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(null);
  const goHome = () => {
    navigate('/');
  };
  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const sections = [
    {
      id: 'about-cookies',
      title: '1. What Are Cookies?',
      content: (
        <>
          <p>
            Cookies are small text files placed on your device when you visit a
            website. They help websites remember information about your visit —
            like language settings or previously visited pages — to make your
            experience more seamless.
          </p>
        </>
      ),
    },
    {
      id: 'cookie-types',
      title: '2. Types of Cookies We Use',
      content: (
        <>
          <p>We use the following categories of cookies:</p>
          <div className="flex flex-col mt-4">
            <p className="font-medium">Essential Cookies</p>
            <p>
              These are required for basic functionality, such as submitting
              forms or accessing secure areas of the site.
            </p>
          </div>
          <div className="flex flex-col mt-4">
            <p className="font-medium">Analytics Cookies</p>
            <p>
              We use tools like Google Analytics to understand how users
              interact with our site (e.g., which pages are visited most). This
              helps us improve our content and design decisions.
            </p>
          </div>
          <div className="flex flex-col mt-4">
            <p className="font-medium">Functional Cookies</p>
            <p>
              These cookies remember your preferences (e.g., language, region)
              and enhance personalization.
            </p>
          </div>
        </>
      ),
    },
    {
      id: 'third-party-cookies',
      title: '3. Third-Party Cookies',
      content: (
        <>
          <p>
            Some cookies may be set by third-party services we use — for
            example, embedded Behance content, Google Fonts, or analytics
            providers. We do not control these cookies directly but ensure they
            comply with standard privacy practices.
          </p>
        </>
      ),
    },
    {
      id: 'managing-cookies',
      title: '4. Managing Cookies',
      content: (
        <>
          <p>
            You can control or disable cookies in your browser settings. Please
            note that disabling certain cookies may affect the functionality or
            performance of the website.
          </p>
          <div className="flex flex-col mt-4">
            <p>To learn more about cookie management, visit:</p>
            <p>
              <a href="https://www.allaboutcookies.org" className="underline">
                https://www.allaboutcookies.org
              </a>
            </p>
          </div>
        </>
      ),
    },
    {
      id: 'your-consent',
      title: '5. Your Consent',
      content: (
        <>
          <p>
            By continuing to use our site, you consent to our use of cookies as
            outlined in this policy. You may adjust your preferences at any time
            in your browser.
          </p>
        </>
      ),
    },

    {
      id: 'contact',
      title: '6. Contact Us',
      content: (
        <>
          <p>
            If you have any questions about how we use cookies, feel free to
            reach out:
          </p>
          <div className="mt-4 space-y-2">
            <p className="font-medium">Ronin</p>
            <p className="font-medium">
              Email:{' '}
              <a href="mailto:hi@ronindsgn.com" className="underline font-base">
                hi@ronindsgn.com
              </a>
            </p>
            <p className="font-medium">
              Website:{' '}
              <a href="https://ronindsgn.com" className="underline font-base">
                https://ronindsgn.com
              </a>
            </p>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="font-ppneue flex flex-col items-center justify-between text-[#090C21] bg-white">
      <Header />
      <div className="flex flex-col mx-auto w-[90%] justify-between ">
        {/* Breadcrumbs */}
        <div className="text-[#090C21AD] mb-16 text-[10px]">
          <span className="hover:text-black cursor-pointer" onClick={goHome}>
            Home
          </span>{' '}
          / <span className="text-black">Cookie Policy</span>
        </div>

        {/* Заголовок */}
        <h1 className="text-[30px] font-medium mb-8">Cookie Policy</h1>
        <hr />
        <div className="border-[1px] border-[#D4E0ED] rounded-[12px] w-full p-[16px] flex flex-col gap-[10px] mt-8 mb-8 text-xs">
          <div>
            <p>
              <span className="font-medium">Last updated:</span> June 26, 2025
            </p>
            <p>
              <span className="font-medium">Applies to:</span>
              <a href="https://ronindsgn.com/" className="underline">
                {' '}
                https://ronindsgn.com
              </a>
            </p>
          </div>

          {/* Введение (всегда видимое) */}
          <div>
            <p className="mb-4">
              At Ronin, we use cookies and similar tracking technologies to
              enhance your browsing experience, analyze website traffic, and
              understand how users interact with our content. This Cookie Policy
              explains what cookies are, how we use them, and how you can manage
              your preferences.
            </p>
          </div>
        </div>

        {/* Аккордеон секций */}
        <div className="flex flex-col gap-8">
          {sections.map((section) => (
            <div
              key={section.id}
              className="border-[1px] border-[#D4E0ED] rounded-[12px] p-[16px]"
            >
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

export default Cookies;
