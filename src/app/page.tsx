"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardSixteen from '@/components/sections/feature/FeatureCardSixteen';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import { Clock, Droplets, Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="medium"
        sizing="mediumLargeSizeLargeTitles"
        background="floatingGradient"
        cardStyle="inset"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Services",
          id: "services",
        },
        {
          name: "Pricing",
          id: "pricing",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Kimo's Tropical Car Wash"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitTestimonial
      background={{
        variant: "gradient-bars",
      }}
      title="Tropical Clean for Your Ride"
      description="Experience the ultimate refreshing wash. Kimo's Car Wash brings a tropical shine to your car with expert care and premium products."
      testimonials={[
        {
          name: "Alex R.",
          handle: "@alex_wash",
          testimonial: "Best car wash in town! My car feels brand new.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/man-driving-car-positive-emotions-bright-daylight-interior_169016-68621.jpg",
        },
        {
          name: "Sarah K.",
          handle: "@sarah_k",
          testimonial: "Super refreshing service, friendly staff.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiley-woman-cleaning-her-car-outside_23-2148958789.jpg",
        },
        {
          name: "Mike J.",
          handle: "@mike_j",
          testimonial: "Quick, professional, and thorough. I'm coming back.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-man-driving-car_23-2150320975.jpg",
        },
        {
          name: "Chris D.",
          handle: "@chris_d",
          testimonial: "The attention to detail here is unmatched. Highly recommend!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-smiley-man-inside-car_23-2149201412.jpg",
        },
        {
          name: "Patty W.",
          handle: "@patty_w",
          testimonial: "Always friendly and my car is spotless every time.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-male-with-black-hair-beard-tattoes-his-hand-dressed-white-shirt-blue-jeans-shorts-driving-car_613910-7581.jpg",
        },
      ]}
      buttons={[
        {
          text: "Book Now",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/aquamarine-stiff-paint-with-foam-gold-crumbs_23-2147934165.jpg"
      mediaAnimation="blur-reveal"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/driver-dressed-elegant-costume_23-2149184243.jpg",
          alt: "happy customer",
        },
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-smiley-man-with-hat_23-2148546106.jpg",
          alt: "happy customer",
        },
        {
          src: "http://img.b2bpic.net/free-photo/mechanic-with-protective-face-mask-standing-auto-repair-shop-looking-camera_637285-11579.jpg",
          alt: "happy customer",
        },
        {
          src: "http://img.b2bpic.net/free-photo/man-showing-thumbs-up-front-car-car-showroom_1303-15202.jpg",
          alt: "happy customer",
        },
        {
          src: "http://img.b2bpic.net/free-photo/view-woman-with-car-gas-station_23-2150516410.jpg",
          alt: "happy customer",
        },
      ]}
      marqueeItems={[
        {
          type: "text",
          text: "Premium Shine",
        },
        {
          type: "text",
          text: "Eco-Friendly",
        },
        {
          type: "text",
          text: "Fast Service",
        },
        {
          type: "text",
          text: "Island Vibes",
        },
        {
          type: "text",
          text: "Detailed Care",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={true}
      title="Why Kimo's?"
      metrics={[
        {
          icon: Droplets,
          label: "Vehicles Washed",
          value: "50,000+",
        },
        {
          icon: Sparkles,
          label: "Shine Guarantee",
          value: "100%",
        },
        {
          icon: Clock,
          label: "Minutes Per Wash",
          value: "15",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardSixteen
      animationType="scale-rotate"
      textboxLayout="default"
      useInvertedBackground={false}
      negativeCard={{
        items: [
          "No harsh chemicals",
          "No water spotting",
          "No hidden fees",
        ],
      }}
      positiveCard={{
        items: [
          "Eco-friendly soaps",
          "Hand-dry finish",
          "Wheel polish included",
        ],
      }}
      title="The Tropical Difference"
      description="We don't just wash; we revitalize your vehicle with premium care."
    />
  </div>

  <div id="services" data-section="services">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      products={[
        {
          id: "1",
          name: "Basic Rinse",
          price: "$15",
          variant: "Exterior only",
          imageSrc: "http://img.b2bpic.net/free-photo/medical-bottle_187299-45800.jpg",
        },
        {
          id: "2",
          name: "Tropical Wash",
          price: "$25",
          variant: "Wash & Wax",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-cleaning-her-car-close-up_23-2148266205.jpg",
        },
        {
          id: "3",
          name: "Island Shine",
          price: "$45",
          variant: "Full Detail",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-blowing-bubbles-car_23-2147829747.jpg",
        },
        {
          id: "4",
          name: "The Works",
          price: "$65",
          variant: "Premium Detail",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-person-cleaning-car-exterior_23-2148194115.jpg",
        },
        {
          id: "5",
          name: "Interior Refresh",
          price: "$30",
          variant: "Deep Clean",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-person-cleaning-car-interior_23-2148194066.jpg",
        },
        {
          id: "6",
          name: "Wheel Spa",
          price: "$20",
          variant: "Wheel treatment",
          imageSrc: "http://img.b2bpic.net/free-photo/man-removing-car-wheel-nuts_23-2148254117.jpg",
        },
      ]}
      title="Our Signature Services"
      description="Choose the perfect package for your ride."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardOne
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "monthly-basic",
          badge: "Savings",
          price: "$39/mo",
          subtitle: "Basic exterior washes",
          features: [
            "4 washes/mo",
            "Exterior dry",
          ],
        },
        {
          id: "monthly-tropical",
          badge: "Popular",
          price: "$59/mo",
          subtitle: "Tropical shine package",
          features: [
            "Unlimited washes",
            "Wax included",
            "Priority line",
          ],
        },
        {
          id: "monthly-island",
          badge: "Premium",
          price: "$89/mo",
          subtitle: "Full island treatment",
          features: [
            "Unlimited washes",
            "Interior detailing",
            "Wheel spa monthly",
          ],
        },
      ]}
      title="Flexible Membership Plans"
      description="Keep your ride shining all month long."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          name: "Sarah J.",
          handle: "@sarah_j",
          testimonial: "Absolutely amazing experience, my car has never looked this good!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-car-washing-service_23-2149212216.jpg",
        },
        {
          id: "2",
          name: "Mark D.",
          handle: "@mark_d",
          testimonial: "Very professional and friendly staff. Highly recommended.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-man-delivering-christmas-tree-car_1303-19511.jpg",
        },
        {
          id: "3",
          name: "Emily P.",
          handle: "@emily_p",
          testimonial: "Kimo's is the only car wash I trust with my vehicle.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/headlight-lamp-car_74190-4377.jpg",
        },
        {
          id: "4",
          name: "Tom R.",
          handle: "@tom_r",
          testimonial: "Efficient and high-quality results every single time.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-car-care-process_23-2149193161.jpg",
        },
        {
          id: "5",
          name: "Lisa G.",
          handle: "@lisa_g",
          testimonial: "The monthly membership is a total game changer for me.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/male-car-washer-cleaning-auto-supervision-owner_651396-3547.jpg",
        },
      ]}
      showRating={true}
      title="Customer Stories"
      description="See why our customers love Kimo's."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",
          title: "How long does a wash take?",
          content: "Our basic wash takes about 10-15 minutes.",
        },
        {
          id: "2",
          title: "Do you offer membership?",
          content: "Yes, we offer multiple monthly membership plans.",
        },
        {
          id: "3",
          title: "Are you open on weekends?",
          content: "Yes, we are open 7 days a week for your convenience.",
        },
      ]}
      sideTitle="Common Questions"
      sideDescription="Need more info? We've got answers."
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={true}
      title="Schedule Your Wash"
      description="Book your appointment online today."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Email Address",
          required: true,
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/auto-service-salon-doign-car-wrapping_23-2149593838.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Pricing",
              href: "#pricing",
            },
          ],
        },
        {
          items: [
            {
              label: "Services",
              href: "#services",
            },
            {
              label: "FAQ",
              href: "#faq",
            },
          ],
        },
        {
          items: [
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
      ]}
      logoText="Kimo's Tropical Car Wash"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
