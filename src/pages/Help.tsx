
import { HelpCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const faqs = [
  {
    question: "How do I access my courses?",
    answer:
      "Once you purchase a course, you can access it immediately from the 'My Courses' section. Click on the course card to start learning.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and bank transfers. For enterprise plans, we also offer invoice-based payments.",
  },
  {
    question: "Can I download course materials?",
    answer:
      "Yes, all course materials including videos, PDFs, and code examples are downloadable for offline access with Pro and Enterprise plans.",
  },
  {
    question: "How do I get help if I'm stuck?",
    answer:
      "You can reach out through our community forum, email support, or schedule a mentoring session depending on your subscription plan.",
  },
];

const Help = () => {
  return (
    <div className="min-h-screen bg-background pt-20 pb-16">
      <Navigation />
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
            <HelpCircle className="w-8 h-8 text-primary" />
            Help Center
          </h1>
          <p className="text-text-secondary text-lg">
            Find answers to commonly asked questions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Need Immediate Help?</CardTitle>
              <CardDescription>Contact our support team</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <button className="btn-primary w-full">Contact Support</button>
                <button className="btn-secondary w-full">
                  Schedule a Call
                </button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Links</CardTitle>
              <CardDescription>Common support resources</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <a href="#" className="block hover:text-primary">
                  📚 Documentation
                </a>
                <a href="#" className="block hover:text-primary">
                  📝 Tutorial Guides
                </a>
                <a href="#" className="block hover:text-primary">
                  🎥 Video Tutorials
                </a>
                <a href="#" className="block hover:text-primary">
                  💬 Community Forum
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
            <CardDescription>
              Quick answers to common questions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                  <p className="text-text-secondary">{faq.answer}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Help;
