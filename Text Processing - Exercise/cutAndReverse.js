function reverseAndCutInHalfText(text) {
    let reversedText = '';
    for (let i = text.length - 1; i >= 0; i--) {
        const char = text[i];
        reversedText += char;
    }
    const leftPart = reversedText.substring(0, reversedText.length / 2);
    const rightPart = reversedText.substring(reversedText.length / 2, reversedText.length);
    console.log(leftPart);
    console.log(rightPart);
}
reverseAndCutInHalfText('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')