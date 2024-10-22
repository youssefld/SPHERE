import { AddOn } from "pricing4ts";
import {BilledType, RenderingStyles} from "../../types";
import { DEFAULT_RENDERING_STYLES } from "../..";
import { formatPricingComponentName } from "../../services/pricing.service";

export default function AddOnElement({
    addOn,
    currency,
    style,
  }: Readonly<{
    addOn: AddOn;
    currency: string;
    selectedBilledType: BilledType;
    style: RenderingStyles;
  }>): JSX.Element {
    return (
      <div className="add-on-element-container">
        <span className="add-on-title" style={{color: style.addonTextColor ?? DEFAULT_RENDERING_STYLES.addonTextColor}}>{formatPricingComponentName(addOn.name)}</span>
        <p className="plan-price-container" style={{backgroundColor: style.addonBackgroundColor ?? DEFAULT_RENDERING_STYLES.addonBackgroundColor}}>
          <span
            className="plan-price"
            style={{ color: style.priceColor ?? DEFAULT_RENDERING_STYLES.priceColor }}
          >
            {addOn.price}
            {currency}
          </span>
          <span
            className="plan-period"
            style={{ color: style.periodColor ?? DEFAULT_RENDERING_STYLES.periodColor }}
          >
            /{addOn.unit}
          </span>
        </p>
      </div>
    );
  }