# AutoFriends — Car Rental Platform Snapshot
**Last Updated:** March 9, 2026

## Project Overview
React Native car rental platform built with Firebase (Auth, Firestore, Storage). Supports car owners (Show Room, Add/Edit Car, Dashboard) and renters (Explore, Book, History).

## Tech Stack
- React Native 0.76+ with TypeScript
- Firebase Auth (Google Sign-In)
- Cloud Firestore (users, cars, bookings, feed)
- Firebase Storage (images, ID cards, selfies)
- Firebase Cloud Functions (email notifications — pending Blaze plan)
- react-native-date-picker, react-native-image-picker

## Build & Run
```bash
# Correct JAVA_HOME for this system
$env:JAVA_HOME = "C:\Program Files\Android\Android Studio\jbr"
cd android; ./gradlew clean; cd ..; npx react-native run-android
```

> [!NOTE]
> **Recent Fix (March 9):** Resolved bundle syntax errors and cache issues that were blocking the Android build.


## All Screens

| Screen | File | Purpose |
|--------|------|---------|
| Splash | `SplashScreen.tsx` | Auto-redirect on auth state |
| Auth | `AuthScreen.tsx` | Google Sign-In |
| Feed | `FeedScreen.tsx` | Social feed tab |
| Explore | `CarsScreen.tsx` | Browse cars with category/brand/city filters + booking-based availability |
| Car Details | `CarDetailsScreen.tsx` | View car + Book Now → BookingForm |
| Show Room | `ShowRoomScreen.tsx` | Owner storefront — banner, avatar, company info, car cards |
| Add/Edit Car | `AddCarScreen.tsx` | Brand, Name, Year, Color, Category dropdown, Price, Specs, Photo |
| Dashboard | `DashboardScreen.tsx` | Owner booking management — Active/Upcoming/Available/History tabs |
| Booking Form | `BookingFormScreen.tsx` | 2-step wizard — dates/times → user details/ID/selfie |
| Booking Summary | `BookingSummaryScreen.tsx` | Review + 25% advance payment confirmation |
| Booking History | `BookingHistoryScreen.tsx` | User's past/current bookings with status badges |
| Profile | `ProfileScreen.tsx` | User profile with banner, stats, settings |

## Navigation Structure
```
Stack Navigator
├── Splash
├── Auth
├── MainTabs (Bottom Tab Navigator)
│   ├── 🏠 Feed
│   ├── 🚗 Explore (CarsScreen)
│   ├── 🏪 Show Room (ShowRoomScreen)
│   └── 👤 Profile (ProfileScreen)
├── CarDetails
├── AddCar (supports ?carId for edit mode)
├── Dashboard
├── BookingForm
├── BookingSummary
└── BookingHistory
```

## Data Models (types.ts)
- **UserProfile**: id, name, email, phone, city, avatarUrl, bannerUrl, followers[], following[]
- **Car**: id, ownerId, brandName, name, modelYear, color, category (SUV/Sedan/Mini Car), pricePerDay, available, images[], specifications, city
- **Booking**: id, carId, ownerId, renterId, startDate, endDate, startTime, endTime, renterName, renterEmail, renterPhone, renterIdNumber, renterIdCardUrl, renterSelfieUrl, totalPrice, advanceAmount, remainingAmount, advancePaid, status, createdAt
- **FeedPost**: id, authorId, text, images, city, likes[], createdAt

## AppContext Functions
setUser, addCar, updateCar, updateCarAvailability, addFeedPost, toggleFollow, toggleLike, uploadMedia, updateUserProfile, createBooking

## Cloud Functions (functions/src/index.ts)
- `onBookingCreated`: Firestore trigger → sends HTML emails to renter (confirmation) and owner (new booking alert)
- **Status**: Code ready, deploy after upgrading to Firebase Blaze plan
- See `functions/DEPLOYMENT.md` for setup instructions

## Completed Phases
1. ✅ Show Room Page + Navigation
2. ✅ Redesigned Add Car Form (with brand, category, edit mode)
3. ✅ Owner Dashboard (4-tab booking management)
4. ✅ Booking Flow (form → summary → confirmation)
5. ✅ Explore Integration (availability, category/brand filters)
6. ✅ Email Notifications (Cloud Functions — pending deployment)

## Pending / Future Work
- Deploy Cloud Functions (needs Blaze plan + Gmail App Password)
- Add real payment integration (JazzCash / EasyPaisa / Stripe)
- Push notifications for booking updates
- Rating & review system
- Chat between owner and renter
- Admin panel
