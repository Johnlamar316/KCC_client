import { planDetails } from "@/lib/mockData";
import React from "react";

interface SubscriptionCardProps {
  plan: string;
  amount: number;
  status: string;
}

const SubscriptionCard = ({ plan, amount, status }: SubscriptionCardProps) => {
  const subscriptionPlan = plan.charAt(0).toUpperCase() + plan.slice(1);
  const planInfo = planDetails[plan] || planDetails.basic;
  const statusClass =
    status === "active"
      ? "bg-green-500"
      : status === "canceled"
      ? "bg-red-500"
      : "bg-yellow-500";

  return (
    <div className="flex flex-col p-6 rounded-lg bg-customgreys-secondarybg">
      <h3 className="text-lg font-semibold mb-2">{subscriptionPlan} Plan</h3>
      <p className="text-gray-500 mb-4">
        {status.charAt(0).toUpperCase() + status.slice(1)} subscription
      </p>
      <p className="font-bold text-2xl mb-4">£{amount}</p>
      <div className="mb-4">
        <p className="text-sm text-gray-500">Plan Benefits:</p>
        <ul className="list-disc pl-5">
          {planInfo.features.map((feature: string, index: number) => (
            <li key={index} className="text-sm text-gray-400">
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Discount */}
      <div className="text-sm text-gray-500 mb-4">
        <span className="font-semibold">Discount: </span>
        <span className="text-primary-500">
          {planInfo.discount} off on all purchases
        </span>
      </div>

      <div
        className={`text-white px-4 py-2 rounded-md bg-primary-700 hover:bg-primary-600 cursor-pointer`}>
        Subscribe
      </div>
    </div>
  );
};

export default SubscriptionCard;
