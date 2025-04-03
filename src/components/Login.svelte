<script>
    // Login component
    import EmailIcon from '../assets/icons/EmailIcon.svelte';
    import LockIcon from '../assets/icons/LockIcon.svelte';
    import AlertIcon from '../assets/icons/AlertIcon.svelte';
    import GoogleIcon from '../assets/icons/GoogleIcon.svelte';
    import FacebookIcon from '../assets/icons/FacebookIcon.svelte';
    import AppleIcon from '../assets/icons/AppleIcon.svelte';
    import FormInput from './FormInput.svelte';
    
    let email = '';
    let password = '';
    let errorMessage = '';
    let isSubmitting = false;
    let rememberMe = false;
    
    function handleLogin() {
        isSubmitting = true;
        errorMessage = '';
        
        // Simple validation
        if (!email || !password) {
            errorMessage = 'Please fill in all fields';
            isSubmitting = false;
            return;
        }
        
        // Here you would normally make an API call to authenticate the user
        // For demo purposes, we'll just simulate a successful login after a delay
        setTimeout(() => {
            console.log('Login attempt:', { email, password, rememberMe });
            alert(`Login successful for ${email}`);
            email = '';
            password = '';
            isSubmitting = false;
        }, 1000);
    }
</script>

<div class="login-form">
    {#if errorMessage}
        <div class="error-message">
            <AlertIcon color="#dc2626" />
            {errorMessage}
        </div>
    {/if}
    
    <form on:submit|preventDefault={handleLogin}>
        <FormInput 
            type="email" 
            id="email" 
            bind:value={email} 
            placeholder="Email Address" 
            required={true} 
            icon={EmailIcon}
        />
        
        <FormInput 
            type="password" 
            id="password" 
            bind:value={password} 
            placeholder="Password" 
            required={true} 
            icon={LockIcon}
        />
        
        <div class="form-options">
            <label class="remember-me">
                <input type="checkbox" bind:checked={rememberMe} />
                <span>Remember me</span>
            </label>
            <a href="#reset-password" class="forgot-link">Forgot Password?</a>
        </div>
        
        <button type="submit" class="login-button" disabled={isSubmitting}>
            {#if isSubmitting}
                <div class="spinner"></div>
                Logging in...
            {:else}
                Login
            {/if}
        </button>
        
        <div class="social-login">
            <p>Or login with</p>
            <div class="social-buttons">
                <button 
                    type="button" 
                    class="social-button google" 
                    aria-label="Login with Google"
                >
                    <GoogleIcon width={20} height={20} />
                </button>
                <button 
                    type="button" 
                    class="social-button facebook" 
                    aria-label="Login with Facebook"
                >
                    <FacebookIcon width={20} height={20} />
                </button>
                <button 
                    type="button" 
                    class="social-button apple" 
                    aria-label="Login with Apple"
                >
                    <AppleIcon width={20} height={20} />
                </button>
            </div>
        </div>
    </form>
</div>

<style>
    .login-form {
        display: flex;
        flex-direction: column;
    }
    
    /* Removed redundant form-group and input styles as they are now in FormInput component */
    
    .form-options {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        font-size: 14px;
    }
    
    .remember-me {
        display: flex;
        align-items: center;
        cursor: pointer;
    }
    
    .remember-me input {
        margin-right: 6px;
        accent-color: #6e8efb;
    }
    
    .remember-me span {
        color: #4b5563;
    }
    
    .forgot-link {
        color: #6e8efb;
        text-decoration: none;
        font-weight: 500;
    }
    
    .forgot-link:hover {
        text-decoration: underline;
    }
    
    .login-button {
        width: 100%;
        padding: 12px;
        background: linear-gradient(135deg, #6e8efb, #a777e3);
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
    
    .login-button:hover {
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(110, 142, 251, 0.3);
    }
    
    .login-button:disabled {
        background: #9ca3af;
        transform: none;
        box-shadow: none;
        cursor: not-allowed;
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
    
    .social-login {
        margin-top: 24px;
        text-align: center;
    }
    
    .social-login p {
        font-size: 14px;
        color: #6b7280;
        position: relative;
        margin-bottom: 16px;
    }
    
    .social-login p::before,
    .social-login p::after {
        content: "";
        position: absolute;
        top: 50%;
        width: 35%;
        height: 1px;
        background-color: #e5e7eb;
    }
    
    .social-login p::before {
        left: 0;
    }
    
    .social-login p::after {
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
