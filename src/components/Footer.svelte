<script>
    // Footer component
    const currentYear = new Date().getFullYear();
</script>

<footer>
    <div class="footer-content">
        <div class="footer-section">
            <h3>About Us</h3>
            <p>A simple login and signup application built with Svelte.</p>
        </div>
        
        <div class="footer-section">
            <h3>Quick Links</h3>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
        
        <div class="footer-section">
            <h3>Contact Us</h3>
            <p>Email: info@example.com</p>
            <p>Phone: +1 (123) 456-7890</p>
        </div>
    </div>
    
    <div class="footer-bottom">
        <p>&copy; {currentYear} Svelte Login App. All rights reserved.</p>
    </div>
</footer>

<style>
    footer {
        background-color: #333;
        color: #fff;
        padding: 20px 0;
        margin-top: 40px;
    }
    
    .footer-content {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
    }
    
    .footer-section {
        flex: 1;
        min-width: 250px;
        margin: 10px;
    }
    
    h3 {
        color: #f8f9fa;
        margin-bottom: 15px;
        font-size: 1.2em;
    }
    
    ul {
        list-style-type: none;
        padding: 0;
    }
    
    li {
        margin-bottom: 8px;
    }
    
    a {
        color: #ddd;
        text-decoration: none;
    }
    
    a:hover {
        color: #fff;
        text-decoration: underline;
    }
    
    .footer-bottom {
        text-align: center;
        padding-top: 20px;
        margin-top: 20px;
        border-top: 1px solid #444;
    }
    
    p {
        margin: 8px 0;
    }
</style>