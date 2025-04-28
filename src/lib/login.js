import { writable } from "svelte/store";

// Create stores for form state
export const email = writable("");
export const password = writable("");
export const errorMessage = writable("");
export const isSubmitting = writable(false);
export const rememberMe = writable(false);

export function handleLogin() {
  isSubmitting.set(true);
  errorMessage.set("");

  // Get current values from stores
  let emailValue;
  let passwordValue;
  let rememberMeValue;

  email.subscribe((value) => (emailValue = value))();
  password.subscribe((value) => (passwordValue = value))();
  rememberMe.subscribe((value) => (rememberMeValue = value))();

  // Simple validation
  if (!emailValue || !passwordValue) {
    errorMessage.set("Please fill in all fields");
    isSubmitting.set(false);
    return;
  }

  // Here you would normally make an API call to authenticate the user
  // For demo purposes, we'll just simulate a successful login after a delay
  setTimeout(() => {
    console.log("Login attempt:", {
      email: emailValue,
      password: passwordValue,
      rememberMe: rememberMeValue,
    });
    alert(`Login successful for ${emailValue}`);
    email.set("");
    password.set("");
    isSubmitting.set(false);
  }, 1000);
}
