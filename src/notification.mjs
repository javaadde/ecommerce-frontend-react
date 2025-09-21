
function showNotification(message) {
            // Create notification element
            const notification = document.createElement('div');
            notification.className = 'fixed top-6 right-[43%] bg-black text-white px-8 py-4 rounded-lg shadow-lg z-50 transition-[0.6s] transform translate-y-[-100%] ease-in-out';
            notification.textContent = message;
            
            document.body.appendChild(notification);
            
            // Animate in
            setTimeout(() => {
                notification.classList.remove('translate-y-[-100%]');
            }, 100);
            
            // Remove after 2 seconds
            setTimeout(() => {
                notification.classList.add('translate-y-[-100%]');
                setTimeout(() => {
                    document.body.removeChild(notification);
                }, 300);
            }, 2000);
        }

export default showNotification;