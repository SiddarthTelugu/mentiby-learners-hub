
import { DollarSign } from "lucide-react";
import Navigation from "@/components/Navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const plans = [
  {
    name: "Basic",
    price: "$29",
    period: "monthly",
    features: [
      "Access to all basic courses",
      "Community forum access",
      "Email support",
      "Course completion certificates",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: "$49",
    period: "monthly",
    features: [
      "All Basic features",
      "Access to premium courses",
      "Priority support",
      "Downloadable resources",
      "Group mentoring sessions",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "monthly",
    features: [
      "All Pro features",
      "Custom learning paths",
      "1-on-1 mentoring",
      "Team collaboration tools",
      "API access",
    ],
    popular: false,
  },
];

const Purchase = () => {
  return (
    <div className="min-h-screen bg-background pt-20 pb-16">
      <Navigation />
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
            <DollarSign className="w-8 h-8 text-primary" />
            Choose Your Plan
          </h1>
          <p className="text-text-secondary text-lg">
            Select the perfect learning plan for your journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative ${
                plan.popular ? "border-primary shadow-lg" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary">Most Popular</Badge>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-center">{plan.name}</CardTitle>
                <CardDescription className="text-center">
                  <span className="text-4xl font-bold text-primary">
                    {plan.price}
                  </span>
                  /{plan.period}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full ${
                    plan.popular ? "btn-primary" : "btn-secondary"
                  }`}
                >
                  Get Started
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Purchase;
