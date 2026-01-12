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
// 링크 설정 (실제 링크로 교체 가능)
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // 링크 설정 (여기서 쉽게 수정 가능)
    const links = {
        trainerInstagram: 'https://www.instagram.com/cye_jin',
        studioInstagram: '', // 런웨이 스튜디오 인스타그램 링크 입력
        smartplace: '', // 스마트 플레이스 링크 입력
        blog: '', // 블로그 링크 입력
        kakao: '', // 카카오톡 채널 링크 입력
        naverReservation: '' // 네이버 예약 링크 입력
    };
    
    // 트레이너 인스타그램 링크
    const trainerInstaBtn = document.getElementById('trainer-instagram-btn');
    if (trainerInstaBtn) {
        trainerInstaBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (links.trainerInstagram) {
                window.open(links.trainerInstagram, '_blank');
            }
        });
    }
    
    // 스튜디오 인스타그램 링크
    const studioInstaBtn = document.getElementById('studio-instagram-btn');
    if (studioInstaBtn) {
        studioInstaBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (links.studioInstagram) {
                window.open(links.studioInstagram, '_blank');
            } else {
                alert('런웨이 스튜디오 인스타그램 링크를 설정해주세요.');
            }
        });
    }
    
    // 문의 버튼들
    const smartplaceBtn = document.getElementById('smartplace-btn');
    if (smartplaceBtn) {
        smartplaceBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (links.smartplace) {
                window.open(links.smartplace, '_blank');
            } else {
                alert('스마트 플레이스 링크를 설정해주세요.');
            }
        });
    }
    
    const blogBtn = document.getElementById('blog-btn');
    if (blogBtn) {
        blogBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (links.blog) {
                window.open(links.blog, '_blank');
            } else {
                alert('블로그 링크를 설정해주세요.');
            }
        });
    }
    
    const kakaoBtn = document.getElementById('kakao-btn');
    if (kakaoBtn) {
        kakaoBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (links.kakao) {
                window.open(links.kakao, '_blank');
            } else {
                alert('카카오톡 채널 링크를 설정해주세요.');
            }
        });
    }
    
    // 메인 CTA - 네이버 예약
    const naverReservationBtn = document.getElementById('naver-reservation-btn');
    if (naverReservationBtn) {
        naverReservationBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (links.naverReservation) {
                window.open(links.naverReservation, '_blank');
            } else {
                alert('네이버 예약 링크를 설정해주세요.');
            }
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
