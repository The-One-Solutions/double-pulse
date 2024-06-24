let currentSlide = 0;
        const slides = document.querySelectorAll('.carousel-slide');
        const indicators = document.querySelectorAll('.carousel-indicator');
        const container = document.querySelector('.carousel-inner');

        function showSlide(n) {
            currentSlide = n;
            container.style.transform = `translateX(-${currentSlide * 100}%)`;

            indicators.forEach((indicator, index) => {
                if (index === currentSlide) {
                    indicator.style.backgroundColor = '#D30505'; // Indicator active color
                } else {
                    indicator.style.backgroundColor = '#ffffff'; // Indicator inactive color
                }
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        }

        function goToSlide(n) {
            showSlide(n);
        }

        setInterval(nextSlide, 3000); // Auto slide every 3 seconds
        showSlide(currentSlide); // Show initial slide