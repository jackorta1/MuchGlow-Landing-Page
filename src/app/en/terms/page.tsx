 /* eslint-disable react/no-unescaped-entities */

import NavbarSection from "@/app/component/NavbarSection";
import FooterSection from "@/app/component/FooterSection";
import PrivacyPages from "@/app/component/PrivacyPages";

const privacyPolicySections = [
    {
      title: "Terms and Conditions of Use",
      content: (
        <p>
          <strong>Acceptance of Terms</strong>
           <br/>  
          By accessing this website, merchant application, consumer application, or mobile application (collectively referred to as the "Site") associated with MuchGlow, you agree to comply with and be bound by these Terms and Conditions of Use. You also acknowledge that you are responsible for complying with all applicable laws and regulations. If you are accepting these Terms on behalf of an organization, you confirm that you have the legal authority to bind that entity to these Terms.

 <br/>  
If you do not agree with any of these terms, please refrain from using or accessing the Site. The Privacy Policy is incorporated by reference and forms an integral part of this agreement.
 
 </p>
      ),
    },
    {
      title: "Our Services",
      content: (
        <>
          <p>
          The Site connects you with local salons and beauty service providers to facilitate the booking of services such as haircuts, beauty treatments, massages, and other salon-related services. MuchGlow is a platform that enables you to access and book these services but is not a provider of the actual services themselves. MuchGlow works with local salons, which may offer promotions or discount codes for services available through the Site. These Promotional Codes are subject to the terms provided at the time of the promotion and are non-transferable, may be limited to specific services, and cannot be redeemed for cash. </p>
           </>
      ),
    },
     
    {
      title: "Use License",
      content: (
        <ul className="m-0 p-0">
          <p>
          A. MuchGlow grants you a limited, non-exclusive, non-transferable license to access and use the materials and software on this Site for personal, non-commercial use, as permitted by your user agreement. You agree not to:
           </p>
          <li className="textPara">
          1. Modify, copy, or redistribute the Materials;
          </li>
          <li className="textPara">
          2. Use the Materials for any commercial purpose outside of using the Site to book services;
          </li>
          <li className="textPara">
          3. Attempt to decompile, reverse engineer, or otherwise extract the source code of the Site;
          </li>
          <li className="textPara">
          4. Upload files containing harmful software or viruses;
          </li>
          <li className="textPara">
          5. Use the Materials to send spam or engage in any form of illegal activity;
          </li>
          <li className="textPara">
          6. Interfere with the functioning of the Site, including its servers and networks;
            </li>
            <li className="textPara">
            7. Remove copyright or proprietary notices from the Materials.
            </li>
            <li className="textPara">
            B. Violation of these restrictions will lead to the termination of your use of the Site, and you must delete any Materials you have downloaded. </li> 
        </ul>
      ),
    },
    {
      title: "Ownership",
      content: (
        <p> 
The content, materials, and software on this Site are owned by MuchGlow and are protected by copyright, trademark, and other intellectual property laws. Except for the license granted to you under this agreement, MuchGlow retains all rights to the materials provided on the Site. </p>
      ),
    },
    {
      title: "Rewards",
      content: (
        <p> 
When you use the Site to book services, you may be eligible to earn rewards or loyalty points. For instance, you might earn stamps each time you book a service with a participating salon. The merchant determines the number of stamps required to earn a reward. However, the issuance of rewards is at the discretion of the individual salons and is not guaranteed.  </p>
      ),
    },
    {
      title: "Payments",
      content: (
        <p>
     We collect data necessary to process payments, such as your credit card number and security code. Payment details are stored securely by a third-party payment gateway, and MuchGlow does not store any payment information. MuchGlow is not liable for any delays or issues arising from incorrect payment information. All payment transactions are processed through a secure, third-party payment gateway. </p>
      ),
    },
    {
      title: " MuchGlow App Wallet Top-Up",
      content: (
        <p>
  Customers have the option to top up their wallet within the MuchGlow app using various payment methods. The wallet balance can only be used for booking services through the app.
<br/>
<strong>No Refunds:</strong> Once a customer has topped up their wallet, funds cannot be withdrawn or refunded, and can only be used for transactions within the MuchGlow platform.
<br/>
<strong>Responsibility:</strong> Customers must ensure the accuracy of their top-up amount and verify payment details before completing the transaction.
<br/>
<strong>Disputes:</strong> In case of any disputes, MuchGlow reserves the right to investigate and resolve the issue.
<br/>
<strong>Expiration:</strong> Funds in the wallet do not expire. </p>
      ),
    },

    {
      title: "Disclaimer",
      content: (
        <p>
     The Materials on MuchGlow’s Site are provided “as is” and without any warranty, express or implied. MuchGlow disclaims all warranties, including implied warranties of merchantability or fitness for a particular purpose. We do not guarantee the Site’s functionality, uninterrupted service, or absence of harmful components. MuchGlow is not liable for any damages arising from the use or inability to use the Site. </p>
      ),
    },

    {
      title: "Limitation Of Liability",
      content: (
        <p>
      To the fullest extent permitted by law, MuchGlow will not be liable for any indirect, incidental, or consequential damages resulting from the use of the Site or services provided through it. This includes damages for loss of data, loss of business, or other financial losses. MuchGlow’s total liability for damages shall not exceed the amount paid by you for services booked via the Site. </p>
      ),
    },

    {
      title: "Indemnification",
      content: (
        <p>
     You agree to indemnify and hold harmless MuchGlow, its agents, employees, officers, and affiliates from any claims or damages arising out of your use of the Site, violation of these Terms, or unauthorized use of the services provided by MuchGlow.  </p>
      ),
    },

    {
      title: "No Price Guarantees",
      content: (
        <p>
   MuchGlow displays the prices for services provided by local salons. However, these prices are subject to change based on salon pricing policies. MuchGlow does not guarantee the accuracy of these prices and is not responsible for discrepancies between displayed prices and actual charges. </p>
      ),
    },

    {
      title: "Return & Cancellation Policy",
      content: (
        <p>
   Salons may cancel services or appointments after they have been booked, and if this occurs, they will notify you immediately. If you wish to cancel an appointment, you must contact the salon directly. For issues related to services booked through the Site, please reach out to our support team at support@MuchGlow.ae.  </p>
      ),
    },

    {
      title: "Revisions And Errors",
      content: (
        <p>
  The materials on the MuchGlow Site may contain errors, including technical or typographical mistakes. We may update or change the content on the Site without prior notice, but we are not obligated to do so. MuchGlow makes no guarantees about the completeness or accuracy of the Site’s content. </p>
      ),
    },

    {
      title: "Third Party Content",
      content: (
        <p>
    MuchGlow may link to third-party websites or content. MuchGlow is not responsible for the content, privacy practices, or services provided by these third parties. You assume all risks associated with your use of third-party sites or services linked from our Site. </p>
      ),
    },

    {
      title: "Revision Of Terms And Conditions Of Use",
      content: (
        <p>
   MuchGlow reserves the right to modify these Terms and Conditions at any time. By continuing to use the Site after such modifications, you agree to be bound by the revised Terms.   </p>
      ),
    },

    {
      title: "Governing Law, Jurisdiction, Venue, And Attorneys’ Fees",
      content: (
        <p>
    These Terms shall be governed by the laws of the United Arab Emirates. Any legal proceedings arising from your use of the Site shall be brought before the courts in the United Arab Emirates, and you agree to submit to the jurisdiction of these courts. You are responsible for all reasonable attorneys' fees incurred by MuchGlow in enforcing these Terms. </p>
      ),
    },

 

    {
      title: "Marketing",
      content: (
        <p> 
MuchGlow may contact you with information about products, promotions, and services. You may opt out of these communications at any time by clicking “unsubscribe” or contacting us at support@MuchGlow.ae. You may not opt out of transactional emails related to your account.  </p>
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
