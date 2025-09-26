import React from "react";
import { handleFoodName } from "../../Pages/Food/Tabs/FoodItems";
import './FoodImage.less';

type FoodImageProps = {
  type?: 'small' | 'big';
  name: string;
};

export default function FoodImage({ type = 'small', name }: FoodImageProps) {
  return (
    <div className={`item-banner ${type}`}>
      <div className={`item-image ${type} ${handleFoodName(name)}`} />
    </div>
  );
}