<script>
document.addEventListener('DOMContentLoaded', function() {
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
});
document.addEventListener('DOMContentLoaded', function() {
    var sidebar = document.getElementById('sidebar');
    var trigger = document.getElementById('sidebarTrigger');

    trigger.addEventListener('mouseenter', function() {
        sidebar.classList.add('active');
    });

    sidebar.addEventListener('mouseleave', function() {
        sidebar.classList.remove('active');
    });
});
</script>
