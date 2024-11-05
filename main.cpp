#include <iostream>
#include <string>
#include <vector>
#include <algorithm>

void toLowerCase(std::string &text) {
    std::transform(text.begin(), text.end(), text.begin(), ::tolower);
}

// scam keywords
int main() {
    std::vector<std::string> keywords = {
 "urgent", "winner", "claim prize", "bank account", 
 "verify your account", "click here", "lottery", "offer expires",
 "suspicious activity", "action required"

 };

    // user email input
    std::string emailText;
    std::cout << "Enter email text:\n";
    std::getline(std::cin, emailText);

    toLowerCase(emailText);

    // generate risk score
    int riskScore = 0;
    for (const std::string& keyword : keywords) {
        if (emailText.find (keyword ) != std::string::npos) {
            riskScore++;
  
        }
    }

// score output
    std::cout << "Risk score: " << riskScore << "\n";
    if (riskScore >= 3) {
        std::cout << "Warning! Do not interact with this email." << "\n";

    }else if (riskScore >= 2) {
        std::cout << "Email appears suspicious. Proceed with caution." << "\n";
    }else {
        std::cout << "Email is safe." << "\n";
    }

    return 0;
}









