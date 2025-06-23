import React, { useState } from "react";
import { CheckCircle, FileBarChart2, ShieldCheck, Users } from "lucide-react";

const Pricing = () => {
  const [activePlan, setActivePlan] = useState("Pro");
  const [billingCycle, setBillingCycle] = useState("Monthly");

  const toggleBilling = () => {
    setBillingCycle((prev) => (prev === "Monthly" ? "Yearly" : "Monthly"));
  };

  const prices = {
    Free: { Monthly: "$0", Yearly: "$0" },
    Pro: { Monthly: "$29", Yearly: "$290" },
    Enterprise: { Monthly: "Custom", Yearly: "Custom" },
  };

  const planClass = (plan) =>
    `flex flex-col rounded-xl shadow-md transition-all duration-300 transform cursor-pointer p-6 sm:p-8 ${
      activePlan === plan
        ? "bg-indigo-600 text-white scale-100"
        : "bg-white hover:bg-blue-50 hover:scale-100"
    }`;

  const textClass = (plan) =>
    activePlan === plan ? "text-white" : "text-gray-700";

  const featuresClass = (plan) =>
    `space-y-4 text-sm ${activePlan === plan ? "text-white" : "text-gray-700"}`;

  return (
<div className="
 min-h-screen w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="mx-auto max-w-2xl lg:max-w-5xl">
          {/* Header */}
          <div className="rounded-lg bg-gray-900 px-6 py-8 shadow-2xl shadow-violet-600/10 sm:p-10">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Flexible Plans for Every Team
              </h2>
              <p className="mt-4 text-lg text-gray-300">
                Whether you're analyzing small datasets or managing enterprise-scale reports,
                we have a plan that fits your needs.
              </p>
            </div>

            {/* Billing Toggle */}
            <div className="mt-6 flex justify-center sm:justify-start">
              <div className="inline-flex rounded-full shadow-sm border border-gray-300 overflow-hidden">
                <button
                  onClick={() => setBillingCycle("Monthly")}
                  className={`px-6 py-3 text-sm font-medium transition ${
                    billingCycle === "Monthly"
                      ? "bg-gradient-to-r from-violet-500 to-indigo-600 text-white"
                      : "bg-white text-gray-700"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle("Yearly")}
                  className={`px-6 py-3 text-sm font-medium transition ${
                    billingCycle === "Yearly"
                      ? "bg-gradient-to-r from-violet-500 to-indigo-600 text-white"
                      : "bg-white text-gray-700"
                  }`}
                >
                  Yearly
                </button>
              </div>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="mt-10">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {["Free", "Pro", "Enterprise"].map((plan) => (
                <div
                  key={plan}
                  className={planClass(plan)}
                  onClick={() => setActivePlan(plan)}
                >
                  <div>
                    <span className="inline-flex rounded-full bg-violet-100 px-3 py-1 text-sm font-semibold text-violet-600">
                      {plan}
                    </span>
                    <div className="mt-4 flex items-baseline text-3xl sm:text-4xl font-extrabold">
                      {prices[plan][billingCycle]}{" "}
                      {plan !== "Enterprise" && (
                        <span className="ml-1 text-base sm:text-xl font-medium text-gray-500">
                          /{billingCycle === "Monthly" ? "mo" : "yr"}
                        </span>
                      )}
                    </div>
                    <p className={`mt-4 text-sm sm:text-base ${textClass(plan)}`}>
                      {plan === "Free" &&
                        "Ideal for individuals or small teams getting started."}
                      {plan === "Pro" &&
                        "Best for growing teams needing advanced analytics."}
                      {plan === "Enterprise" &&
                        "Designed for large-scale teams & advanced workflows."}
                    </p>
                  </div>

                  <div className="mt-6">
                    <ul className={featuresClass(plan)}>
                      {plan === "Free" && (
                        <>
                          <li><CheckCircle className="inline mr-2" size={18}/>3 Excel uploads/month</li>
                          <li><FileBarChart2 className="inline mr-2" size={18}/>Basic 2D charts</li>
                          <li><ShieldCheck className="inline mr-2" size={18}/>1 dashboard</li>
                          <li><Users className="inline mr-2" size={18}/>Community support</li>
                        </>
                      )}
                      {plan === "Pro" && (
                        <>
                          <li><CheckCircle className="inline mr-2" size={18}/>Unlimited uploads</li>
                          <li><FileBarChart2 className="inline mr-2" size={18}/>2D & 3D charts</li>
                          <li><ShieldCheck className="inline mr-2" size={18}/>Custom dashboards</li>
                          <li><Users className="inline mr-2" size={18}/> Email support</li>
                          <li><CheckCircle className="inline mr-2" size={18}/>Export charts</li>
                        </>
                      )}
                      {plan === "Enterprise" && (
                        <>
                          <li><CheckCircle className="inline mr-2" size={18}/>All Pro features</li>
                          <li><Users className="inline mr-2" size={18}/>Team collaboration</li>
                          <li><ShieldCheck className="inline mr-2" size={18}/>Admin panel</li>
                          <li><FileBarChart2 className="inline mr-2" size={18}/>Scheduled reports</li>
                          <li><CheckCircle className="inline mr-2" size={18}/>AI assistant</li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-10 sm:mt-12">
            <p className="text-base sm:text-lg text-gray-600">
              Still not sure which plan fits you best?
            </p>
            <p className="text-indigo-700 font-semibold mt-2">
              👉 Start with the Free Plan and upgrade anytime as your needs grow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
