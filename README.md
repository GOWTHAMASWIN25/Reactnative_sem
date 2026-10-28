# 💳 Fintech Pro - Mobile App Development (React Native & Expo)

A fintech and personal wealth mobile application engineered with **React Native (Expo SDK 58)**, featuring **Dual-Role Access (Admin & Customer)**, **Three Navigation Systems (Stack, Bottom Tabs, Drawer)**, **Dynamic Financial Flow Reports (Daily/Weekly/Monthly)**, and **Personalized Alert Notifications**.

---

## 📱 Project Specifications & Features Summary

| Requirement | Implementation Details | Status |
| :--- | :--- | :---: |
| **Two Roles: Admin & Customer** | Instant perspective toggle in header and drawer, plus full authentication screen (`AuthScreen.js`). | ✅ Complete |
| **1. Home Screen** | Daily / Weekly / Monthly reports toggle, balance cards, quick actions, recent transactions list, and admin platform stats. | ✅ Complete |
| **2. Analysis Screen** | Category expense breakdown with progress bars, financial health score (84/100), and system analytics. | ✅ Complete |
| **3. Profile & Edit Profile Screen** | Customer-only profile with avatar picker, budget limits, and comprehensive form validation. | ✅ Complete |
| **4. Transaction Screen (Month-wise)** | Month selector pills (Oct, Sep, Aug, Jul, Jun), search, add/edit/delete transactions with **personalized alert messages**. | ✅ Complete |
| **5. Overall Categories Screen (5 Marks)** | Evaluated screen with 8 categories, allocated vs spent progress meters, warning thresholds, and creation modal. | ✅ Complete |
| **6. Category Details Screen** | Dedicated deep-dive screen showing category budget, average spend, largest transaction, and filtered transactions. | ✅ Complete |
| **(i) Stack Navigation** | Stack push/pop for `EditProfileScreen`, `CategoryDetailsScreen`, and `AuthScreen` with smooth transitions. | ✅ Complete |
| **(ii) Tabs Navigation** | Bottom tab bar with glowing active icons, labels, and 5-mark badge indicator on Categories. | ✅ Complete |
| **(iii) Drawer Navigation** | Side drawer with user avatar, role switcher, navigation links, and logout action. | ✅ Complete |
| **Basic Form Validation** | Field validation (email regex, 10-digit phone, numeric positive amount/budget, min lengths) with inline errors. | ✅ Complete |
| **No Backend Required** | In-memory reactive state managed cleanly via `AppContext.js` with mock data. | ✅ Complete |

---

## 🗂️ Architecture & Folder Structure

```
REACT_SEM/
├── assets/                       # App icons, splash screens, and images
├── src/
│   ├── components/
│   │   ├── CustomAlert.js        # Floating personalized notification banner (Requirement ii)
│   │   ├── CustomDrawerContent.js# Navigation Drawer with user profile & role toggle
│   │   ├── DailyWeeklyMonthlyChart.js # Visual reports breakdown (Requirement iii)
│   │   ├── Header.js             # Universal top header with drawer toggle & role badge
│   │   ├── StatCard.js           # Metric cards with trends & gradients
│   │   ├── TransactionItem.js    # Formatted transaction item with edit & delete
│   │   └── CategoryCard.js       # Category budget progress card
│   ├── context/
│   │   └── AppContext.js         # Centralized state (users, transactions, categories, alerts)
│   ├── data/
│   │   └── mockData.js           # Initial realistic transactions, users, and admin metrics
│   ├── navigation/
│   │   ├── AppNavigator.js       # Root composition
│   │   ├── BottomTabNavigator.js # (ii) Tabs Navigation
│   │   ├── DrawerNavigator.js    # (iii) Drawer Navigation
│   │   └── StackNavigator.js     # (i) Stack Navigation
│   └── screens/
│       ├── HomeScreen.js         # Screen 1: Home & Daily/Weekly/Monthly Reports
│       ├── AnalysisScreen.js     # Screen 2: Financial & System Analysis
│       ├── ProfileScreen.js      # Screen 3a: Customer Profile
│       ├── EditProfileScreen.js  # Screen 3b: Profile Form & Validation
│       ├── TransactionScreen.js  # Screen 4: Month-wise transactions & alerts
│       ├── CategoriesScreen.js   # Screen 5: Overall Categories (5 Marks)
│       ├── CategoryDetailsScreen.js # Screen 6: Category details & transactions
│       └── AuthScreen.js         # Sign Up & Sign In with 1-Click evaluation
├── App.js                        # Root entry point
├── index.js                      # Main entry with gesture handler
├── package.json                  # Dependencies & scripts
└── app.json                      # Expo project configuration
```

---

## 🚀 How to Run the App

