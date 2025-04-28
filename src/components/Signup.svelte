<script>
    // Import icons (removed social icons)
    import UserIcon from '../assets/icons/UserIcon.svelte';
    import EmailIcon from '../assets/icons/EmailIcon.svelte';
    import LockIcon from '../assets/icons/LockIcon.svelte';
    import AlertIcon from '../assets/icons/AlertIcon.svelte';
    import FormInput from './FormInput.svelte';


    
    // Import CSS and JS logic
  import {
    name,
    email,
    password,
    confirmPassword,
    errorMessage,
    isSubmitting,
    agreeToTerms,
    handleSignup,
  } from "../lib/signup.js";

  import "../styles/forms.css";
  import "../styles/signup.css";
</script>

<div class="signup-form">
    {#if $errorMessage}
        <div class="error-message">
            <AlertIcon color="#dc2626" />
            {$errorMessage}
        </div>
    {/if}
    
    <form on:submit|preventDefault={handleSignup}>
        <FormInput 
            type="text" 
            id="name" 
            bind:value={$name} 
            placeholder="Full Name" 
            required={true} 
            icon={UserIcon}
        />
        
        <FormInput 
            type="email" 
            id="signup-email" 
            bind:value={$email} 
            placeholder="Email Address" 
            required={true} 
            icon={EmailIcon}
        />
        
        <FormInput 
            type="password" 
            id="signup-password" 
            bind:value={$password} 
            placeholder="Password" 
            required={true} 
            icon={LockIcon}
        />
        
        <FormInput 
            type="password" 
            id="confirm-password" 
            bind:value={$confirmPassword} 
            placeholder="Confirm Password" 
            required={true} 
            icon={LockIcon}
        />
        
        <div class="form-agree">
            <label class="agree-terms">
                <div class="checkbox">
                    <input type="checkbox" bind:checked={$agreeToTerms} required />
                </div>
                <span>I agree to the <a href="#terms">Terms of Service</a> and <a href="#privacy">Privacy Policy</a></span>
            </label>
        </div>
        
        <button type="submit" class="signup-button" disabled={$isSubmitting}>
            {#if $isSubmitting}
                <div class="spinner"></div>
                Creating account...
            {:else}
                Create Account
            {/if}
        </button>
    </form>
</div>

<!-- Import CSS files -->
<style>
  @import "../styles/forms.css";
  @import "../styles/signup.css";
</style>
