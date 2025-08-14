 

import NavbarSection from "@/app/component/NavbarSection";
import FooterSection from "@/app/component/FooterSection";
import PrivacyPages from "@/app/component/PrivacyPages";

const privacyPolicySections = [
    {
      title: "Privacy Policy",
      content: (
        <p>
          Your privacy is very important to us. Accordingly, we have developed
          this Privacy Policy to help you understand how we collect, use,
          communicate, disclose, and make use of Personal Information. If you
          do not agree with the terms of this Privacy Policy, do not use our
          website, mobile application, merchant application, or consumer
          application. Your continued use of our website, mobile application,
          merchant application, or consumer application constitutes your express
          informed consent and agreement to your personal data being processed
          pursuant to this Privacy Policy. Capitalized terms in this Privacy
          Policy have the meaning given, unless they are not defined, in which case
          they have the meaning given in the Terms and Conditions of Use.
        </p>
      ),
    },
    {
      title: "Types Of Information Collected",
      content: (
        <>
          <p>
            • Before or at the time of collecting Personal Information, we will
            identify the purposes for which information is being collected.
          </p>
          <p>
            • There are areas on our website, mobile application, merchant
            application, or consumer application where you can share information
            unique to an individual, such as your name, phone number, email
            address, and credit card information (“Personal Information”). We ask
            for this information to deliver requested services and products to
            you, respond to your questions, or deliver a product. If you
            communicate with us by email or complete online forms, we may require
            Personal Information that personally identifies you.
          </p>
          <p>
            Payment Information: When you sign up to use the MuchGlow website or
            app, we may collect data necessary to process payments associated
            with a purchase or order. Payment information may include your
            payment instrument number (such as a credit card number) and the
            security code associated with your payment instrument. All payment
            data is stored by a secure third-party payment gateway.
          </p>
          <p>
            Push Notifications: We may request to send you push notifications
            regarding your account or the mobile application. If you wish to
            opt-out from receiving these types of communications, you may turn
            them off in your device settings or email us at support@MuchGlow.com.
          </p>
          <p>
            • We do not knowingly collect information from anyone under 18 years
            of age. Parents can contact us to access, change, or delete Personal
            Information submitted by a child.
          </p>
        </>
      ),
    },
    {
      title: "Use Of Personal Information Collected",
      content: (
        <ul>
          <li className="textPara">
            We collect and use Personal Information solely with the objective
            of fulfilling specified purposes unless required otherwise by law.
          </li>
          <li className="textPara">
            Personal Information may be used to customize your experience on
            our Site.
          </li>
          <li className="textPara">
            Personal Information is retained only as long as necessary for
            these purposes.
          </li>
          <li className="textPara">
            We protect Personal Information through reasonable security
            safeguards against loss, theft, and unauthorized access.
          </li>
        </ul>
      ),
    },
    {
      title: "When Will Information Be Shared?",
      content: (
        <p>
          We share your data with service providers, affiliates, or when
          required by law. Any transfer of data complies with our Privacy
          Policy and includes necessary safeguards.
        </p>
      ),
    },
    {
      title: "Cookies",
      content: (
        <p>
          MuchGlow uses cookies to enhance your browsing experience. Cookies
          help us remember your identity, analyze user activity, and improve
          services. You can disable cookies in your browser settings, but some
          features may not work without them.
        </p>
      ),
    },
    {
      title: "Changes To Privacy Policy",
      content: (
        <p>
          MuchGlow reserves the right to update this Privacy Policy at any
          time. Changes are effective immediately upon posting. We recommend
          reviewing this page frequently for updates.
        </p>
      ),
    },
    {
      title: "How Do We Keep Your Information Safe?",
      content: (
        <p>
          MuchGlow implements safeguards like encryption, secure technology,
          and limited employee access to protect your data. While we take
          measures to secure your information, no system is 100% secure.
        </p>
      ),
    },
  ];
 
export default function Home() {
  return ( 
 <>
<NavbarSection/>
<PrivacyPages sections={privacyPolicySections} />
 <FooterSection/>
 </>
  );
}
