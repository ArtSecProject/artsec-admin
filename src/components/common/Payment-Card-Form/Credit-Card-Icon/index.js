import React from "react";
import { icons } from "../../../../constant/icon";

export const CreditCardIcon = ({ brand, width }) => {
  switch (brand) {
    case "visa":
      return <icons.VisaCard width={`${width}px`} />;
    case "mastercard":
      return <icons.MasterCard width={`${width}px`} />;
    case "ArtSec":
    default:
      return <icons.Generic width={`${width}px`} />;
  }
}
