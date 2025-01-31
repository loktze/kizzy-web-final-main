import React, { useState } from "react";
import Header from "../components/layout/Header";
import useMediaQuery from "../hooks/useMediaQuery";
// import { useNavigate } from "react-router-dom";

const PrivacyPolicy: React.FC = () => {
  const [currentPage] = useState<number>(6);
  const isMedium = useMediaQuery("(max-width: 768px)");
  // const navigate = useNavigate();

  // const handleBack = () => {
  //   navigate(-1);
  // };
  return (
    <div
      className="relative h-screen flex flex-col bg-cover bg-center"
      style={{ backgroundImage: "url('/images/background.png')" }}
      onTouchStart={(e) => e.stopPropagation()}
    >
      <div className="fixed top-0 left-0 w-full z-[9999]">
        <Header currentPage={currentPage} isMedium={isMedium} />
      </div>
      <div className="flex flex-col gap-4 xl:gap-6 justify-center pt-24 xl:pt-32">
        <p className="headline text-2xl text-center">
          Our commitment to
          <br className="md:hidden" /> protecting your privacy
        </p>
        <p className="subtext text-grey text-center">
          Learn more about how Kizzy collects and
          <br className="md:hidden" />
          uses data and your rights as a Kizzy user.
        </p>
      </div>
      <div className="w-full font-lexend text-[#666] text-[14px] lg:text-[16px] my-8 px-5 lg:px-64 py-7 overflow-y-auto bg-transparent hide-scrollbar">
        <h1 className="text-[16px] text-[#333333] font-semibold mb-2">Privacy Policy</h1>
        <h1 className="text-[16px] text-[#333333] font-semibold mb-2">Kizzy Labs - Privacy Policy</h1>
        <h1 className="text-[16px] text-[#333333] font-semibold mb-7">Last modified: July 31st, 2024</h1>

        <h1 className="text-[16px] text-[#333333] font-semibold mb-2">Introduction</h1>
        <p className="mb-4">
          At Kizzy Labs Corp. (the “Company,” “we,” “our,” “us,” or “KIZZY”), we take protecting your privacy very seriously. This “Privacy Policy” describes the types of information we may collect from you or that you may provide when you visit our website located at https://kizzy.io/ and its sub-pages, including any content or functionality offered on or through the website-hosted user interface accessible via https://testnet.kizzy.io/   (collectively, the “Website”), and our practices for collecting, using, maintaining, and disclosing that information. This Privacy Policy supplements our “Terms of Use,” which applies to this document and controls to the extent necessary to resolve any material conflict.
        </p>
        <p className="mb-4">
          You (the “User”) must read the Privacy Policy carefully before using the Website. By using the Website, you accept and agree to be bound and abide by this Privacy Policy, and the Terms of Use. If you do not agree to the Privacy Policy, Terms of Use, or any documents that are incorporated herein by reference, you must not access or use the Website. This policy may change from time to time, and by continuing to use our Website or provide us with your information, you agree to those changes. We encourage you to check the Privacy Policy periodically for updates.
        </p>
        <p className="mb-4">
          The Privacy Policy applies to information we collect:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>On the Website.</li>
          <li>In email, text, and other electronic messages between you and the Website.</li>
          <li>When you interact with our advertising and applications on third-party websites and services, if those applications or advertising include links to this policy.</li>
        </ul>
        <p className="mb-4">
          This Privacy Policy does not apply to information collected by:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>The Company offline or through any other means, including but not limited to, on any other website operated by the Company or any third party (including our affiliates and subsidiaries); or</li>
          <li>Any third party (including our affiliates and subsidiaries), including but not limited to, any application or content that may link to or be accessible from or on the Website.</li>
        </ul>
        <p className="mb-4">
          This policy may change from time to time, and by continuing to use our Website or provide us with your information, you agree to those changes. We encourage you to check this Privacy Policy periodically for updates.
        </p>
        <h1 className="text-[16px] text-[#333333] font-semibold mb-2">Children Under the Age of 18:</h1>
        <p className="mb-4">
          Our Website is not intended for children under 18 years of age. No one under age 18 may provide any information to us, including on the Website. We do not knowingly collect personal information from children under 18. If you are under 18, do not use or provide any information on this Website or through any of its features, or provide any information about yourself to us, including your name, address, telephone number, email address, or any blockchain identity or records related to you. If we learn we have collected or received personal information from a child under 18 without verification of parental consent, we will delete that information. If you believe we might have any information from or about a child under 18, please contact us at [INSERT PRIVACY EMAIL].
        </p>
        <h1 className="text-[16px] text-[#333333] font-semibold mb-2"> The Kinds of Personal Information We Collect:</h1>
        <ul className="list-disc pl-6 mb-4">
          <li>Information submitted in forms on our Website, such as during registration, when participating in events or promotions we sponsor, and when reporting an issue with our Website.</li>
          <li>By which you may be personally identified, such as name and email address (“Personal Information”);</li>
          <li>Correspondence records, including email addresses, if you contact us for support or inquiries.</li>
          <li>Blockchain-related identifiers, such as your public key address or other public identifiers linked to your blockchain activities.</li>
          <li>Your IP address;</li>
          <li>Information on the API queries made, including but not limited to, timestamps, frequency of requests, and types of data requested;</li>
          <li>API query logs, detailing the timestamps, frequency, and types of data requests made by your account.</li>
          <li>Transactional details on the platform, including records of data scraped, bandwidth supplied, and any other relevant activities.</li>
        </ul>
        <p className="mb-4">
          Information Collected Automatically: When using our Website, we may use automatic data collection technologies to collect certain information about your equipment, browsing actions and patterns, including but not limited to:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Information about your internet connection;</li>
          <li>Information about the equipment, software, and configurations you use to access our website;</li>
          <li>Usage details, including but not limited to, the total time you spend on our website, the time you spend on each page and in what order those pages were visited and the internal links clicked, the general geographic location from which you access our Website, which browser and operating system you are using to visit our Website, and the referring website; and</li>
          <li>Performance details, including but not limited to, monitor page load times, CPU/memory usage, browser crashes and React component rendering.</li>
          <li>The information we collect automatically is only statistical data and does not, itself, include Personal Information, though it may be correlated with other Personal Information to build a unique profile about you (for example, in relation to your publicly viewable blockchain activities; see the section below entitled Privacy "&amp;" The Blockchain). Nonetheless, we do not perform such associations to build unique user profiles and only use this information to help us improve our Website and to deliver a better and more personalized service, including by enabling us to:</li>
          <li>Estimate our audience size and usage patterns;</li>
          <li>Store information about your preferences, allowing us to customize our Website according to your individual interests;</li>
          <li>Speed up your searches; or</li>
          <li>Recognize you when you return to our Website.</li>
          <li>The technologies we use for this automatic data collection may include:</li>
          <li>Cookies (or browser cookies). A cookie is a small file placed on the hard drive of your computer. Users may refuse to accept browser cookies by activating the appropriate setting on your browser. However, if you select this setting, you may be unable to access certain parts of our Website. Unless you have adjusted your browser setting so that it will refuse cookies, our system will issue cookies when you direct your browser to our Website.</li>
          <li>Flash Cookies. Certain features of our Website may use local stored objects (or Flash cookies) to collect and store information about your preferences and navigation to, from, and on our Website. Flash cookies are not managed by the same browser settings as are used for browser cookies. For information about managing your privacy and security settings for Flash cookies, see the section below entitled How We Use Your Information "&amp;" Why We Collect It.</li>
          <li>Web Beacons. Pages of our Website and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of certain website content and verifying system and server integrity).</li>
          <li>We have pages on social media sites like Medium, X (Twitter), and Discord. When you interact with our social media pages, we may collect Personal Information that you elect to provide to us, such as your contact details. In addition, the companies that host our social media pages may provide us with aggregate information and analytics about our social media activity.</li>
        </ul>
        <h1 className="text-[16px] text-[#333333] font-semibold mb-2">How We Use Your Information "&amp;" Why We Collect It:</h1>
        <p className="mb-4">
          We may use any information that we collect about you or that you provide to us to do the following:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>To present our Website and its contents to you;</li>
          <li>To provide you with information, products, or services that you request from us;</li>
          <li>To fulfill any other purpose for which you provide it;</li>
          <li>To carry out our obligations and enforce our rights arising from any contracts entered into between you and us, including for billing and collection;</li>
          <li>To notify you about changes to our Website or any products or services we offer or provide though it;</li>
          <li>To market or advertise the Website;</li>
          <li>To improve our processes and the delivery of our Website and services;</li>
          <li>To allow you to participate in interactive features on our Website;</li>
          <li>To help facilitate the ongoing development of our suite of blockchain-based software applications;</li>
          <li>In any other way we may describe when you provide the information; or</li>
          <li>For any other purpose with your consent.</li>
        </ul>
        <h1 className="text-[16px] text-[#333333] font-semibold mb-2">Disclosure of Your Information:</h1>
        <p className="mb-4">
          We may disclose aggregated information and information that does not directly identify any individual about our users without restriction. We may disclose Personal Information that you provide to us as described in this Privacy Policy:        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>To our subsidiaries and affiliates;</li>
          <li>To contractors, service providers, and other third parties we use to support our Website and services;</li>
          <li>To a buyer or successor in the event of a merger, divestiture, restructuring, reorganization, dissolution or other sale or transfer of some or all of the Company’s assets, whether as a going concern or as a part of bankruptcy, liquidation, or similar proceeding;</li>
          <li>To fulfill the purpose for which you provide it;</li>
          <li>For any other purpose disclosed by us when you provide the information; or</li>
          <li>With your consent.</li>
        </ul>
        <p className="mb-4">
          We may also disclose your Personal Information:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>To comply with any court order, law, or legal process, including to respond to any government or regulatory request;</li>
          <li>To enforce or apply our Terms of Use and other agreements, including for billing and collection purposes; or</li>
          <li>If we believe disclosure is necessary or appropriate to protect the rights, property, or safety of the Website, our services, our customers, or others. This includes exchanging information with other companies and organizations for the purposes of fraud protection, credit risk reduction, or identifying malicious actors using our products or blockchain networks generally.</li>
        </ul>
        <p className="mb-4">
          We do not sell your Personal Information to third-parties for monetary compensation.
        </p>
        <h1 className="text-[16px] text-[#333333] font-semibold mb-2">Privacy "&amp;" The Blockchain:</h1>
        <p className="mb-4">
          A key feature of many blockchain technologies is the transparency and public accessibility of on-chain transactions. This includes but is in no way limited to your public sending address (“public key”) and any other information that you choose to include. Additionally, information stored on-chain may be public, immutable, and not easily removed or deleted and, in many cases, cannot be deleted. Your public addresses may reveal information about you and this information can potentially be correlated now or in the future by any party who chooses to do so, including law enforcement. If you're not yet familiar with how blockchain technology works, especially its transparent and public characteristics, we recommend you explore this topic further. This understanding is crucial if you plan to engage with any future rewards or ownership systems that may involve blockchain transactions.
        </p>
        <h1 className="text-[16px] text-[#333333] font-semibold mb-2">Your Choices:</h1>
        <p className="mb-4">
          We strive to provide you with choices regarding the Personal Information you provide to us. We have created mechanisms to provide you with the following control over your information:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Tracking Technologies and Advertising. You can set your browser to refuse all or some browser cookies, or to alert you when cookies are being sent. To learn how you can manage your Flash cookie settings, visit the Flash player settings page on Adobe’s website. If you disable or refuse cookies, please note that some parts of this site may then be inaccessible or not function properly.</li>
          <li>Promotional Offers from the Company. If you do not wish to have your email address used by the Company to promote our own or third parties’ products or services, you can opt-out by clicking the “unsubscribe” link at the bottom of such an email that we send you.</li>
        </ul>
        <h1 className="text-[16px] text-[#333333] font-semibold mb-2">Data Security:</h1>
        <p className="mb-4">
          We have implemented measures designed to secure your Personal Information from accidental loss and from unauthorized access, use, alteration, and disclosure. The safety and security of your information also depends on you. Where we have given you (or where you have chosen) a password for access to certain parts of our Website, you are responsible for keeping this password confidential. This applies to any private keys you may use in relation to our Website or our services. We ask you not to share your password or private keys with anyone.
        </p>
        <p className="mb-4">
          Unfortunately, the transmission of information via the internet is not completely secure. Although we do our best to protect your Personal Information, we cannot guarantee the security of your Personal Information transmitted to our Website. Any transmission of Personal Information is at your own risk. We are not responsible for circumvention of any privacy settings or security measures contained on the Website.
        </p>
        <h1 className="text-[16px] text-[#333333] font-semibold mb-2">Special Disclosures for European Users:</h1>
        <p className="mb-4">
          As a resident of the European Union (“EU”) or European Economic Area (“EEA”), you possess certain rights under the General Data Protection Regulation (“GDPR”). Our commitment is to ensure the privacy and protection of your personal data. Below are your rights, detailed in a manner that respects the unique requirements of GDPR:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>The right to access – You have the right to request copies of your personal data from us. We may charge you a small fee for this service.</li>
          <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</li>
          <li>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</li>
          <li>The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
          <li>The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.</li>
          <li>The right to data portability – You have the right to request we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
        </ul>
        <p className="mb-4">
          If you would like to exercise any of these rights, please contact us at [INSERT CONTACT EMAIL]. If you make a request, we will respond within one month.
        </p>
        <p className="mb-4">
          If you reside within the EEA, the GDPR grants you specific rights concerning your personal data. “Personal Information” within this policy is equivalent to “personal data” as defined by the GDPR.
        </p>
        <p className="mb-4">
          Legal Basis for Processing: We process your data based on lawful justifications, including but not limited to, your consent, the necessity for contract fulfillment, and our legitimate interests.
        </p>
        <p className="mb-4">
          Data Subject Requests: EEA residents have the right to access, correct, delete, or transfer their personal data, and to object to or limit its processing. Should you wish to exercise these rights, contact us as outlined below. Note, certain requests may impact our ability to deliver our services to you.
        </p>
        <p className="mb-4">
          Questions or Complaints: EEA residents with concerns about our data handling practices not resolved to their satisfaction have the right to lodge a complaint with their local Data Protection Authority. Visit EU Data Protection Authorities for contact details.
        </p>
        <h1 className="text-[16px] text-[#333333] font-semibold mb-2">For California Residents:</h1>
        <p className="mb-4">
          Under the California Civil Code Section § 1798.83, if you reside in California, you have the right to request information regarding the disclosure of your personal information by us to third parties for the third parties’ direct marketing purposes. To inquire about our practices related to the sharing of information with third parties and affiliates for their direct marketing purposes, please contact us at [INSERT CONTACT INFORMATION].
        </p>
        <h1 className="text-[16px] text-[#333333] font-semibold mb-2">Changes to Our Privacy Policy:</h1>
        <p className="mb-4">
          It is our policy to post any changes we make to our Privacy Policy on this page. If we make material changes to how we treat our Users’ Personal Information, we will notify you through a notice on the Website home page. The date the Privacy Policy was last revised is identified at the top of the page. You are responsible for ensuring we have an up-to-date active and deliverable email address for you, and for periodically visiting our Website and this Privacy Policy to check for any changes.
        </p>
        <h1 className="text-[16px] text-[#333333] font-semibold mb-2">What if I have questions about this Privacy Policy?</h1>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, please send us a detailed message to [INSERT PRIVACY EMAIL] and we will try to resolve your concerns and provide further information.
        </p>
      </div>

      {/* <div className="flex flex-col items-center justify-center">
        <button onClick={handleBack} className="text-black">
          Back
        </button>
      </div> */}
    </div>
  );
};

export default PrivacyPolicy;
