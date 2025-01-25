export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 animate-float-slow">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="service-card bg-white p-6 rounded-lg shadow-md group hover:animate-float">
            <h3 className="text-xl font-semibold mb-4">Sales Team Setup & Automation</h3>
            <p className="text-gray-700 mb-4">
              We help you build and optimize your remote sales team from the ground up. Our comprehensive solution includes:
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li className="transform transition-transform group-hover:translate-x-1">Recruitment and training of dedicated sales professionals</li>
              <li className="transform transition-transform group-hover:translate-x-1">Implementation of sales tools and CRM systems</li>
              <li className="transform transition-transform group-hover:translate-x-1">Setting up lead generation and qualification processes</li>
              <li className="transform transition-transform group-hover:translate-x-1">Sales workflow automation and optimization</li>
              <li className="transform transition-transform group-hover:translate-x-1">Performance tracking and team management systems</li>
              <li className="transform transition-transform group-hover:translate-x-1">Ongoing training and process improvement</li>
            </ul>
          </div>
          <div className="service-card bg-white p-6 rounded-lg shadow-md group hover:animate-float">
            <h3 className="text-xl font-semibold mb-4">Help Desk Automation</h3>
            <p className="text-gray-700 mb-4">Never let a customer query go unanswered. Our solutions include:</p>
            <ul className="list-disc list-inside text-gray-700">
              <li className="transform transition-transform group-hover:translate-x-1">24/7 ticket management systems</li>
              <li className="transform transition-transform group-hover:translate-x-1">AI chatbots for instant responses</li>
              <li className="transform transition-transform group-hover:translate-x-1">Automated escalation for complex issues</li>
              <li className="transform transition-transform group-hover:translate-x-1">Performance tracking and analytics</li>
              <li className="transform transition-transform group-hover:translate-x-1">Integration with your sales and CRM systems</li>
              <li className="transform transition-transform group-hover:translate-x-1">Custom workflow automation</li>
            </ul>
          </div>
          <div className="service-card bg-white p-6 rounded-lg shadow-md group hover:animate-float">
            <h3 className="text-xl font-semibold mb-4">Customer Relationship Management</h3>
            <p className="text-gray-700 mb-4">Cultivate lasting relationships with your customers using:</p>
            <ul className="list-disc list-inside text-gray-700">
              <li className="transform transition-transform group-hover:translate-x-1">Custom CRM platforms tailored to your needs</li>
              <li className="transform transition-transform group-hover:translate-x-1">Automated customer segmentation</li>
              <li className="transform transition-transform group-hover:translate-x-1">Real-time data management and analytics</li>
              <li className="transform transition-transform group-hover:translate-x-1">Multi-channel communication integration</li>
              <li className="transform transition-transform group-hover:translate-x-1">Customer journey optimization</li>
              <li className="transform transition-transform group-hover:translate-x-1">Automated follow-up systems</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

