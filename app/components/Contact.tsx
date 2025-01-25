export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 animate-float-slow">Get in Touch</h2>
        <div className="max-w-lg mx-auto">
          <p className="text-center mb-8 animate-pulse-gentle">
            Ready to build and automate your dream sales team? Contact us today for a free consultation!
          </p>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <form className="space-y-4">
              <div className="mb-4 group">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="contact-input w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-400 transition-colors"
                  required
                />
              </div>
              <div className="mb-4 group">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="contact-input w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-400 transition-colors"
                  required
                />
              </div>
              <div className="mb-4 group">
                <label htmlFor="company" className="block text-gray-700 font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="contact-input w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-400 transition-colors"
                  required
                />
              </div>
              <div className="mb-4 group">
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                  How can we help?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="contact-input w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-400 transition-colors"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transform hover:scale-[1.02] transition-all duration-300 animate-pulse-gentle"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="mt-8 text-center space-y-2 animate-float-slow">
            <p className="font-semibold hover:text-blue-600 transition-colors duration-300">
              <span className="block text-lg mb-1">The-Connections ITES Business Services Private Limited</span>
              Vega Center, Swargate, Pune - 411037
            </p>
            <p className="font-semibold hover:text-blue-600 transition-colors duration-300">
              Email: info@the-connections.com
            </p>
            <p className="font-semibold hover:text-blue-600 transition-colors duration-300">
              Phone: (+91) 788 789 8196
            </p>
          </div>
          <p className="text-center mt-8 text-xl font-semibold animate-float">Let's Build Your Dream Sales Team!</p>
        </div>
      </div>
    </section>
  )
}

