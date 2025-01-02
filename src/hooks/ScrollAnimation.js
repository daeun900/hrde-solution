import { useEffect } from 'react';

export const useScrollAnimation = (selector, className = 'visible', threshold = 0.1) => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(className);
                    }
                });
            },
            { threshold }
        );

        const targets = document.querySelectorAll(selector);
        targets.forEach((target) => observer.observe(target));

        return () => {
            targets.forEach((target) => observer.unobserve(target));
        };
    }, [selector, className, threshold]);
};
