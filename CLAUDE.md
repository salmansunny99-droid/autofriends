# AutoFriends — Claude Code Configuration

## Project Overview
React Native car rental platform. Car owners can list/manage cars; renters can browse, book, and track rentals. Firebase backend.

## Tech Stack
- React Native 0.84 + TypeScript
- Firebase Auth (Google Sign-In), Firestore, Storage
- React Navigation (Stack + Bottom Tabs)
- `@react-native-firebase/*` packages

## Project Structure
```
src/
  screens/       # All screen components
  context/       # AppContext.tsx — global state + Firebase ops
  navigation/    # Navigator setup
  types.ts       # Shared TypeScript types (UserProfile, Car, Booking, FeedPost)
  theme.ts       # Colors, spacing, typography
functions/       # Firebase Cloud Functions (email notifications)
android/         # Android native project
ios/             # iOS native project
```

## Key Commands
```bash
# Start Metro
npm start

# Run on Android (use correct JAVA_HOME)
$env:JAVA_HOME = "C:\Program Files\Android\Android Studio\jbr"
cd android && ./gradlew clean && cd .. && npx react-native run-android

# Run on iOS
bundle exec pod install
npm run ios

# Tests
npm test

# Lint
npm run lint
```

## Data Models (src/types.ts)
- **UserProfile**: id, name, email, phone, city, avatarUrl, bannerUrl, followers[], following[]
- **Car**: id, ownerId, brandName, name, modelYear, color, category (SUV/Sedan/Mini Car), pricePerDay, available, images[], specifications, city
- **Booking**: id, carId, ownerId, renterId, startDate, endDate, startTime, endTime, renter* fields, totalPrice, advanceAmount, remainingAmount, advancePaid, status, createdAt
- **FeedPost**: id, authorId, text, images, city, likes[], createdAt

## Navigation Structure
```
Stack
├── Splash → Auth → MainTabs
│   MainTabs: Feed | Explore (CarsScreen) | Show Room | Profile
├── CarDetails → BookingForm → BookingSummary
├── AddCar (edit mode via ?carId param)
├── Dashboard
└── BookingHistory
```

## AppContext (src/context/AppContext.tsx)
Global state + Firebase operations: `setUser`, `addCar`, `updateCar`, `updateCarAvailability`, `addFeedPost`, `toggleFollow`, `toggleLike`, `uploadMedia`, `updateUserProfile`, `createBooking`

## Coding Conventions
- TypeScript throughout — no `any` unless unavoidable
- Functional components with hooks
- Firebase calls inside AppContext, not directly in screens
- Styles defined at bottom of each file via `StyleSheet.create`
- Theme values from `src/theme.ts`

## Pending Work
- Deploy Cloud Functions (needs Firebase Blaze plan + Gmail App Password — see `functions/DEPLOYMENT.md`)
- Real payment integration (JazzCash / EasyPaisa / Stripe)
- Push notifications, ratings/reviews, chat, admin panel
