export function observerVisible(myClassObserver) {
    document.querySelectorAll(myClassObserver)
        .forEach(item => {
        let boxElement = item;
        let prevRatio = 0.0;
        function createObserverImg() {
            let observer;
            let options = {
                root: null,
                rootMargin: "0px",
                threshold: 1.0
            };
            observer = new IntersectionObserver(handleIntersect, options);
            observer.observe(boxElement);
        }
        function handleIntersect(entries) {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    this.contadorCinco();
                }
            });
        }
        createObserverImg();
    });
}
