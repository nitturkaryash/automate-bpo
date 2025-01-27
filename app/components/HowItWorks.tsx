export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 animate-float-slow">Our Process</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Step 1 */}
          <div className="process-item">
            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
                1
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2 text-purple-600">Analyze Your Needs</h4>
                <p className="text-gray-600">
                  We begin with understanding your business goals and requirements to create a tailored solution.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="process-item">
            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
                2
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2 text-purple-600">Build Your Team</h4>
                <p className="text-gray-600">
                  We recruit and train your dedicated sales team with the right skills and tools.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="process-item">
            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
                3
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2 text-purple-600">Launch & Optimize</h4>
                <p className="text-gray-600">
                  We implement technology, set up processes, and continuously improve performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

