<script>
    export let title = "Welcome";
    export let subtitle = "Login or sign up to continue";
</script>

<header>
    <div class="header-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
    </div>
</header>

<style>
    header {
        padding: 2rem 1rem;
        text-align: center;
        background: linear-gradient(135deg, #6e8efb, #a777e3);
        color: white;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        margin-bottom: 2rem;
        border-radius: 0 0 10px 10px;
    }

    .header-content {
        max-width: 800px;
        margin: 0 auto;
    }

    h1 {
        margin: 0 0 0.5rem;
        font-size: 2.5rem;
        font-weight: 700;
        letter-spacing: 1px;
    }

    p {
        margin: 0;
        font-size: 1.2rem;
        opacity: 0.9;
    }

    @media (max-width: 768px) {
        h1 {
            font-size: 2rem;
        }
        
        p {
            font-size: 1rem;
        }
    }
</style>