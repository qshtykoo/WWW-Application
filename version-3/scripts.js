window.onload = function () {

    var snowCounter = 0;
    /*first snow*/
    let el = document.createElement("div");
    el.classList.add("snow");
    console.log("added snow number > " + snowCounter);
    el.id = "snow" + snowCounter++;
    document.body.prepend(el);
    el.innerHTML = snow;

    /*next snowfalls*/
    setInterval(function () {
        let el = document.createElement("div");
        el.classList.add("snow");
        console.log("added snow number > " + snowCounter);
        el.id = "snow" + snowCounter++;
        document.body.prepend(el);
        el.innerHTML = snow;
    }, 11900);

    setInterval(function () {
        if (snowCounter === 2) {
            console.log("removed snow number > 0");
            let snowElement = document.getElementById("snow0");
            snowElement.parentNode.removeChild(snowElement);
        } else {
            let snowElement = document.getElementById("snow" + (snowCounter - 2));
            snowElement.parentNode.removeChild(snowElement);
            console.log("removed snow number > " + (snowCounter-2));
        }
    }, 12000);

    setInterval(function () {
        document.getElementById('snow-top-layer').style.transform = 'translateY(768px)';
        document.getElementById('snow-bottom-layer').style.transform = 'translateY(768px)';
    }, 1000);
};

var isInViewport = function (elem) {
    let bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

/*snow svg*/
var snow = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1536" preserveAspectRatio="xMidYMax slice">\n' +
    '        <g fill="#fff" fill-opacity=".35" transform="translate(55 42)">\n' +
    '            <g id="snow-bottom-layer">\n' +
    '                <rect x="6" y="1009.5" width="9" height="9"></rect>\n' +
    '                <rect x="138" y="1110.5" width="9" height="9"></rect>\n' +
    '                <rect x="398" y="1055.5" width="9" height="9"></rect>\n' +
    '                <rect x="719" y="1284.5" width="9" height="9"></rect>\n' +
    '                <rect x="760" y="1155.5" width="9" height="9"></rect>\n' +
    '                <rect x="635" y="1459.5" width="9" height="9"></rect>\n' +
    '                <rect x="478" y="1335.5" width="9" height="9"></rect>\n' +
    '                <rect x="322" y="1414.5" width="9" height="9"></rect>\n' +
    '                <rect x="247" y="1234.5" width="9" height="9"></rect>\n' +
    '                <rect x="154" y="1425.5" width="9" height="9"></rect>\n' +
    '                <rect x="731" y="773.5" width="9" height="9"></rect>\n' +
    '                <rect x="599" y="874.5" width="9" height="9"></rect>\n' +
    '                <rect x="339" y="819.5" width="9" height="9"></rect>\n' +
    '                <rect x="239" y="1004.5" width="9" height="9"></rect>\n' +
    '                <rect x="113" y="863.5" width="9" height="9"></rect>\n' +
    '                <rect x="102" y="1223.5" width="9" height="9"></rect>\n' +
    '                <rect x="395" y="1155.5" width="9" height="9"></rect>\n' +
    '                <rect x="826" y="943.5" width="9" height="9"></rect>\n' +
    '                <rect x="626" y="1054.5" width="9" height="9"></rect>\n' +
    '                <rect x="887" y="1366.5" width="9" height="9"></rect>\n' +
    '                <rect x="6" y="241.5" width="9" height="9"></rect>\n' +
    '                <rect x="138" y="342.5" width="9" height="9"></rect>\n' +
    '                <rect x="398" y="287.5" width="9" height="9"></rect>\n' +
    '                <rect x="719" y="516.5" width="9" height="9"></rect>\n' +
    '                <rect x="760" y="387.5" width="9" height="9"></rect>\n' +
    '                <rect x="635" y="691.5" width="9" height="9"></rect>\n' +
    '                <rect x="478" y="567.5" width="9" height="9"></rect>\n' +
    '                <rect x="322" y="646.5" width="9" height="9"></rect>\n' +
    '                <rect x="247" y="466.5" width="9" height="9"></rect>\n' +
    '                <rect x="154" y="657.5" width="9" height="9"></rect>\n' +
    '                <rect x="731" y="5.5" width="9" height="9"></rect>\n' +
    '                <rect x="599" y="106.5" width="9" height="9"></rect>\n' +
    '                <rect x="339" y="51.5" width="9" height="9"></rect>\n' +
    '                <rect x="239" y="236.5" width="9" height="9"></rect>\n' +
    '                <rect x="113" y="95.5" width="9" height="9"></rect>\n' +
    '                <rect x="102" y="455.5" width="9" height="9"></rect>\n' +
    '                <rect x="395" y="387.5" width="9" height="9"></rect>\n' +
    '                <rect x="826" y="175.5" width="9" height="9"></rect>\n' +
    '                <rect x="626" y="286.5" width="9" height="9"></rect>\n' +
    '                <rect x="887" y="598.5" width="9" height="9"></rect>\n' +
    '            </g>\n' +
    '        </g>\n' +
    '        <g fill="#fff" fill-opacity=".6" transform="translate(65 63)">\n' +
    '            <g id="snow-top-layer">\n' +
    '                <rect x="8" y="776" width="16" height="16"></rect>\n' +
    '                <rect x="189" y="925" width="16" height="16"></rect>\n' +
    '                <rect x="548" y="844" width="16" height="16"></rect>\n' +
    '                <rect x="685" y="1115" width="16" height="16"></rect>\n' +
    '                <rect x="858" y="909" width="16" height="16"></rect>\n' +
    '                <rect x="874" y="1438" width="16" height="16" transform="rotate(180 874 1438)"></rect>\n' +
    '                <rect x="657" y="1256" width="16" height="16" transform="rotate(180 657 1256)"></rect>\n' +
    '                <rect x="443" y="1372" width="16" height="16" transform="rotate(180 443 1372)"></rect>\n' +
    '                <rect x="339" y="1107" width="16" height="16" transform="rotate(180 339 1107)"></rect>\n' +
    '                <rect x="24" y="1305" width="16" height="16" transform="rotate(180 24 1305)"></rect>\n' +
    '                <rect x="8" y="8" width="16" height="16"></rect>\n' +
    '                <rect x="189" y="157" width="16" height="16"></rect>\n' +
    '                <rect x="548" y="76" width="16" height="16"></rect>\n' +
    '                <rect x="685" y="347" width="16" height="16"></rect>\n' +
    '                <rect x="858" y="141" width="16" height="16"></rect>\n' +
    '                <rect x="874" y="670" width="16" height="16" transform="rotate(180 874 670)"></rect>\n' +
    '                <rect x="657" y="488" width="16" height="16" transform="rotate(180 657 488)"></rect>\n' +
    '                <rect x="443" y="604" width="16" height="16" transform="rotate(180 443 604)"></rect>\n' +
    '                <rect x="339" y="339" width="16" height="16" transform="rotate(180 339 339)"></rect>\n' +
    '                <rect x="24" y="537" width="16" height="16" transform="rotate(180 24 537)"></rect>\n' +
    '            </g>\n' +
    '        </g>\n' +
    '    </svg>';
