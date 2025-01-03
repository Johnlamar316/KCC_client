import { planDetails } from "@/lib/mockData";
import React from "react";

interface SubscriptionCardProps {
  plan: string;
  amount: number;
  status: string;
  color: string;
  backgroundColor: string;
}

const SubscriptionCard = ({
  plan,
  amount,
  status,
  color,
  backgroundColor,
}: SubscriptionCardProps) => {
  const subscriptionPlan = plan.charAt(0).toUpperCase() + plan.slice(1);
  const planInfo = planDetails[plan] || planDetails.basic;

  return (
    <div className="flex flex-col p-6 rounded-lg border border-customgreys-secondarybg ">
      <h3 className={`text-lg font-semibold mb-2 ${color}`}>
        {subscriptionPlan} Plan
      </h3>
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
      <div className="text-sm  mb-4 ">
        <span className="font-semibold">Discount: </span>
        <span className={`${color} font-bold`}>
          {planInfo.discount} off on all purchases
        </span>
      </div>

      <div
        className={`text-white-50 px-4 py-2 rounded-md ${backgroundColor} cursor-pointer transition-transform duration-300 transform hover:scale-105`}>
        Subscribe
      </div>
    </div>
  );
};

export default SubscriptionCard;
