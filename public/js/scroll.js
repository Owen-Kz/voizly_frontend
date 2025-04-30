document.addEventListener('DOMContentLoaded', function() {
    // Get all the anchor tags inside the submission-header
    var navLinks = document.querySelectorAll('.link-item');
    const navImage = document.querySelector(".navbar img")

    // Loop through each anchor tag
    navLinks.forEach(function(navLink) {
        // Add click event listener to each anchor tag
        navLink.addEventListener('click', function(event) {
            // Prevent default link behavior
            event.preventDefault();
            
            // Get the target element ID from the href attribute
            var targetId = navLink.getAttribute('href').substring(1);
            // Find the target element by ID
            var targetElement = document.getElementById(targetId);

            if(targetId === "layerTwo"){
                if(navImage.hasAttribute("class")){

                }else{
                    navImage.setAttribute("class",`filter-gray`)

                }
            }else{
                if(navImage.hasAttribute("class")){
                    navImage.removeAttribute("class")

                }else{

                }
            }
                        
            const currentScroll = window.scrollY;
            // Define the offset from the top
            const offset = 0; // 90px offset from the top
                    
                        // Get the target element's position relative to the viewport
            const targetPosition = targetElement.getBoundingClientRect().top;
            
            // Calculate the new scroll position considering the offset
            const newScrollPosition = currentScroll + targetPosition - offset;
            
            // Scroll to the new position smoothly
            window.scrollTo({
                top: newScrollPosition,
                behavior: 'smooth'
            });
            // targetElement.style.marginTop = '90px'
            
        });




    });
});