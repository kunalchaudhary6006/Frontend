import { Truck, ShieldCheck, RefreshCcw, Headset } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'On all orders over $99',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Payment',
    description: '100% secure payment',
  },
  {
    icon: RefreshCcw,
    title: '100% Money Back',
    description: '30 days return policy',
  },
  {
    icon: Headset,
    title: 'Online Support',
    description: '24/7 dedicated support',
  },
];

export default function FeatureBar() {
  return (
    <div className="bg-paper h-[60px] flex items-center border-b border-border">
      <div className="max-w-7xl mx-auto w-full px-10">
        <div className="flex justify-between items-center overflow-x-auto min-w-max gap-8 px-4 sm:px-0">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2.5 whitespace-nowrap">
              <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
              <div className="text-[11px] font-semibold uppercase text-muted">
                {feature.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
