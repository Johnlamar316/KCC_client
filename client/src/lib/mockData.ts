type PlanDetails = {
  [key: string]: {
    discount: string;
    features: string[];
  };
};

export const subscriptionData = [
  {
    userId: "user_9xWp45MnKjL8vRt2Hs6BqDcEy",
    subscriptionId: "sub_4t5r6e7y8u9i0p1q2w3",
    startDate: "2024-02-01T00:00:00Z",
    endDate: "2025-01-31T23:59:59Z",
    status: "canceled",
    plan: "basic",
    amount: 10,
  },
  {
    userId: "user_6tHm89QwNpKj3Fx5Vy2RdLcBs",
    subscriptionId: "sub_9i8u7y6t5r4e3w2q1p0",
    startDate: "2024-03-15T00:00:00Z",
    endDate: "2025-03-14T23:59:59Z",
    status: "canceled",
    plan: "standard",
    amount: 20,
  },
  {
    userId: "user_2ntu96pUCljUV2T9W0AThzjacQB",
    subscriptionId: "sub_1q2w3e4r5t6y7u8i9o0p",
    startDate: "2024-01-01T00:00:00Z",
    endDate: "2024-12-31T23:59:59Z",
    status: "active",
    plan: "premium",
    amount: 30,
  },
];

export const planDetails: PlanDetails = {
  basic: {
    discount: "10%",
    features: [
      "Access to basic courses",
      "1 course per month",
      "Email support",
      "Basic support",
      "Exclusive content",
    ],
  },
  standard: {
    discount: "20%",
    features: [
      "Access to all courses",
      "10 courses per month",
      "20% off on all purchases",
      "Standard support",
      "Exclusive content",
    ],
  },
  premium: {
    discount: "50%",
    features: [
      "Access to all courses",
      "Unlimited courses per month",
      "50% off on all purchases",
      "Priority support",
      "Access to exclusive webinars",
    ],
  },
};
