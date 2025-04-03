<script>
    // Signup component
    // icons
    import UserIcon from '../assets/icons/UserIcon.svelte';
    import EmailIcon from '../assets/icons/EmailIcon.svelte';
    import LockIcon from '../assets/icons/LockIcon.svelte';
    import AlertIcon from '../assets/icons/AlertIcon.svelte';
    import GoogleIcon from '../assets/icons/GoogleIcon.svelte';
    import FacebookIcon from '../assets/icons/FacebookIcon.svelte';
    import AppleIcon from '../assets/icons/AppleIcon.svelte';
    // component
    import FormInput from './FormInput.svelte';
    
    let name = '';
    let email = '';
    let password = '';
    let confirmPassword = '';
    let errorMessage = '';
    let isSubmitting = false;
    let agreeToTerms = false;
    
    function handleSignup() {
        isSubmitting = true;
        errorMessage = '';
        
        // Simple validation
        if (!name || !email || !password || !confirmPassword) {
            errorMessage = 'Please fill in all fields';
            isSubmitting = false;
            return;
        }
        
        if (password !== confirmPassword) {
            errorMessage = 'Passwords do not match';
            isSubmitting = false;
            return;
        }
        
        if (!agreeToTerms) {
            errorMessage = 'You must agree to the Terms of Service';
            isSubmitting = false;
            return;
        }
        
        // Here you would normally make an API call to register the user
        // For demo purposes, we'll just simulate a successful signup after a delay
        setTimeout(() => {
            console.log('Signup attempt:', { name, email, password });
            alert(`Account successfully created for ${name} (${email})`);
            name = '';
            email = '';
            password = '';
            confirmPassword = '';
            agreeToTerms = false;
            isSubmitting = false;
        }, 1000);
    }
</script>

<div class="signup-form">
    {#if errorMessage}
        <div class="error-message">
            <AlertIcon color="#dc2626" />
            {errorMessage}
        </div>
    {/if}
    
    <form on:submit|preventDefault={handleSignup}>
        <FormInput 
            type="text" 
            id="name" 
            bind:value={name} 
            placeholder="Full Name" 
            required={true} 
            icon={UserIcon}
        />
        
        <FormInput 
            type="email" 
            id="signup-email" 
            bind:value={email} 
            placeholder="Email Address" 
            required={true} 
            icon={EmailIcon}
        />
        
        <FormInput 
            type="password" 
            id="signup-password" 
            bind:value={password} 
            placeholder="Password" 
            required={true} 
            icon={LockIcon}
        />
        
        <FormInput 
            type="password" 
            id="confirm-password" 
            bind:value={confirmPassword} 
            placeholder="Confirm Password" 
            required={true} 
            icon={LockIcon}
        />
        
        <div class="form-agree">
            <label class="agree-terms">
                  <div class = 'checkbox'>
                     <input type="checkbox" bind:checked={agreeToTerms} required />
                  </div>
                <span>I agree to the <a href="#terms">Terms of Service</a> and <a href="#privacy">Privacy Policy</a></span>
            </label>
        </div>
        
        <button type="submit" class="signup-button" disabled={isSubmitting}>
            {#if isSubmitting}
                <div class="spinner"></div>
                Creating account...
            {:else}
                Create Account
            {/if}
        </button>
        
        <div class="social-signup">
            <p>Or sign up with</p>
            <div class="social-buttons">
                <button 
                    type="button" 
                    class="social-button google" 
                    aria-label="Sign up with Google"
                >
                    <GoogleIcon width={20} height={20} />
                </button>
                <button 
                    type="button" 
                    class="social-button facebook" 
                    aria-label="Sign up with Facebook"
                >
                    <FacebookIcon width={20} height={20} />
                </button>
                <button 
                    type="button" 
                    class="social-button apple" 
                    aria-label="Sign up with Apple"
                >
                    <AppleIcon width={20} height={20} />
                </button>
            </div>
        </div>
    </form>
</div>

<style>
    .signup-form {
        display: flex;
        flex-direction: column;
    }
    
    .form-agree {
        margin-bottom: 20px;
    }
    
    .agree-terms {
        display: flex;
        align-items: flex-start;
        cursor: pointer;
        font-size: 14px;
        line-height: 1.4;
    }
    
    .agree-terms input {
        margin-right: 8px;
        margin-top: 3px;
        accent-color: #a777e3;
    }
    
    .agree-terms span {
        color: #4b5563;
    }
    
    .agree-terms a {
        color: #a777e3;
        text-decoration: none;
        font-weight: 500;
    }
    
    .agree-terms a:hover {
        text-decoration: underline;
    }
    
    .signup-button {
        width: 100%;
        padding: 12px;
        background: linear-gradient(135deg, #a777e3, #6e8efb);
        color: white;
        border: none;
        border-radius: 8px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.2s;
    }
    
    .signup-button:hover {
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(167, 119, 227, 0.3);
    }
    
    .signup-button:disabled {
        background: #9ca3af;
        transform: none;
        box-shadow: none;
        cursor: not-allowed;
    }

   .checkbox {
        margin-right: 8px;
    }
    
    .spinner {
        width: 18px;
        height: 18px;
        border: 3px solid rgba(255, 255, 255, 0.3);
        border-top-color: white;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin-right: 8px;
    }
    
    @keyframes spin {
        to { transform: rotate(360deg); }
    }
    
    .social-signup {
        margin-top: 24px;
        text-align: center;
    }
    
    .social-signup p {
        font-size: 14px;
        color: #6b7280;
        position: relative;
        margin-bottom: 16px;
    }
    
    .social-signup p::before,
    .social-signup p::after {
        content: "";
        position: absolute;
        top: 50%;
        width: 35%;
        height: 1px;
        background-color: #e5e7eb;
    }
    
    .social-signup p::before {
        left: 0;
    }
    
    .social-signup p::after {
        right: 0;
    }
    
    .social-buttons {
        display: flex;
        justify-content: center;
        gap: 12px;
    }
    
    .social-button {
        width: 40px;
        height: 40px;
        border: 1px solid #e5e7eb;
        border-radius: 8px;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: all 0.2s;
    }
    
    .social-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    
    .error-message {
        background-color: #fee2e2;
        color: #dc2626;
        padding: 12px;
        border-radius: 8px;
        margin-bottom: 16px;
        display: flex;
        align-items: center;
        font-size: 14px;
    }
    
    .error-message :global(svg) {
        margin-right: 8px;
        flex-shrink: 0;
    }
</style>