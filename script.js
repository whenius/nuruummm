document.addEventListener('DOMContentLoaded', () => {
    const bubbles = [
        document.querySelector('.bubble-1'),
        document.querySelector('.bubble-2'),
        document.querySelector('.bubble-3'),
        document.querySelector('.bubble-4')
    ];
    const findikBubble = document.querySelector('.bubble-5');
    
    const otherKids = document.querySelectorAll('.other-kid');
    
    const topGiftIcon = document.getElementById('top-gift-icon');
    const cardModal = document.getElementById('card-modal');
    const closeModalBtn = document.querySelector('.close-modal-btn');


    const startDelay = 3500; 
    const talkDuration = 2000;

    bubbles.forEach((bubble, index) => {
        setTimeout(() => {
            bubble.classList.remove('hidden');
            setTimeout(() => bubble.classList.add('show'), 50);
        }, startDelay + (talkDuration * index));

        setTimeout(() => {
            bubble.classList.remove('show');
            setTimeout(() => bubble.classList.add('hidden'), 500);
        }, startDelay + (talkDuration * (index + 1)));
    });

    const othersFinishedTime = startDelay + (talkDuration * 4);

    setTimeout(() => {
        otherKids.forEach(kid => {
            kid.classList.add('fade-out');
        });
    }, othersFinishedTime + 500);

    const findikStartTime = othersFinishedTime + 2000;
    setTimeout(() => {
        findikBubble.classList.remove('hidden');
        setTimeout(() => findikBubble.classList.add('show'), 50);
    }, findikStartTime);

    setTimeout(() => {
        findikBubble.innerHTML = "Annecim, sana 3 kart hediyemiz var bunları istediğin zaman kullanabilirsin";
    }, findikStartTime + 3500);

    setTimeout(() => {
        topGiftIcon.classList.remove('hidden');

    }, findikStartTime + 7500);



    topGiftIcon.addEventListener('click', () => {
        cardModal.classList.remove('hidden');
    });

    closeModalBtn.addEventListener('click', () => {
        cardModal.classList.add('hidden');
        document.querySelectorAll('.card').forEach(c => c.classList.remove('flipped'));
    });
});

function flipCard(cardElement) {
    if (!cardElement.classList.contains('flipped')) {
        cardElement.classList.add('flipped');
    }
}

function closeCard(event, btnElement) {
    event.stopPropagation(); 
    const card = btnElement.closest('.card');
    card.classList.remove('flipped');
}