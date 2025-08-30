// Modal functionality
        const loginBtn = document.getElementById('input-box');
        const registerBtn = document.getElementById('registerBtn');
        const loginModal = document.getElementById('loginModal');
        const registerModal = document.getElementById('registerModal');
        const closeLogin = document.getElementById('closeLogin');
        const closeRegister = document.getElementById('closeRegister');
        const goToRegister = document.getElementById('goToRegister');
        const goToLogin = document.getElementById('goToLogin');
        
        loginBtn.addEventListener('click', function(e) {
            e.preventDefault();
            loginModal.style.display = 'flex';
        });
        
        registerBtn.addEventListener('click', function(e) {
            e.preventDefault();
            registerModal.style.display = 'flex';
        });
        
        closeLogin.addEventListener('click', function() {
            loginModal.style.display = 'none';
        });
        
        closeRegister.addEventListener('click', function() {
            registerModal.style.display = 'none';
        });
        
        goToRegister.addEventListener('click', function(e) {
            e.preventDefault();
            loginModal.style.display = 'none';
            registerModal.style.display = 'flex';
        });
        
        goToLogin.addEventListener('click', function(e) {
            e.preventDefault();
            registerModal.style.display = 'none';
            loginModal.style.display = 'flex';
        });
        
        // Close modal when clicking outside
        window.addEventListener('click', function(e) {
            if (e.target === loginModal) {
                loginModal.style.display = 'none';
            }
            if (e.target === registerModal) {
                registerModal.style.display = 'none';
            }
        });
        
        // Simple chart rendering for trading pairs (placeholder)
        document.querySelectorAll('.pair-chart').forEach(chart => {
            // This would be replaced with a real chart library in production
            chart.innerHTML = '<div style="height:100%; width:100%; background:linear-gradient(90deg, #3b82f6 0%, transparent 100%);"></div>';
        });
// new script
 document.addEventListener('DOMContentLoaded', function() {
            const loginForm = document.getElementById('loginForm');
            const emailInput = document.getElementById('email');
            const passwordInput = document.getElementById('password');
            const emailError = document.getElementById('emailError');
            const passwordError = document.getElementById('passwordError');
            const successMessage = document.getElementById('successMessage');
            const rememberCheckbox = document.getElementById('remember');
            
            // Check if there's saved login data
            const savedEmail = localStorage.getItem('rememberedEmail');
            if (savedEmail) {
                emailInput.value = savedEmail;
                rememberCheckbox.checked = true;
            }
            
            // Email validation function
            function isValidEmail(email) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(email);
            }
            
            // Password validation function
            function isValidPassword(password) {
                return password.length >= 6;
            }
            
            // Input event listeners for real-time validation
            emailInput.addEventListener('input', function() {
                if (isValidEmail(emailInput.value)) {
                    emailError.style.display = 'none';
                    emailInput.style.borderColor = 'rgba(51, 51, 51, 0.3)';
                }
            });
            
            passwordInput.addEventListener('input', function() {
                if (isValidPassword(passwordInput.value)) {
                    passwordError.style.display = 'none';
                    passwordInput.style.borderColor = 'rgba(51, 51, 51, 0.3)';
                }
            });
            
            // Form submission handler
            loginForm.addEventListener('submit', function(event) {
                event.preventDefault();
                
                let isValid = true;
                
                // Validate email
                if (!isValidEmail(emailInput.value)) {
                    emailError.style.display = 'block';
                    emailInput.style.borderColor = '#e74c3c';
                    isValid = false;
                }
                
                // Validate password
                if (!isValidPassword(passwordInput.value)) {
                    passwordError.style.display = 'block';
                    passwordInput.style.borderColor = '#e74c3c';
                    isValid = false;
                }
                
                if (isValid) {
                    // Save email if "Remember me" is checked
                    if (rememberCheckbox.checked) {
                        localStorage.setItem('rememberedEmail', emailInput.value);
                    } else {
                        localStorage.removeItem('rememberedEmail');
                    }
                    
                    // Show success message
                    successMessage.style.display = 'block';
                    
                    // Simulate API call or redirect
                    setTimeout(function() {
                        alert('Login successful! In a real application, you would be redirected to the dashboard.');
                        // In a real app, you would redirect or make an API call here
                        // window.location.href = '/dashboard';
                    }, 1500);
                }
            });
            
            // Forgot password functionality
            const forgotPasswordLink = document.querySelector('.remember-forget a');
            forgotPasswordLink.addEventListener('click', function(event) {
                event.preventDefault();
                const email = prompt('Please enter your email address to reset your password:');
                if (email && isValidEmail(email)) {
                    alert(`Password reset instructions have been sent to ${email}`);
                    // In a real app, you would make an API call to handle password reset
                } else if (email) {
                    alert('Please enter a valid email address');
                }
            });
            
            // Register link functionality
            const registerLink = document.querySelector('.register-link a');
            registerLink.addEventListener('click', function(event) {
                event.preventDefault();
                alert('Redirecting to registration page...');
                // In a real app, you would redirect to the registration page
                // window.location.href = '/register';
            });
        });

        