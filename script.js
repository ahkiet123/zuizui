document.addEventListener('DOMContentLoaded', function() {
    setTimeout(showPopup, 3000); // Hiện popup sau 3 giây

    let refusalCount = 0; // Đếm số lần từ chối

    function showPopup() {
        // Tạo thông báo popup
        const popup = document.createElement('div');
        popup.classList.add('popup');
        popup.innerHTML = `
            <p>Em Có Péo khumm</p>
            <button class="yes-btn">Cóooo</button>
            <button class="no-btn">hông</button>

        `;
        document.body.appendChild(popup);

        const yesButton = popup.querySelector('.yes-btn');
        const noButton = popup.querySelector('.no-btn');



        // Sự kiện khi nhấn nút "Có"
        yesButton.addEventListener('click', () => {
            alert('Chúc mừng eiu đã chọn đúng!, được thưởngg 1 buổi đi Box!'); // Bạn có thể thay đổi thông báo này
            document.querySelectorAll('.popup').forEach(el => el.remove()); // Xóa tất cả các popup
            showFinalMessage('Em chọn đúng rùi thì chỉ có zay thui :>>, anh biết em hong chọn cái này trong lần đầu đâu :))');
        });

        // Sự kiện khi nhấn nút "Không"
        noButton.addEventListener('click', () => {
            popup.remove();
            refusalCount++;
            if (refusalCount < 5) {
                showPopupRandomPosition();
            } else {
                autoPopupFlood();
            }
        });
    }

    // Hiện popup ở vị trí ngẫu nhiên
    function showPopupRandomPosition() {
        const popup = document.createElement('div');
        popup.classList.add('popup');
        popup.style.top = `${Math.random() * (window.innerHeight - 100)}px`;
        popup.style.left = `${Math.random() * (window.innerWidth - 200)}px`;
        popup.innerHTML = `
            <p>Em Có Péo khumm</p>
            <button class="yes-btn">Cóooo</button>
            <button class="no-btn">hông</button>
        `;
        document.body.appendChild(popup);

        const yesButton = popup.querySelector('.yes-btn');
        const noButton = popup.querySelector('.no-btn');

        yesButton.addEventListener('click', () => {
            alert('Mất thời gian quá nhẻe, phải phạt nặng á');
            document.querySelectorAll('.popup').forEach(el => el.remove());
            showFinalMessage('Đúm là người Péoo, Khum chấp nhận sự thật!!, reload trang dòi chọn lại đee');
        });

        noButton.addEventListener('click', () => {
            popup.remove();
            refusalCount++;
            if (refusalCount < 7) {
                showPopupRandomPosition();
            } else {
                autoPopupFlood();
            }
        });
    }

    // Tự động hiện popup tràn màn hình
    function autoPopupFlood() {
        const interval = setInterval(() => {
            const popup = document.createElement('div');
            popup.classList.add('popup');
            popup.style.top = `${Math.random() * (window.innerHeight - 100)}px`;
            popup.style.left = `${Math.random() * (window.innerWidth - 200)}px`;
            popup.innerHTML = `
            <p>Em Có Péo khumm</p>
            <button class="yes-btn">Cóooo</button>
            <button class="no-btn">hông</button>
            `;
            document.body.appendChild(popup);

            const yesButton = popup.querySelector('.yes-btn');
            const noButton = popup.querySelector('.no-btn');
            yesButton.addEventListener('click', () => {
                alert('Quá mất thời giannn, anh biết em lìii z màa');
                clearInterval(interval);
                document.querySelectorAll('.popup').forEach(el => el.remove());
                showFinalMessage('giờ em load lại trang web rùi chọn lại đyy');
            });
            noButton.addEventListener('click', () => {
                popup.remove();
                // Không tăng refusalCount trong hàm này để cho phép chọn "Không" không giới hạn
            });
        }, 600);
    }

    // Hiện thông báo cuối cùng
    function showFinalMessage(message) {
        const finalMessage = document.createElement('div');
        finalMessage.classList.add('popup');
        finalMessage.style.position = 'fixed';
        finalMessage.style.top = '50%';
        finalMessage.style.left = '50%';
        finalMessage.style.transform = 'translate(-50%, -50%)';
        finalMessage.innerHTML = `<p>${message}</p>`;
        document.body.appendChild(finalMessage);
    }
});
