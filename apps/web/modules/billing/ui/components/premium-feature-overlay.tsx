"use client";

import { Button } from "@workspace/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import {
  type LucideIcon,
  BookOpenIcon,
  BotIcon,
  GemIcon,
  MicIcon,
  PaletteIcon,
  PhoneIcon,
  UsersIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";

interface Feature {
  icon: LucideIcon;
  label: string;
  description: string;
}

interface PremiumFeatureOverlayProps {
  children: React.ReactNode;
}

const features: Feature[] = [
  {
    icon: BotIcon,
    label: "AI Customer Support",
    description: "Inteligent automated responses 24/7.",
  },
  {
    icon: MicIcon,
    label: "AI Voice Assistant",
    description: "Natural voice conversations with customers.",
  },
  {
    icon: PhoneIcon,
    label: "Phone System",
    description: "Inbound & outbound calling capabilities.",
  },
  {
    icon: BookOpenIcon,
    label: "Knowledge Base",
    description: "Access to extensive documentation and resources.",
  },
  {
    icon: UsersIcon,
    label: "Team Collaboration",
    description: "Multi-user access and role management.",
  },
  {
    icon: PaletteIcon,
    label: "Widget Customization",
    description: "Personalize the chat widget to match your brand.",
  },
];

export const PremiumFeatureOverlay = ({
  children,
}: PremiumFeatureOverlayProps) => {
  const router = useRouter();

  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none select-none blur-[2px]">
        {children}
      </div>

      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />

      <div className="absolute inset-0 z-40 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center">
              <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full border bg-muted">
                <GemIcon className="size-6 text-muted-foreground" />
              </div>
            </div>
            <CardTitle className="text-xl">Go Premium</CardTitle>
            <CardDescription>
              Unlock all features and elevate your experience with our Premium
              plan.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-6">
              {features.map((feature) => (
                <div key={feature.label} className="flex items-center gap-3">
                  <div className="flex size-8 items-center justify-center rounded-lg border bg-muted">
                    <feature.icon className="size-4 text-muted-foreground" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-sm">{feature.label}</p>
                    <p className="text-muted-foreground text-xs">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Button
              className="w-full"
              onClick={() => router.push("/billing")}
              size="lg"
            >
              View Plans
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
