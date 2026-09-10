// Switch Panel Utama Materi (9 Kolom)
function switchPanel(panelIndex) {
    const panels = document.querySelectorAll('.content-panel');
    const navCards = document.querySelectorAll('.nav-card');
    
    // Animasi Zoom-out saat menutup panel aktif sebelumnya
    panels.forEach(panel => {
        if (panel.classList.contains('active-panel')) {
            panel.classList.add('closing-panel');
            setTimeout(() => {
                panel.classList.remove('active-panel', 'closing-panel');
                panel.style.display = 'none';
            }, 400);
        }
    });

    // Highlight kartu Peta Pembelajaran yang dipilih
    navCards.forEach((card, idx) => {
        if (idx === panelIndex - 1) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });

    // Animasi Zoom-in saat membuka panel materi baru
    setTimeout(() => {
        const targetPanel = document.getElementById(`panel-${panelIndex}`);
        if (targetPanel) {
            targetPanel.style.display = 'block';
            void targetPanel.offsetWidth; // Trigger reflow CSS transition
            targetPanel.classList.add('active-panel');
            
            // Auto-scroll halus ke area materi yang dipilih
            targetPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, 400);
}

// Buka-tutup sub-materi interaktif
function toggleSubContent(elementId) {
    const targetElement = document.getElementById(elementId);
    if (targetElement) {
        if (targetElement.classList.contains('active')) {
            targetElement.classList.remove('active');
        } else {
            targetElement.classList.add('active');
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }
}

// Toggle Accordion Penutup
function toggleAccordion(accId) {
    const accContent = document.getElementById(accId);
    if (accContent) {
        accContent.classList.toggle('active');
    }
}

// Kontrol Modal Daftar Pustaka
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add('active');
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove('active');
}

// Tutup modal jika mengklik area di luar kotak modal
window.onclick = function(event) {
    if (event.target.classList.contains('modal-overlay')) {
        event.target.classList.remove('active');
    }
};