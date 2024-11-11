function checkRisk() {
    const keywords = [
        "urgent", "winner", "claim prize", "bank account",
        "verify your account", "click here", "lottery", "offer expires",
        "suspicious activity", "action required"
    ];

    let emailText = document.getElementById('emailText').value;
    emailText = emailText.toLowerCase();

    let riskScore = 0;
    for (const keyword of keywords) {
        if (emailText.includes(keyword)) {
            riskScore++;
        }
    }

    const result = document.getElementById('result');
    result.innerHTML = `Risk score: ${riskScore}<br>`;

    if (riskScore >= 3) {
        result.innerHTML += "Warning! Do not interact with this email.";
    } else if (riskScore >= 2) {
        result.innerHTML += "Email appears suspicious. Proceed with caution.";
    } else {
        result.innerHTML += "Email is safe.";
    }
}
