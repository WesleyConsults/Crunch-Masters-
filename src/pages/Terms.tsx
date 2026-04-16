import { Shield, AlertTriangle, HelpCircle, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Terms() {
  return (
    <div className="bg-stone-50 min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-100 text-brand-600 rounded-2xl mb-6">
            <Shield className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-stone-900 mb-4">Terms and Conditions</h1>
          <p className="text-lg text-stone-500">Please read these terms carefully before using our services.</p>
        </div>

        {/* Important Alert */}
        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-2xl shadow-sm mb-12 flex items-start gap-4">
          <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
          <div>
            <h3 className="text-amber-800 font-bold mb-1">IMPORTANT NOTICE</h3>
            <p className="text-amber-700 font-medium">
              Do NOT Google our contact! Use the Web App or call <a href="tel:0551195049" className="underline hover:text-amber-900">0551195049</a> / <a href="tel:0248254648" className="underline hover:text-amber-900">0248254648</a>.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-stone-200/50 border border-stone-100 mb-12">
          <div className="prose prose-stone max-w-none prose-h2:text-brand-900 prose-h2:text-2xl prose-h2:mb-4 prose-h2:mt-8 first:prose-h2:mt-0 prose-p:text-stone-600 prose-p:leading-relaxed">
            
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the services provided by CrunchMasters, operating under the Pizzaman Chickenman brand, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use our services.
            </p>

            <h2>2. Use of Services</h2>
            <p>
              Our services are available for your personal, non-commercial use. You agree to use our platform and services only for lawful purposes and in accordance with these Terms and Conditions. You are prohibited from violating or attempting to violate the security of our services.
            </p>

            <h2>3. Account Registration</h2>
            <p>
              To access certain features of our services, you may be required to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. You are responsible for safeguarding your password and for all activities that occur under your account.
            </p>

            <h2>4. Orders and Payment</h2>
            <p>
              All orders placed through our platform are subject to acceptance and availability. We reserve the right to refuse or cancel any order for any reason. Prices are subject to change without notice. Payment must be made at the time of order placement unless otherwise agreed. We accept various payment methods as indicated on our platform.
            </p>

            <h2>5. Delivery Terms</h2>
            <p>
              We strive to deliver your orders within the estimated delivery time. However, delivery times are estimates and not guaranteed. We are not liable for any delays in delivery. Risk of loss and title for items purchased pass to you upon delivery to the carrier.
            </p>

            <h2>6. Product Information</h2>
            <p>
              We strive to provide accurate product descriptions and images. However, we do not warrant that product descriptions, images, or other content on our platform are accurate, complete, reliable, current, or error-free. If a product you receive is not as described, your sole remedy is to return it in accordance with our refund policy.
            </p>

            <h2>7. Intellectual Property</h2>
            <p>
              All content included on our platform, such as text, graphics, logos, images, and software, is the property of CrunchMasters or its content suppliers and is protected by international copyright laws. The compilation of all content on this platform is our exclusive property.
            </p>

            <h2>8. User Conduct</h2>
            <p>
              You agree not to use our services to post, transmit, or share any content that is unlawful, harmful, threatening, abusive, defamatory, or otherwise objectionable. We reserve the right to remove any content and terminate accounts that violate these terms.
            </p>

            <h2>9. Privacy Policy</h2>
            <p>
              Your use of our services is also governed by our Privacy Policy. Please review our Privacy Policy to understand our practices regarding the collection and use of your personal information.
            </p>

            <h2>10. Limitation of Liability</h2>
            <p>
              CrunchMasters shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services. Our total liability shall not exceed the amount you paid for the products or services in question.
            </p>

            <h2>11. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless CrunchMasters and its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses arising out of your use of our services or violation of these terms.
            </p>

            <h2>12. Modifications to Terms</h2>
            <p>
              We reserve the right to modify these Terms and Conditions at any time. We will notify users of any material changes by posting the new terms on our platform. Your continued use of our services following the posting of changes constitutes your acceptance of such changes.
            </p>

            <h2>13. Governing Law</h2>
            <p>
              These Terms and Conditions are governed by and construed in accordance with the laws of Ghana. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Ghana.
            </p>

            <h2>14. Contact Information</h2>
            <p>
              If you have any questions about these Terms and Conditions, please contact us on <a href="mailto:CrunchMasters2025@gmail.com" className="text-brand-600 font-medium">CrunchMasters2025@gmail.com</a> or call us on <a href="tel:0551195049" className="text-brand-600 font-medium">0551195049</a> / <a href="tel:0248254648" className="text-brand-600 font-medium">0248254648</a>. Our office is located within KNUST CAMPUS opposite business school postgraduate block.
            </p>
          </div>
        </div>

        {/* Contact Support Section */}
        <div className="bg-stone-900 rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-brand-500 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-32 h-32 bg-brand-500 rounded-full blur-3xl opacity-20"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-stone-800 rounded-full mb-6 text-brand-400">
              <HelpCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Questions About Our Terms?</h3>
            <p className="text-stone-400 mb-8 max-w-lg mx-auto">
              If you have any questions or concerns about these Terms and Conditions, please don't hesitate to reach out to our team.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-stone-800/50 p-6 rounded-2xl flex flex-col items-center border border-stone-800">
                <Mail className="w-6 h-6 text-brand-500 mb-3" />
                <span className="text-sm text-stone-400 font-medium mb-1">Email</span>
                <a href="mailto:CrunchMasters2025@gmail.com" className="font-medium hover:text-brand-400 transition-colors">CrunchMasters2025@<br/>gmail.com</a>
              </div>
              <div className="bg-stone-800/50 p-6 rounded-2xl flex flex-col items-center border border-stone-800">
                <Phone className="w-6 h-6 text-brand-500 mb-3" />
                <span className="text-sm text-stone-400 font-medium mb-1">Phone</span>
                <a href="tel:0551195049" className="font-medium hover:text-brand-400 transition-colors">0551195049</a>
                <a href="tel:0248254648" className="font-medium hover:text-brand-400 transition-colors">0248254648</a>
              </div>
              <div className="bg-stone-800/50 p-6 rounded-2xl flex flex-col items-center border border-stone-800 text-center">
                <MapPin className="w-6 h-6 text-brand-500 mb-3" />
                <span className="text-sm text-stone-400 font-medium mb-1">Address</span>
                <span className="font-medium leading-tight">KNUST CAMPUS, Opposite Business School Postgraduate Block.</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
