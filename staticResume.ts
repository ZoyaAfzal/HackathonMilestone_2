document.addEventListener('DOMContentLoaded', () => {
    const toggleSkillsButton = document.getElementById('toggleSkills') as HTMLButtonElement;
    const skillsContainer = document.getElementById('skills-container') as HTMLDivElement;
    const form = document.getElementById('resumeForm') as HTMLFormElement;
    const submissionMessage = document.getElementById('submissionMessage') as HTMLDivElement;

    // Ensure skillsContainer is initially hidden
    skillsContainer.style.display = 'none';

    // Toggle skills section visibility
    toggleSkillsButton.addEventListener('click', () => {
        if (skillsContainer.style.display === 'none') {
            skillsContainer.style.display = 'block';
            toggleSkillsButton.textContent = 'Hide Skills';
        } else {
            skillsContainer.style.display = 'none';
            toggleSkillsButton.textContent = 'Show Skills';
        }
    });

    
    
        // Handle form submission
        form.addEventListener('submit', (e: Event) => {
            // Prevent the default form submission action
            e.preventDefault();
          

    
            // Display the submission message
            submissionMessage.style.display = 'block';
        
    });
});






    