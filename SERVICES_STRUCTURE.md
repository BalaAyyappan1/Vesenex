# Services Structure Documentation

## Overview
This project uses a dynamic routing system for service pages with two main categories:
- `managed-protection` - Managed security services
- `cyber-security-projects` - Cybersecurity project services

## File Structure

```
app/
  [category]/
    [service]/
      page.tsx          # Dynamic service page

components/
  Shared/
    Hero.tsx           # Hero video section
    Content.tsx        # Animated text content
    GridLayout.tsx     # Grid of service features
    ImgSeq.tsx         # Image sequence animation
    Why.tsx            # Why Vesenex section
    Faq.tsx            # FAQ accordion

data/
  Services.tsx         # All service data

types/
  service.ts           # TypeScript interfaces

lib/
  services.ts          # Helper functions
```

## URL Structure

Services are accessed via: `/{category}/{service}`

### Examples:
- `/managed-protection/managed-detection-response`
- `/managed-protection/managed-siem`
- `/managed-protection/endpoint-security`
- `/managed-protection/managed-firewall-security`
- `/cyber-security-projects/phishing`

## Adding New Services

### 1. Add to `data/Services.tsx`:

```typescript
export const serviceData: ServiceData = {
  "your-category": {
    "your-service": {
      slug: "your-service",
      title: "Your Service Title",
      bannerVideoWeb: YourVideoImport,
      bannerVideoMobile: YourVideoImport,
      AnimatedText: "Your animated text content...",
      gridTitle: "Your Grid Title",
      grid: [
        {
          name: "Feature Name",
          desc: "Feature description",
          img: YourImageImport,
        },
        // Add 5 items total
      ],
      imgSeq: "/seq/your-folder",
      why: [
        {
          title: "Why Point 1",
          desc: "Description...",
        },
        // Add 5 items total
      ],
      faq: [
        {
          ques: "Question?",
          ans: "Answer...",
        },
        // Add as many as needed
      ],
    },
  },
};
```

### 2. The page will automatically be generated at:
`/{your-category}/{your-service}`

## Component Props

### Hero
- `webVideo`: Desktop video source
- `mobileVideo`: Mobile video source
- `title`: Page title
- `description`: Optional description

### Content
- `text`: Animated text content

### GridLayout
- `title`: Section title
- `items`: Array of 5 grid items with name, desc, img

### ImgSeq
- `folderPath`: Path to image sequence folder
- `totalFrames`: Number of frames (default: 120)

### Why
- `items`: Array of 5 why items with title, desc

### Faq
- `items`: Array of FAQ items with ques, ans

## Helper Functions

```typescript
import { getAllServices, getServicesByCategory, getCategoryNames } from "@/lib/services";

// Get all services across all categories
const allServices = getAllServices();

// Get services for a specific category
const managedProtectionServices = getServicesByCategory("managed-protection");

// Get all category names
const categories = getCategoryNames();
```

## Navigation Example

```tsx
import Link from "next/link";

<Link href="/managed-protection/managed-detection-response">
  Managed Detection & Response
</Link>
```

## Notes

- All pages use the same design with different data
- Pages are statically generated at build time
- TypeScript types ensure data consistency
- Empty FAQ items are automatically filtered out
