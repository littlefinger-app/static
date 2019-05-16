function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function reset_recaptcha(ms) {
    await sleep(ms);
    grecaptcha.reset();
}
