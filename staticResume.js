document.addEventListener('DOMContentLoaded', function () {
    var toggleSkillsButton = document.getElementById('toggleSkills');
    var skillsContainer = document.getElementById('skills-container');
    var form = document.getElementById('resumeForm');
    var submissionMessage = document.getElementById('submissionMessage');
    // Ensure skillsContainer is initially hidden
    skillsContainer.style.display = 'none';
    // Toggle skills section visibility
    toggleSkillsButton.addEventListener('click', function () {
        if (skillsContainer.style.display === 'none') {
            skillsContainer.style.display = 'block';
            toggleSkillsButton.textContent = 'Hide Skills';
        }
        else {
            skillsContainer.style.display = 'none';
            toggleSkillsButton.textContent = 'Show Skills';
        }
    });
    // Handle form submission
    form.addEventListener('submit', function (e) {
        // Prevent the default form submission action
        e.preventDefault();
        // Display the submission message
        submissionMessage.style.display = 'block';
    });
});
