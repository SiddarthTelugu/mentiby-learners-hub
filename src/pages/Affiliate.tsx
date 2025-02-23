
import { DollarSign } from "lucide-react";
import Navigation from "@/components/Navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const stats = [
  { label: "Total Earnings", value: "$2,450", change: "+12%" },
  { label: "Active Referrals", value: "45", change: "+5%" },
  { label: "Conversion Rate", value: "8.5%", change: "+2.3%" },
];

const Affiliate = () => {
  return (
    <div className="min-h-screen bg-background pt-20 pb-16">
      <Navigation />
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
            <DollarSign className="w-8 h-8 text-primary" />
            Affiliate Dashboard
          </h1>
          <p className="text-text-secondary text-lg">
            Track your earnings and manage your referrals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat) => (
            <Card key={stat.label}>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-text-muted mb-2">{stat.label}</div>
                  <div className="text-sm text-green-500">{stat.change}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Referral Link</CardTitle>
              <CardDescription>Share this link to earn commissions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <input
                  type="text"
                  value="https://mentiby.com/ref/user123"
                  readOnly
                  className="flex-1 p-2 border rounded bg-secondary/10"
                />
                <button className="btn-primary">Copy</button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Commission Rates</CardTitle>
              <CardDescription>Current affiliate program rates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Course Sales</span>
                  <span className="font-semibold">30%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Ebook Sales</span>
                  <span className="font-semibold">25%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Membership Referrals</span>
                  <span className="font-semibold">20%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Affiliate;
