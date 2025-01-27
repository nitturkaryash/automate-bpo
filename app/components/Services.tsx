export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-float-slow">
          Our BPO Solutions
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Sales Team */}
          <div className="service-card bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-purple-600">Sales Team</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-cyan-500 mr-2">•</span>
                Expert Sales Representatives
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-2">•</span>
                Lead Generation
              </li>
            </ul>
          </div>

          {/* AI Solutions */}
          <div className="service-card bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-purple-600">AI Solutions</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-cyan-500 mr-2">•</span>
                24/7 AI Chatbots
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-2">•</span>
                Smart Automation
              </li>
            </ul>
          </div>

          {/* Customer Support */}
          <div className="service-card bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-purple-600">Customer Support</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-cyan-500 mr-2">•</span>
                24/7 Support
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-2">•</span>
                Multi-channel
              </li>
            </ul>
          </div>

          {/* Back Office */}
          <div className="service-card bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-purple-600">Back Office</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-cyan-500 mr-2">•</span>
                Data Management
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-2">•</span>
                Process Automation
              </li>
            </ul>
          </div>

          {/* Training */}
          <div className="service-card bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-purple-600">Training</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-cyan-500 mr-2">•</span>
                Skill Development
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-2">•</span>
                Performance Coaching
              </li>
            </ul>
          </div>

          {/* Quality Assurance */}
          <div className="service-card bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-purple-600">Quality Assurance</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-cyan-500 mr-2">•</span>
                Quality Monitoring
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-2">•</span>
                Performance Reports
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

