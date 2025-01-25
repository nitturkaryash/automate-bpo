export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="service-card bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Sales Team Setup & Automation</h3>
            <p className="text-gray-700 mb-4">
              We help you build and optimize your remote sales team from the ground up. Our comprehensive solution includes:
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Recruitment and training of dedicated sales professionals</li>
              <li>Implementation of sales tools and CRM systems</li>
              <li>Setting up lead generation and qualification processes</li>
              <li>Sales workflow automation and optimization</li>
              <li>Performance tracking and team management systems</li>
              <li>Ongoing training and process improvement</li>
            </ul>
          </div>
          <div className="service-card bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Help Desk Automation</h3>
            <p className="text-gray-700 mb-4">Never let a customer query go unanswered. Our solutions include:</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>24/7 ticket management systems</li>
              <li>AI chatbots for instant responses</li>
              <li>Automated escalation for complex issues</li>
              <li>Performance tracking and analytics</li>
              <li>Integration with your sales and CRM systems</li>
              <li>Custom workflow automation</li>
            </ul>
          </div>
          <div className="service-card bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Customer Relationship Management</h3>
            <p className="text-gray-700 mb-4">Cultivate lasting relationships with your customers using:</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Custom CRM platforms tailored to your needs</li>
              <li>Automated customer segmentation</li>
              <li>Real-time data management and analytics</li>
              <li>Multi-channel communication integration</li>
              <li>Customer journey optimization</li>
              <li>Automated follow-up systems</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

