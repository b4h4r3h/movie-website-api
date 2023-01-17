export function textDots(string, numberOfChar = 14) {
    if (typeof string === "string"){
        return `${string.slice(0,numberOfChar)} ${
            string.length > numberOfChar ? "..." : ""
        }`;
    } else {
        return string;
    }
}