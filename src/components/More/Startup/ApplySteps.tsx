export function ApplySteps() {
  const steps = [
    {
      id: 1,
      title: "Fill the Form",
      desc: "Tell us about your startup, your product, and how you plan to use WhatsApp to grow.",
    },
    {
      id: 2,
      title: "Review in 24 Hours",
      desc: "Our team reviews every application. You'll hear back by email within one business day.",
    },
    {
      id: 3,
      title: "Onboarding Call",
      desc: "A 30-minute call to connect your WhatsApp number, set up your first template, and plan your strategy.",
    },
    {
      id: 4,
      title: "Start Growing",
      desc: "Full platform access activated. Your 180-day program clock starts the day you send your first campaign.",
    },
  ];

  return (
    <div className="bg-[#F7FAF9] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Badge */}
        <div className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
          APPLICATION PROCESS
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          How to <span className="text-green-600">Apply</span>
        </h2>

        {/* Steps */}
        <div className="grid md:grid-cols-4 mt-12 bg-white border border-[#E6F0EC] rounded-2xl overflow-hidden">

          {steps.map((step, i) => (
            <div
              key={i}
              className="p-6 text-center border-r last:border-none border-[#E6F0EC]"
            >
              <div className="w-10 h-10 mx-auto bg-green-600 text-white rounded-full flex items-center justify-center font-semibold">
                {step.id}
              </div>

              <h3 className="font-semibold text-gray-900 mt-4">
                {step.title}
              </h3>

              <p className="text-gray-600 text-sm mt-2">
                {step.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}