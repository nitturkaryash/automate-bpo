export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">Who We Are</h3>
          <p className="text-gray-700 mb-6">
            At AutomateBPO, we understand the unique challenges startups face. With years of experience in the BPO
            industry, our mission is to provide startups with cutting-edge automation solutions to manage sales, help
            desk, and customer relationships effectively. Our team comprises industry experts who blend technology with
            human insight to deliver personalized services.
          </p>
          <h3 className="text-2xl font-semibold mb-4">Why Choose Us?</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <span className="font-semibold">Efficiency:</span> Automate repetitive tasks to increase productivity.
            </li>
            <li>
              <span className="font-semibold">Scalability:</span> Grow your business without worrying about scaling your
              support team.
            </li>
            <li>
              <span className="font-semibold">Cost-Effective:</span> Reduce operational costs while enhancing service
              quality.
            </li>
            <li>
              <span className="font-semibold">Expertise:</span> Leverage our deep understanding of BPO to transform your
              customer interactions.
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

