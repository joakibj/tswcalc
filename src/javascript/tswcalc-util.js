function capitalise(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function blankIfNone(arg) {
    if (arg == 'None' || arg == 'none') {
        return '';
    }
    return arg;
}