### 1. Run in Web Browser
```bash
npm run web
# Or: npx expo start --web
```
Open **`http://localhost:8081`** in Chrome, Edge, or Firefox.

### 2. Run on Android / iOS (Expo Go)
```bash
npm start
# Or: npx expo start
```
Scan the QR code displayed in the terminal using the **Expo Go** mobile app on Android or the iOS Camera.

---

## 🔑 Demo Accounts for Fast Evaluation

| Role | Name | Email | Password | Quick Action |
| :--- | :--- | :--- | :--- | :--- |
| **Customer** | Gowtham Aswin | `gowtham.aswin@student.edu` | `secret123` | Tap **"Quick Login as Customer"** on Auth Screen |
| **Admin** | Administrator Gowtham | `admin@financeapp.com` | `adminPass123` | Tap **"Quick Login as Admin"** on Auth Screen |

> **Pro Tip**: You can also instantly switch between **Customer** and **Admin** at any moment by clicking the **Role Badge** (`CUSTOMER` / `ADMIN`) in the top navigation header or inside the **Navigation Drawer**!

---

## 🎨 Screen Highlights & Feature Breakdown

### 1. Home Screen (Admin & Customer)
- **Top Header**: User avatar, greeting, and live role badge.
- **Reports Toggle**: Click **Daily**, **Weekly**, or **Monthly** to see:
  - *Daily*: Today's hourly breakdown (Morning, Noon, Evening, Night).
  - *Weekly*: Mon-Sun daily spending bars with volume highlights.
  - *Monthly*: 5-month side-by-side inflow vs outflow comparison.
- **Financial Cards**: Total Balance, Income, Expenses, and Savings Ratio.
- **Customer Quick Actions**: Direct shortcuts to Add Expense, Categories, and Analytics.
- **Admin View**: System-wide volume, active user count, transaction success rates, and security audit feed.

### 2. Analysis Screen (Admin & Customer)
- **Timeframe Selector**: This Week, This Month, This Year.
- **Budget Consumption Gauge**: Real-time spending versus monthly budget limit with status warnings.
- **Category Breakdown**: Percentage of total expenditure by category with interactive color-coded bars.
- **Financial Health Score**: Visual score gauge (84/100 - "Excellent savings pace").
- **Admin Analytics**: Platform volume by sector, gateway uptime (99.98%), and average API latency (24ms).

### 3. Profile & Edit Profile Screen (Customer Only)
- **Profile Screen**: Customer verification badge, account ID, linked debit card, monthly budget limit, and security settings.
- **Edit Profile Screen (Stack Navigation)**:
  - Visual avatar selector.
  - Form validation:
    - *Full Name*: Required, min 3 characters.
    - *Email Address*: Regex validation (`name@domain.ext`).
    - *Phone Number*: Exactly 10 numeric digits.
    - *Monthly Budget*: Positive numeric value.
  - On save, updates state globally and triggers a **personalized alert message**.

### 4. Transaction (Month-wise) Screen (Customer Only)
- **Month Selector**: Filter records by `Oct 2026`, `Sep 2026`, `Aug 2026`, `Jul 2026`, `Jun 2026`.
- **Search & Filter**: Live keyword search and filter by *All*, *Expense*, or *Income*.
- **Add / Edit Transaction Modal**:
  - Validated Title, Amount, Category, and Payment Method.
- **Personalized Alert Notification (Requirement ii)**:
  - When added: *"Awesome Gowtham! Your expense of ₹X for 'Food & Dining' was recorded successfully. Your budget and reports are updated."*
  - When edited: *"Notice for Gowtham: Transaction 'X' has been modified to ₹Y."*
  - When deleted: *"Hey Gowtham, 'X' has been deleted from your financial records."*

### 5. Overall Categories Screen (Customer - 5 Marks)
- **5 Marks Evaluated Screen**:
  - Global budget consumption overview (Total Budget, Consumed, Remaining).
  - Search and filter categories by *Near Limit (>80%)* and *Over Budget*.
  - 8 pre-configured categories with rich icons and colors.
  - Progress bar dynamically shifts from Emerald (`<70%`), Amber (`70-90%`), to Rose (`>90%`).
  - **Add Custom Category Modal**: Allows adding custom categories with icon, color accent, and budget allocation.
  - Tapping any card uses **Stack Navigation** to open Screen 6: Category Details.

### 6. Category Details Screen (Customer)
- **Category Hero Card**: Allocated budget, amount spent, remaining buffer, and percentage consumed.
- **Category Insights**: Average spend per purchase, largest single transaction, and record count.
- **Dedicated Transactions**: Filtered list of all expenditures belonging strictly to this category.
- **Quick Record Expense Button**: Pre-selects the category for rapid transaction entry.
- **Back Navigation**: Stack back button to return to the Categories grid.
