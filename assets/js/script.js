var price = 6969;
var maxCap = 200;
var totalSupply = 1500000;
var availableSupply = price * maxCap;
var availablePercentage = Math.round(availableSupply / totalSupply * 100);

$(document).ready(function () {
    //abouts appearance
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        //>=, not <=
        if (scroll >= 500) {
            $(".about-icon").addClass("about-display");
            $(".about-head-text").addClass("about-display");
            $(".about-subtext").addClass("about-display");
        }
    });

    //smooth scrolling
    // select hrefs with #, but not actually just # or #carousel
    $('a[href*="#"]:not([href="#"],[href="#carousel"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

    // particlesJS.load(@dom-id, @path-json, @callback (optional));
    particlesJS.load('particles-js', 'assets/particles.json', function () {
        console.log('callback - particles.js config loaded');
    });

    // Have lazyloader start loading other assets after onload
    window.lazySizesConfig = window.lazySizesConfig || {};
    lazySizesConfig.preloadAfterLoad = true;

    // ICO details
    var icoStart = 'January 23 2018 14:00:00 UTC';
    var icoEnd = 'February 6 2018 14:00:00 UTC';

    //var icoStartSpan = document.getElementById("icoStart");
    //var icoEndSpan = document.getElementById("icoEnd");
    var priceSpan = document.getElementById("price");
    var maxCapSpan = document.getElementById("maxCap");
    var totalSupplySpan = document.getElementById("totalSupply");
    var availableSupplySpan = document.getElementById("availableSupply");
    var availablePercentageSpan = document.getElementById("availablePercentage");

    //icoStartSpan.innerHTML = icoStart;
    //icoEndSpan.innerHTML = icoEnd;
    priceSpan.innerHTML = price.toLocaleString();
    maxCapSpan.innerHTML = maxCap;
    totalSupplySpan.innerHTML = totalSupply.toLocaleString();
    availableSupplySpan.innerHTML = availableSupply.toLocaleString();
    availablePercentageSpan.innerHTML = availablePercentage;

    // Countdown clock stuff
    /*
    function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function initializeClock(id, endtime) {
        var clock = document.getElementById(id);
        clock.style.display = 'block';
        var daysSpan = clock.querySelector('.days');
        var hoursSpan = clock.querySelector('.hours');
        var minutesSpan = clock.querySelector('.minutes');
        var secondsSpan = clock.querySelector('.seconds');

        function updateClock() {
            var t = getTimeRemaining(endtime);

            daysSpan.innerHTML = t.days;
            hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
            minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
            secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
        }
        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
    }

    var schedule = [
        ['2018-01-01T00:00:00-00:00', icoStart], // leading up to ico
        [icoStart, icoEnd] // actual ico
    ];
    // iterate over each element in the schedule
    for (var i = 0; i < schedule.length; i++) {
        var startDate = schedule[i][0];
        var endDate = schedule[i][1];

        // put dates in milliseconds for easy comparisons
        var startMs = Date.parse(startDate);
        var endMs = Date.parse(endDate);
        var currentMs = Date.parse(new Date());

        // if current date is between start and end dates, display clock
        if (endMs > currentMs && currentMs >= startMs) {
            initializeClock('countdown-timer', endDate);
        }
    }
    */
});