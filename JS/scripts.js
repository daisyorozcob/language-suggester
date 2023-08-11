const surveyForm = document.getElementById('surveyForm');
const resultDiv = document.getElementById('result');
const languageSuggestion = document.getElementById('languageSuggestion');

surveyForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const selectedApplicationOption = document.querySelector('input[name="applicationType"]:checked');
    const selectedExperienceOption = document.querySelector('input[name="experienceLevel"]:checked');
    const selectedActivityOption = document.querySelector('input[name="favoriteActivity"]:checked');
    
    if (selectedApplicationOption && selectedExperienceOption && selectedActivityOption) {
        const applicationType = selectedApplicationOption.value;
        const experienceLevel = selectedExperienceOption.value;
        const favoriteActivity = selectedActivityOption.value;
        let suggestedLanguage = '';

        // Update the switch cases based on the new question
        switch (applicationType) {
            case 'web':
                suggestedLanguage = 'JavaScript';
                break;
            case 'mobile':
                suggestedLanguage = 'Swift';
                break;
            case 'system':
                suggestedLanguage = 'C++';
                break;
        }

        // Additional suggestions based on experience level and favorite activity
        switch (experienceLevel) {
            case 'beginner':
                suggestedLanguage = 'Python';
                break;
            case 'intermediate':
                suggestedLanguage = 'Java';
                break;
            case 'advanced':
                suggestedLanguage = 'Go';
                break;
        }

        // Further refine suggestions based on favorite activity
        switch (favoriteActivity) {
            case 'gaming':
                suggestedLanguage = 'C#';
                break;
            case 'problemSolving':
                suggestedLanguage = 'Rust';
                break;
            case 'creativity':
                suggestedLanguage = 'Ruby';
                break;
        }

        languageSuggestion.textContent = suggestedLanguage;
        resultDiv.classList.remove('hidden');
    }
});


