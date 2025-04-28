import { writable } from "svelte/store";

// Create stores for form state
export const name = writable("");
export const email = writable("");
export const password = writable("");
export const confirmPassword = writable("");
export const errorMessage = writable("");
export const isSubmitting = writable(false);
export const agreeToTerms = writable(false);

export function handleSignup() {
  isSubmitting.set(true);
  errorMessage.set("");

  // Get current values from stores
  let nameValue;
  let emailValue;
  let passwordValue;
  let confirmPasswordValue;
  let agreeToTermsValue;

  name.subscribe((value) => (nameValue = value))();
  email.subscribe((value) => (emailValue = value))();
  password.subscribe((value) => (passwordValue = value))();
  confirmPassword.subscribe((value) => (confirmPasswordValue = value))();
  agreeToTerms.subscribe((value) => (agreeToTermsValue = value))();

  // Simple validation
  if (!nameValue || !emailValue || !passwordValue || !confirmPasswordValue) {
    errorMessage.set("Please fill in all fields");
    isSubmitting.set(false);
    return;
  }

  if (passwordValue !== confirmPasswordValue) {
    errorMessage.set("Passwords do not match");
    isSubmitting.set(false);
    return;
  }

  if (!agreeToTermsValue) {
    errorMessage.set("You must agree to the Terms of Service");
    isSubmitting.set(false);
    return;
  }

  // Here you would normally make an API call to register the user
  // For demo purposes, we'll just simulate a successful signup after a delay
  setTimeout(() => {
    console.log("Signup attempt:", {
      name: nameValue,
      email: emailValue,
      password: passwordValue,
    });
    alert(`Account successfully created for ${nameValue} (${emailValue})`);
    name.set("");
    email.set("");
    password.set("");
    confirmPassword.set("");
    agreeToTerms.set(false);
    isSubmitting.set(false);
  }, 1000);
}
