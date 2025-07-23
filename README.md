# 📝 Onboarding Flow - React + Redux

This is a multi-step onboarding form built using **React** and **Redux**. It consists of 5 steps where users fill out different types of information, and each form is validated and stored centrally in Redux state.

---

## 🔧 Tech Stack

- **React** – Frontend UI library
- **Redux Toolkit** – Global state management
- **React Redux** – Integration layer between React and Redux
- **React Router DOM** – Page/routing management (if needed)

---

## 🚀 Features

- Multi-step onboarding flow with 5 forms
- Clickable step indicator for navigation
- Form validation at each step
- Stores form data centrally using Redux
- Final form summarizes all data

---

## 🧠 What is Redux (in simple words)?

Redux is a **state management tool**.

Imagine you’re building a multi-page form. If you use just `useState`, each form component stores its own data — and when you switch steps, that data may disappear.

### Redux solves this by:
- Storing all form data **in one central store**
- Letting all form components **access and update** the data
- Remembering the current **form step**
- Making your app more predictable and organized

---

## 📦 How Redux is Used in This Project

### 🔁 Redux Flow

1. **Store** → Holds all app-level state (`formData`, `step`)
2. **Slice** (`onboardingSlice.js`) → Defines state + reducers
3. **Dispatch** → When user submits a form, we `dispatch` an action to save the data
4. **useSelector** → Components read current step or form data using `useSelector`

---

### 🧩 Redux State Structure

```js
{
  onboarding: {
    step: 1,
    formData: {
      step1: { firstName, lastName },
      step2: { email, phone },
      step3: { street, city, zip },
      step4: { qualification, graduationYear },
      step5: { skills }
    }
  }
}
