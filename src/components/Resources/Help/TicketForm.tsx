export default function TicketForm() {
  return (
    <div className="border border-gray-200 rounded-2xl p-8 bg-gray-50 mt-10 mb-10">

      {/* HEADER */}
      <div className="flex items-start gap-3 mb-6 ">
        <div className="text-pink-500">
          <img src="https://images.emojiterra.com/microsoft/fluent-emoji/15.1/512px/1f3af_color.png" alt="" className="w-10"/>
        </div>

        <div>
          <h2 className="text-xl font-semibold">
            Still Need Help? Submit a Ticket
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Our support team responds within 2 hours during business hours
            (Mon–Sat, 10AM–7PM IST). For urgent issues, reach us on WhatsApp.
          </p>
        </div>
      </div>

      {/* FORM */}
      <div className="space-y-5">

        {/* NAME */}
        <div>
          <label className="text-xs font-semibold text-gray-500 uppercase ">
            Your Name
          </label>
          <input
            type="text"
            placeholder="Ramesh Gupta"
            className="w-full mt-2 bg-white border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#0B6B50]/20"
          />
        </div>

        {/* EMAIL */}
        <div>
          <label className="text-xs font-semibold text-gray-500 uppercase">
            Email Address
          </label>
          <input
            type="email"
            placeholder="ramesh@devrajhospital.com"
            className="w-full mt-2 bg-white border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#0B6B50]/20"
          />
        </div>

        {/* CATEGORY */}
        <div>
          <label className="text-xs font-semibold text-gray-500 uppercase ">
            Category
          </label>
          <select className="w-full mt-2 border bg-white border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#0B6B50]/20">
            <option>Select a category</option>
            <option>Billing</option>
            <option>Technical Issue</option>
            <option>Account</option>
          </select>
        </div>

        {/* PRIORITY */}
        <div>
          <label className="text-xs font-semibold text-gray-500 uppercase">
            Priority
          </label>
          <select className="w-full bg-white mt-2 border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#0B6B50]/20">
            <option>Normal - Response within 2 hours</option>
            <option>High - Urgent</option>
          </select>
        </div>

        {/* DESCRIPTION */}
        <div>
          <label className="text-xs font-semibold text-gray-500 uppercase">
            Describe Your Issue
          </label>
          <textarea
            rows={4}
            placeholder="Please describe the issue in detail. Include any error messages you're seeing, steps you've already tried, and your workspace name..."
            className="w-full bg-white mt-2 border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#0B6B50]/20 resize-none"
          />
        </div>

        {/* BUTTON */}
        <button className="w-full bg-[#0B6B50] text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition">
          Submit Support Ticket
        </button>

      </div>
    </div>
  );
}