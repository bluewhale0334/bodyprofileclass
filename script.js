// ============================================
// 갤러리 슬라이드 기능
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.gallery-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('gallery-prev');
    const nextBtn = document.getElementById('gallery-next');
    let currentSlide = 0;
    
    // 슬라이드 표시 함수
    function showSlide(index) {
        // 모든 슬라이드 숨기기
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // 현재 슬라이드 표시
        if (slides[index]) {
            slides[index].classList.add('active');
        }
        if (dots[index]) {
            dots[index].classList.add('active');
        }
        
        currentSlide = index;
    }
    
    // 다음 슬라이드
    function nextSlide() {
        const next = (currentSlide + 1) % slides.length;
        showSlide(next);
    }
    
    // 이전 슬라이드
    function prevSlide() {
        const prev = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(prev);
    }
    
    // 버튼 이벤트
    if (nextBtn) {
        nextBtn.addEventListener('click', nextSlide);
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', prevSlide);
    }
    
    // 도트 클릭 이벤트
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showSlide(index));
    });
    
    // 자동 슬라이드 (선택사항 - 5초마다)
    let autoSlideInterval = setInterval(nextSlide, 5000);
    
    // 갤러리에 마우스 오버 시 자동 슬라이드 정지
    const galleryContainer = document.querySelector('.gallery-container');
    if (galleryContainer) {
        galleryContainer.addEventListener('mouseenter', () => {
            clearInterval(autoSlideInterval);
        });
        
        galleryContainer.addEventListener('mouseleave', () => {
            autoSlideInterval = setInterval(nextSlide, 5000);
        });
    }
});

// ============================================
// 스크롤 애니메이션 (Intersection Observer)
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // 관찰할 요소들
    const animateElements = document.querySelectorAll(
        'section, .program-card, .problem-list li, .target-item, .trust-badge'
    );
    
    animateElements.forEach(el => {
        observer.observe(el);
    });
});

// ============================================
// 링크 설정 (나중에 실제 링크로 교체 가능)
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // 트레이너 인스타그램 링크
    const trainerInstaBtn = document.getElementById('trainer-instagram-btn');
    if (trainerInstaBtn) {
        trainerInstaBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // 실제 인스타그램 링크로 교체 필요
            // window.open('https://instagram.com/트레이너계정', '_blank');
            alert('트레이너 인스타그램 링크를 설정해주세요.');
        });
    }
    
    // 스튜디오 인스타그램 링크
    const studioInstaBtn = document.getElementById('studio-instagram-btn');
    if (studioInstaBtn) {
        studioInstaBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // 실제 인스타그램 링크로 교체 필요
            // window.open('https://instagram.com/런웨이스튜디오계정', '_blank');
            alert('런웨이 스튜디오 인스타그램 링크를 설정해주세요.');
        });
    }
    
    // 문의 버튼들
    const smartplaceBtn = document.getElementById('smartplace-btn');
    if (smartplaceBtn) {
        smartplaceBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // 실제 스마트 플레이스 링크로 교체 필요
            // window.open('스마트플레이스링크', '_blank');
            alert('스마트 플레이스 링크를 설정해주세요.');
        });
    }
    
    const blogBtn = document.getElementById('blog-btn');
    if (blogBtn) {
        blogBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // 실제 블로그 링크로 교체 필요
            // window.open('블로그링크', '_blank');
            alert('블로그 링크를 설정해주세요.');
        });
    }
    
    const kakaoBtn = document.getElementById('kakao-btn');
    if (kakaoBtn) {
        kakaoBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // 실제 카카오톡 채널 링크로 교체 필요
            // window.open('카카오톡채널링크', '_blank');
            alert('카카오톡 채널 링크를 설정해주세요.');
        });
    }
    
    // 메인 CTA - 네이버 예약
    const naverReservationBtn = document.getElementById('naver-reservation-btn');
    if (naverReservationBtn) {
        naverReservationBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // 실제 네이버 예약 링크로 교체 필요
            // window.open('네이버예약링크', '_blank');
            alert('네이버 예약 링크를 설정해주세요.');
        });
    }
});

// ============================================
// 부드러운 스크롤
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // 내부 링크에 부드러운 스크롤 적용 (필요시)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

// ============================================
// 모바일 메뉴 (필요시 확장 가능)
// ============================================
// 현재는 단일 페이지이므로 메뉴가 없지만,
// 나중에 헤더/네비게이션을 추가할 경우를 대비해 준비
