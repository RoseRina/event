// Cek apakah halaman saat ini adalah halaman admin
const isAdminPage = window.location.pathname.includes('/admin');

// Hanya terapkan proteksi jika bukan di halaman admin
if (!isAdminPage) {
    // Deteksi dan cegah DevTools
    function detectDevTools() {
        const widthThreshold = window.outerWidth - window.innerWidth > 160;
        const heightThreshold = window.outerHeight - window.innerHeight > 160;
        
        if(widthThreshold || heightThreshold) {
            document.body.innerHTML = '<div style="text-align:center;padding:50px;"><h1>Akses Ditolak</h1><p>Mohon tutup Developer Tools untuk melanjutkan.</p></div>';
        }
    }

    // Deteksi DevTools dengan console.log
    const devToolsDetector = function() {
        const checks = {
            devToolsOpen: false,
            previousState: false
        };
        
        const element = new Image();
        element.__defineGetter__('id', function() {
            checks.devToolsOpen = true;
        });
        
        setInterval(function() {
            checks.previousState = checks.devToolsOpen;
            checks.devToolsOpen = false;
            console.log(element);
            console.clear();
            if (checks.devToolsOpen) {
                document.body.innerHTML = '<div style="text-align:center;padding:50px;"><h1>Akses Ditolak</h1><p>Mohon tutup Developer Tools untuk melanjutkan.</p></div>';
            }
        }, 1000);
    };

    // Nonaktifkan copy-paste
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });

    document.addEventListener('copy', function(e) {
        e.preventDefault();
    });

    document.addEventListener('cut', function(e) {
        e.preventDefault();
    });

    document.addEventListener('paste', function(e) {
        e.preventDefault();
    });

    // Mencegah seleksi teks
    document.addEventListener('selectstart', function(e) {
        e.preventDefault();
    });

    document.addEventListener('mousedown', function(e) {
        if (e.detail > 1) { // Mencegah double-click selection
            e.preventDefault();
        }
    });

    document.addEventListener('dragstart', function(e) {
        e.preventDefault();
    });

    // Inisialisasi
    if (window.console && window.console.firebug) {
        document.body.innerHTML = '<div style="text-align:center;padding:50px;"><h1>Akses Ditolak</h1><p>Mohon tutup Developer Tools untuk melanjutkan.</p></div>';
    }

    setInterval(detectDevTools, 1000);
    devToolsDetector();
} 