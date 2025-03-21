 document.addEventListener("DOMContentLoaded", () => {
            setTimeout(() => {
                document.querySelector(".loader").style.display = "none";
                document.querySelector(".content").style.display = "block";
                document.querySelector(".video-background").style.display = "block"; 
                animateText("Mahakalkar");
            }, 4000);
        });

        function animateText(text) {
            let i = 0;
            const target = document.getElementById("animated-text");
            function type() {
                if (i < text.length) {
                    target.textContent += text[i];
                    i++;
                    setTimeout(type, 400);
                }
            }
            type();
        }