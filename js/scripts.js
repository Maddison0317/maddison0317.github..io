<script>
document.addEventListener('DOMContentLoaded', function() {
    const sidebarLinks = document.querySelectorAll('#sidebar ul li a');

    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor behavior
            const sectionId = this.getAttribute('href');
            const section = document.querySelector(sectionId);

            if (section) {
                section.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center' // Centers the section vertically in the viewport
                });
            }
        });
    });
});
</script>
