function toLowerCase(text) {
    return text.toLowerCase();
}

function checkRisk() {
    const keywords = [
        "urgent", "winner", "claim prize", "bank account",
        "verify your account", "click here", "lottery", "offer expires",
        "suspicious activity", "action required"
    ];

    let emailText = document.getElementById('emailText').value;
    emailText = toLowerCase(emailText);

    let riskScore = 0;
    for (const keyword of keywords) {
        if (emailText.includes(keyword)) {
            riskScore++;
        }
    }

    const result = document.getElementById('result');
    result.textContent = `Risk score: ${riskScore}\n`;
    if (riskScore >= 3) {
        result.textContent += "Warning! Do not interact with this email.";
    } else if (riskScore >= 2) {
        result.textContent += "Email appears suspicious. Proceed with caution.";
    } else {
        result.textContent += "Email is safe.";
    }
}
