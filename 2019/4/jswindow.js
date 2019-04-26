var state = {
    isDragging: false,
    isHidden: true,
    xDiff: 0,
    yDiff: 0,
    x: 50,
    y: 50
};

// hehe: http://youmightnotneedjquery.com/
function ready(fn) {
    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

function renderWindow(w, myState) {
    if (state.isHidden) {
        w.style.display = 'none';
    } else {
        w.style.display = '';
    }

    w.style.transform = 'translate(' + myState.x + 'px, ' + myState.y + 'px)';
}

function clampX(n) {
    return Math.min(Math.max(n, 0),
                    // container width - window width
                    500 - 400);
}

function clampY(n) {
    return Math.min(Math.max(n, 0), 800);
}

function onMouseMove(e) {
    if (state.isDragging) {
        state.x = clampX(e.pageX - state.xDiff);
        state.y = clampY(e.pageY - state.yDiff);
    }

    // Update window position
    var w = document.getElementById('window');
    renderWindow(w, state);
}

function onMouseDown(e) {
    state.isDragging = true;
    state.xDiff = e.pageX - state.x;
    state.yDiff = e.pageY - state.y;
}

function onMouseUp() {
    state.isDragging = false;
}

function closeWindow() {
    state.isHidden = true;

    var w = document.getElementById('window');
    renderWindow(w, state);
}

ready(function() {
    var w = document.getElementById('window');
    renderWindow(w, state);

    var windowBar = document.querySelectorAll('.window-bar');
    windowBar[0].addEventListener('mousedown', onMouseDown);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    var closeButton = document.querySelectorAll('.window-close');
    closeButton[0].addEventListener('click', closeWindow);

    var toggleButton = document.getElementById('windowtoggle');
    toggleButton.addEventListener('click', function() {
        state.isHidden = !state.isHidden;
        renderWindow(w, state);
    });
});