export function observer(myClassObserver, numStepes, addClass) {
    document.querySelectorAll(myClassObserver)
        .forEach(item => {
        let boxElement = item;
        let prevRatio = 0.0;
        let numSteps = numStepes;
        function createObserverImg() {
            let observer;
            let options = {
                root: null,
                rootMargin: "0px",
                threshold: buildThresholdList()
            };
            observer = new IntersectionObserver(handleIntersect, options);
            observer.observe(boxElement);
        }
        function buildThresholdList() {
            let thresholds = [];
            for (let i = 1.0; i <= numSteps; i++) {
                let ratio = i / numSteps;
                thresholds.push(ratio);
            }
            thresholds.push(0);
            return thresholds;
        }
        function handleIntersect(entries) {
            entries.forEach((entry) => {
                if (entry.intersectionRatio > 0.250) {
                    boxElement.classList.add(addClass);
                }
                prevRatio = entry.intersectionRatio;
            });
        }
        createObserverImg();
    });
}
