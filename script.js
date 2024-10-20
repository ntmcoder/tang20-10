document.getElementById('btn-message').addEventListener('click', function() {
    const specialMessage = document.getElementById('special-message');
    specialMessage.textContent = "Chị là người phụ nữ tuyệt vời nhất! Hãy luôn tỏa sáng và hạnh phúc nhé!";
    specialMessage.classList.remove('hidden');
});
