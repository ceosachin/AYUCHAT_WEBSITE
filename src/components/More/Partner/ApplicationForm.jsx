export default function ApplicationForm() {
  return (
    <section className="py-24 px-6 bg-[#f7f7f7]">
      <div className="max-w-5xl mx-auto text-center">

        {/* Badge */}
        <span className="bg-[#E6F4EF] border border-[#0B6B50]/20 text-[#0B6B50] px-4 py-1 rounded-full text-xs font-medium">
          APPLY NOW
        </span>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mt-4">
          Join the{" "}
          <span className="text-green-800 font-['Bricolage_Grotesque']">Partner Program</span>
        </h2>

        <p className="text-gray-500 mt-4">
          Free to join. Approved in 24 hours. Start earning next month.
        </p>

        {/* Form Card */}
        <div className="mt-12 bg-white rounded-3xl shadow-xl p-8 md:p-10 text-left">

          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="text-2xl">💰</div>
            <div>
              <h3 className="text-2xl font-bold font-['Bricolage_Grotesque']">Partner Application</h3>
              <p className="text-gray-500 text-sm">
                Takes 2 minutes. No upfront cost.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="grid md:grid-cols-2 gap-6">

            <Input label="Your Name *" placeholder="Priya Sharma" />
            <Input label="Email *" placeholder="priya@agency.in" />

            <Input label="Phone Number *" placeholder="+91 98765 43210" />
            <Input label="City" placeholder="Indore, Mumbai..." />

          </div>

          {/* Full Width Fields */}
          <div className="mt-6 space-y-6">

            <Select label="Partner Type *" />
            <Input label="Website / LinkedIn" placeholder="https://yourwebsite.com" />
            <Select label="Monthly Referrals" />
            <Textarea label="How will you promote AyuChat?" />

          </div>

          {/* Button */}
          <button className="mt-8 w-full bg-green-900 hover:bg-green-800 text-white py-4 rounded-xl font-semibold text-lg transition shadow-md">
            Submit Partner Application →
          </button>

          {/* Footer */}
          <p className="text-center text-gray-500 text-sm mt-4">
            Free to join · No hidden fees · Monthly payouts
          </p>

        </div>
      </div>
    </section>
  );
}

function Input({ label, placeholder }) {
  return (
    <div>
      <label className="text-sm font-medium text-gray-600">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="mt-2 w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
      />
    </div>
  );
}

function Select({ label }) {
  return (
    <div>
      <label className="text-sm font-medium text-gray-600">
        {label}
      </label>
      <select className="mt-2 w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400">
        <option>Select option</option>
      </select>
    </div>
  );
}

function Textarea({ label }) {
  return (
    <div>
      <label className="text-sm font-medium text-gray-600">
        {label}
      </label>
      <textarea
        rows="4"
        className="mt-2 w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
      />
    </div>
  );
}