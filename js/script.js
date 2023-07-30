function showImagePopup(imageUrl, index) {
    const popups = document.querySelectorAll('.popup');
    const popupImages = document.querySelectorAll('.popup-image');
    popupImages[index].src = imageUrl;
    popups[index].style.display = 'block';
}

function closeImagePopup(index) {
    const popups = document.querySelectorAll('.popup');
    popups[index].style.display = 'none';
}