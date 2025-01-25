export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 mb-4">
              "Since partnering with AutomateBPO, our customer response time has improved dramatically, and our sales
              process is more streamlined than ever."
            </p>
            <p className="font-semibold">- CEO, TechStartup Inc.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 mb-4">
              "The automation of our help desk has allowed our team to focus on strategic tasks, significantly boosting
              our operational efficiency."
            </p>
            <p className="font-semibold">- Founder, E-commerce Startup</p>
          </div>
        </div>
      </div>
    </section>
  )
}

