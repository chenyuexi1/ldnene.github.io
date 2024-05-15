let lastScrollTop = 0;
const navbar = document.getElementById('nav');

window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // 向下滚动，隐藏导航栏
        navbar.style.top = '-54px';
    } else {
        // 向上滚动，显示导航栏
        navbar.style.top = '0';
    }

    lastScrollTop = scrollTop;
});
