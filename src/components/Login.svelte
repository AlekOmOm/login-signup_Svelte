<script>
    // Import icons (removed social icons)
    import EmailIcon from '../assets/icons/EmailIcon.svelte';
    import LockIcon from '../assets/icons/LockIcon.svelte';
    import AlertIcon from '../assets/icons/AlertIcon.svelte';
    import FormInput from './FormInput.svelte';
    
    // Import CSS and JS logic
    import { email, password, errorMessage, isSubmitting, rememberMe, handleLogin } from '../lib/login.js';
    import '../styles/forms.css';
    import '../styles/login.css';
</script>

<div class="login-form">
    {#if $errorMessage}
        <div class="error-message">
            <AlertIcon color="#dc2626" />
            {$errorMessage}
        </div>
    {/if}
    
    <form on:submit|preventDefault={handleLogin}>
        <FormInput 
            type="email" 
            id="email" 
            bind:value={$email} 
            placeholder="Email Address" 
            required={true} 
            icon={EmailIcon}
        />
        
        <FormInput 
            type="password" 
            id="password" 
            bind:value={$password} 
            placeholder="Password" 
            required={true} 
            icon={LockIcon}
        />
        
        <div class="form-options">
            <label class="remember-me">
                <input type="checkbox" bind:checked={$rememberMe} />
                <span>Remember me</span>
            </label>
            <a href="#reset-password" class="forgot-link">Forgot Password?</a>
        </div>
        
        <button type="submit" class="login-button" disabled={$isSubmitting}>
            {#if $isSubmitting}
                <div class="spinner"></div>
                Logging in...
            {:else}
                Login
            {/if}
        </button>
    </form>
</div>

<!-- Import CSS files -->
<style>
    @import '../styles/forms.css';
    @import '../styles/login.css';
</style>