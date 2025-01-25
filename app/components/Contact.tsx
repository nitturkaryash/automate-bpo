export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
        <div className="max-w-lg mx-auto">
          <p className="text-center mb-8">
            Ready to build and automate your dream sales team? Contact us today for a free consultation!
          </p>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="contact-input w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="contact-input w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="company" className="block text-gray-700 font-semibold mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="contact-input w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                  How can we help?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="contact-input w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transform hover:scale-[1.02] transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="mt-8 text-center">
            <p className="font-semibold hover:text-blue-600 transition-colors duration-300">Email: contact@automatebpo.com</p>
            <p className="font-semibold hover:text-blue-600 transition-colors duration-300">Phone: +1 (555) 123-4567</p>
            <p className="font-semibold hover:text-blue-600 transition-colors duration-300">Based in San Francisco, CA</p>
          </div>
          <p className="text-center mt-8 text-xl font-semibold">Let's Build Your Dream Sales Team!</p>
        </div>
      </div>
    </section>
  )
}

