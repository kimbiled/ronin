import HeaderDesktop from '../components/desktop/HeaderDesktop';
import FooterDesktop from '../components/desktop/FooterDesktop';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
const PrivacyDesktop = () => {
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
      id: 'information',
      title: '1. Information We Collect',
      content: (
        <>
          <h3 className="font-medium">Data You Provide</h3>
          <p>
            We may collect personal data when you fill out forms, reach out via
            email, or contact us for a project. This may include:
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-1 ml-8">
            <li>Name</li>
            <li>Email address</li>
            <li>Company name and role</li>
            <li>Project details or inquiries</li>
          </ul>

          <h3 className="font-medium mt-4">Automatic Data Collection</h3>
          <p>We use basic analytics tools to collect:</p>
          <ul className="list-disc pl-5 mt-4 space-y-1 ml-8">
            <li>Browser type, device, and OS</li>
            <li>Pages visited and time spent</li>
            <li>Interaction behavior (scrolls, clicks)</li>
            <li>IP address and geolocation (approximate)</li>
            <li>Cookies (see Section 5)</li>
          </ul>
        </>
      ),
    },
    {
      id: 'usage',
      title: '2. How We Use Your Information',
      content: (
        <>
          <p>We use your information to:</p>
          <ul className="list-disc pl-5 mt-4 space-y-1 ml-8">
            <li>Respond to messages and inquiries</li>
            <li>Provide custom project estimates or proposals</li>
            <li>Improve our site experience and performance</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p className="mt-4 font-medium">
            We do not sell or rent your personal data.
          </p>
        </>
      ),
    },
    {
      id: 'sharing',
      title: '3. Sharing Your Information',
      content: (
        <>
          <p className="font-medium">We may share your data with:</p>
          <p>
            We may collect personal data when you fill out forms, reach out via
            email, or contact us for a project. This may include:
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-1 ml-8">
            <li>Service providers (hosting, email, CRM)</li>
            <li>Legal authorities if required by law</li>
            <li>Buyers in the event of business restructuring</li>
          </ul>
          <p className="mt-4 font-medium">
            All third parties follow strict confidentiality and security
            standards.
          </p>
        </>
      ),
    },
    {
      id: 'rights',
      title: '4. Your Rights',
      content: (
        <>
          <p>Depending on your location, you may have the right to:</p>
          <ul className="list-disc pl-5 mt-4 space-y-1 ml-8">
            <li>Access the personal data we hold</li>
            <li>Correct or update your information</li>
            <li>Request deletion</li>
            <li>Opt out of future communication</li>
          </ul>
          <p className="mt-4">
            To make a request, contact:{' '}
            <a href="mailto:hi@ronindsgn.com" className="underline">
              hi@ronindsgn.com
            </a>
          </p>
        </>
      ),
    },
    {
      id: 'cookies',
      title: '5. Cookies & Analytics',
      content: (
        <>
          <p>We use cookies to:</p>
          <ul className="list-disc pl-5 mt-4 space-y-1 ml-8">
            <li>Monitor site performance</li>
            <li>Understand how users interact with our content</li>
            <li>Improve design and UX</li>
          </ul>
          <p className="mt-4">
            You can adjust your browser settings to block or remove cookies at
            any time.
          </p>
        </>
      ),
    },
    {
      id: 'security',
      title: '6. Data Security',
      content: (
        <p>
          We implement reasonable technical and organizational measures to
          protect your data. However, no method of transmission over the
          Internet is 100% secure.
        </p>
      ),
    },
    {
      id: 'retention',
      title: '7. Data Retention',
      content: (
        <p>
          We retain your information only as long as needed to fulfill the
          purpose for which it was collected.
        </p>
      ),
    },
    {
      id: 'links',
      title: '8. Third-Party Links',
      content: (
        <p>
          Our site may contain links to external websites. We are not
          responsible for their privacy practices.
        </p>
      ),
    },
    {
      id: 'children',
      title: '9. Children’s Privacy',
      content: (
        <p>
          Our services are not intended for users under 13. We do not knowingly
          collect data from children.
        </p>
      ),
    },
    {
      id: 'updates',
      title: '10. Policy Updates',
      content: (
        <p>
          We may update this Privacy Policy. The latest version will always be
          posted on this page.
        </p>
      ),
    },
    {
      id: 'contact',
      title: '11. Contact Us',
      content: (
        <>
          <p>If you have any questions about this policy, contact us at:</p>
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
      <HeaderDesktop />
      <div className="max-w-[1200px] w-full justify-between mb-[200px]">
        {/* Breadcrumbs */}
        <div className="text-[#090C21AD] mb-16 mt-[120px]">
          <span className="hover:text-black cursor-pointer" onClick={goHome}>
            Home
          </span>{' '}
          / <span className="text-black">Privacy Policy</span>
        </div>

        {/* Заголовок */}
        <h1 className="text-[44px] font-medium mb-16">Privacy Policy</h1>
        <hr />
        <div className="border-[1px] border-[#D4E0ED] rounded-[12px] w-full p-[32px] flex flex-col gap-[10px] mt-16 mb-8">
          <div>
            <p>
              <span className="font-medium">Effective Date:</span> June 26, 2025
            </p>
            <p>
              <span className="font-medium">Website:</span>
              <a href="https://ronindsgn.com/"> https://ronindsgn.com/</a>
            </p>
            <p>
              <span className="font-medium">Company:</span> Ronin
            </p>
          </div>

          {/* Введение (всегда видимое) */}
          <div>
            <p className="mb-4">
              At Ronin, we respect your privacy and are committed to protecting
              any personal data you share with us. This Privacy Policy explains
              how we collect, use, and safeguard
              <br /> your information when you visit our website, submit a
              request, or interact with our content.
            </p>
            <p>
              By using this site, you agree to the practices described below.
            </p>
          </div>
        </div>

        {/* Аккордеон секций */}
        <div className="flex flex-col gap-8">
          {sections.map((section) => (
            <div
              key={section.id}
              className="border-[1px] border-[#D4E0ED] rounded-[12px] p-[32px]"
            >
              <button
                onClick={() => toggleSection(section.id)}
                className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
              >
                <h2 className="text-[20px] font-medium">{section.title}</h2>
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
                    <div className="pb-4 text-[#090C21AD]">
                      {section.content}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
      <FooterDesktop />
    </div>
  );
};

export default PrivacyDesktop;
