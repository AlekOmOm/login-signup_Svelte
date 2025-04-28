<script>
    // Import components
    import Header from './components/Header.svelte';
    import Footer from './components/Footer.svelte';
    import Card from './components/Card.svelte';

    // Import global styles
    import './styles/app.css';
    import './styles/shared.css';
</script>

<div class="app-container">
    <Header />

    <main class="main-content">
        <Card />
    </main>
    
    <Footer />
</div>

<style>
    .app-container {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    .main-content {
        padding-top: 10vh;
    }
</style>
