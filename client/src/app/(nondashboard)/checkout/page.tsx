"use client";

import Loading from "@/components/Loading";
import WizardStepper from "@/components/WizardAtepper";
import { useCheckoutNavigation } from "@/hooks/useCheckoutNavigation";
import { useUser } from "@clerk/nextjs";
import React from "react";
import CheckoutDetailsPage from "./details";
import CompletionPage from "./completion";
import PaymentPage from "./payment";

const CheckoutWizard = () => {
  const { isLoaded } = useUser();
  const { checkoutStep } = useCheckoutNavigation();

  if (!isLoaded) return <Loading />;

  const renderStep = () => {
    switch (checkoutStep) {
      case 1:
        return <CheckoutDetailsPage />;
      case 2:
        return <PaymentPage />;
      case 3:
        return <CompletionPage />;
      default:
        return <CheckoutDetailsPage />;
    }
  };
  return (
    <div className="checkout">
      <WizardStepper currentStep={checkoutStep} />
      <div className="checkout__content">{renderStep()}</div>
    </div>
  );
};

export default CheckoutWizard;