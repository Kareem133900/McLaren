document.addEventListener('DOMContentLoaded', () => {
    
    // 1. التفاعل مع قائمة الهامبرغر (لتشغيل/إغلاق القائمة على الهاتف)
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // تغيير أيقونة الهامبرغر إلى X عند الفتح
        const icon = hamburger.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // إغلاق القائمة عند النقر على أي رابط (مفيد للهاتف)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.querySelector('i').classList.remove('fa-times');
                hamburger.querySelector('i').classList.add('fa-bars');
            }
        });
    });

    // 2. تمرير سلس لأقسام الصفحة (Smooth Scrolling)
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // حساب موقع القسم مع خصم ارتفاع شريط التنقل الثابت
                const offset = document.querySelector('.navbar').offsetHeight;
                window.scrollTo({
                    top: targetSection.offsetTop - offset,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. تحديث قسم السباقات (Racing Section)
    const raceInfoBtn = document.getElementById('race-info-btn');
    const raceStatus = document.getElementById('race-status');

    raceInfoBtn.addEventListener('click', () => {
        raceStatus.innerHTML = '<span style="color: #ff5500;">جاري تحميل أحدث أخبار فورمولا 1...</span>';
        raceInfoBtn.disabled = true;
        raceInfoBtn.style.opacity = '0.7';

        setTimeout(() => {
            const updates = [
                '🔥 **تحديث عاجل:** Lando Norris يحقق انتصارًا تاريخيًا في سباق ميامي الكبرى!',
                '🌟 ماكلارين تتأهل في المراكز الأولى لسباق إيمولا. ترقبوا المزيد!',
                '🏎️ فريق ماكلارين يطلق تصميمًا جديدًا لسيارة MCL38 لموسم 2025.',
                '🏆 أوسكار بياستري يحقق أسرع لفة في تجارب برشلونة.'
            ];
            const randomIndex = Math.floor(Math.random() * updates.length);
            raceStatus.innerHTML = updates[randomIndex];
            
            raceInfoBtn.textContent = 'تحديث آخر';
            raceInfoBtn.disabled = false;
            raceInfoBtn.style.opacity = '1';
            raceInfoBtn.style.backgroundColor = '#ff5500'; // إعادة اللون الأصلي
        }, 2000); 
    });
    
    // 4. رسالة عند النقر على بطاقات السيارات (لأغراض تسويقية)
    const carCards = document.querySelectorAll('.car-card');
    
    carCards.forEach(card => {
        const viewDetailsBtn = card.querySelector('.view-details-btn');
        viewDetailsBtn.addEventListener('click', (event) => {
            event.preventDefault(); 
            const modelName = card.getAttribute('data-model');
            alert(`نحن نعمل على إطلاق صفحة تفاصيل مخصصة لسيارة ماكلارين ${modelName} قريبًا! تابعونا للمزيد من المعلومات الحصرية.`);
        });
    });

    // 5. معالجة نموذج الاتصال (لأغراض العرض فقط)
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); 

        alert('شكرًا لتواصلك مع ماكلارين! لقد استلمنا رسالتك وسنقوم بالرد عليك في أقرب وقت ممكن.');
        contactForm.reset(); 
    });

});