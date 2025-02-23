
import { useState } from 'react';
import { Menu, X, User, Award, BookOpen, Download, DollarSign, HelpCircle, Settings, LogOut } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Community", href: "/community" },
    { label: "Leaderboard", href: "/leaderboard", icon: Award },
    { label: "My Courses", href: "/courses", icon: BookOpen },
    { label: "Ebooks", href: "/ebooks" },
    { label: "My Downloadable Projects", href: "/projects", icon: Download },
    { label: "Affiliate Dashboard", href: "/affiliate", icon: DollarSign },
    { label: "Purchase", href: "/purchase" },
    { label: "Help", href: "/help", icon: HelpCircle },
  ];

  const userMenuItems = [
    { label: "Account Settings", href: "/settings", icon: Settings },
    { label: "Logout", href: "/logout", icon: LogOut },
  ];

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-primary">
              MentiBy
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center nav-link">
                <User className="w-5 h-5 mr-1" />
                <span>Account</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {userMenuItems.map((item) => (
                  <DropdownMenuItem key={item.label} className="cursor-pointer">
                    <a 
                      href={item.href}
                      className="flex items-center w-full px-2 py-1.5 text-sm"
                    >
                      <item.icon className="w-4 h-4 mr-2" />
                      {item.label}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden rounded-lg p-2 hover:bg-gray-100"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-2 text-text-primary hover:bg-primary-light rounded-lg"
              >
                {item.label}
              </a>
            ))}
            {userMenuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-2 text-text-primary hover:bg-primary-light rounded-lg"
              >
                <div className="flex items-center">
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.label}
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
