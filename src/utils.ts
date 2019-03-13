
export function add(a, b) {
    return a + b;
}

export const PI = 3.1415;

//Window is global object in Web Browser (only for debugging!!!!)
window["add"] = add;