<script>
document.addEventListener('DOMContentLoaded', function() {
    // Set up intersection observer for sections
    const sections = document.querySelectorAll('.section');
    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('hidden');
            } else {
                entry.target.classList.add('hidden');
            }
        });
    }, { 
        rootMargin: '-50% 0px -50% 0px' // Adjust root margins to trigger earlier or later
    });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Setup sidebar to appear when mouse is near
    const sidebar = document.getElementById('sidebar');
    // Assuming sidebarTrigger is some element you intend to use to activate the sidebar.
    const triggerArea = document.createElement('div');
    triggerArea.style.position = 'fixed';
    triggerArea.style.top = '0';
    triggerArea.style.left = '0';
    triggerArea.style.width = '20px';
    triggerArea.style.height = '100vh';
    triggerArea.style.zIndex = '1500';
    document.body.appendChild(triggerArea);

    triggerArea.addEventListener('mouseenter', function() {
        sidebar.style.left = '0'; // Adjust as necessary to position sidebar correctly
    });

    sidebar.addEventListener('mouseleave', function() {
        sidebar.style.left = '-160px'; // Adjust as necessary to hide the sidebar
    });
});
</script>
