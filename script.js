// Load saved CV data
function loadCVData() {
  // Stub for auth - remove or implement localStorage
  const cvData = null; // auth.getCVData() - commented out as auth is not defined
  if (!cvData || Object.keys(cvData).length === 0) {
    console.log('No CV data found');
    return;
  }

  console.log('Loading CV data:', cvData);

  // Load personal info
  if (cvData.personalInfo) {
    Object.keys(cvData.personalInfo).forEach(key => {
      const input = document.querySelector(`[name="${key}"]`);
      if (input && cvData.personalInfo[key]) {
        input.value = cvData.personalInfo[key];
      }
    });
  }

  // Load summary
  if (cvData.summary) {
    const summaryInput = document.querySelector('[name="summary"]');
    if (summaryInput) summaryInput.value = cvData.summary;
  }

  // Load skills
  if (cvData.skills) {
    const skillsInput = document.querySelector('[name="skills"]');
    if (skillsInput) skillsInput.value = cvData.skills;
  }

  // Load experience
  if (cvData.experience && Array.isArray(cvData.experience) && cvData.experience.length > 0) {
    const expContainer = document.getElementById('experienceContainer');
    const firstExp = expContainer.querySelector('.experience');
    cvData.experience.forEach((exp, index) => {
      let expElement;
      if (index === 0) {
        expElement = firstExp;
      } else {
        expElement = firstExp.cloneNode(true);
        expContainer.appendChild(expElement);
      }
      if (exp.jobTitle) expElement.querySelector('[name="jobTitle[]"]').value = exp.jobTitle;
      if (exp.company) expElement.querySelector('[name="company[]"]').value = exp.company;
      if (exp.location) expElement.querySelector('[name="location[]"]').value = exp.location;
      if (exp.startDate) expElement.querySelector('[name="startDate[]"]').value = exp.startDate;
      if (exp.endDate) expElement.querySelector('[name="endDate[]"]').value = exp.endDate;
      if (exp.responsibilities) expElement.querySelector('[name="responsibilities[]"]').value = exp.responsibilities;
    });
  }

  // Load education
  if (cvData.education && Array.isArray(cvData.education) && cvData.education.length > 0) {
    const eduContainer = document.getElementById('educationContainer');
    const firstEdu = eduContainer.querySelector('.education');
    cvData.education.forEach((edu, index) => {
      let eduElement;
      if (index === 0) {
        eduElement = firstEdu;
      } else {
        eduElement = firstEdu.cloneNode(true);
        eduContainer.appendChild(eduElement);
      }
      if (edu.institution) eduElement.querySelector('[name="institution[]"]').value = edu.institution;
      if (edu.degree) eduElement.querySelector('[name="degree[]"]').value = edu.degree;
      if (edu.field) eduElement.querySelector('[name="field[]"]').value = edu.field;
      if (edu.startDate) eduElement.querySelector('[name="eduStart[]"]').value = edu.startDate;
      if (edu.endDate) eduElement.querySelector('[name="eduEnd[]"]').value = edu.endDate;
    });
  }

  // Load certifications
  if (cvData.certifications && Array.isArray(cvData.certifications) && cvData.certifications.length > 0) {
    const certContainer = document.getElementById('certificationContainer');
    const firstCert = certContainer.querySelector('.certification');
    cvData.certifications.forEach((cert, index) => {
      let certElement;
      if (index === 0) {
        certElement = firstCert;
      } else {
        certElement = firstCert.cloneNode(true);
        certContainer.appendChild(certElement);
      }
      if (cert.name) certElement.querySelector('[name="certName[]"]').value = cert.name;
      if (cert.organization) certElement.querySelector('[name="certOrg[]"]').value = cert.organization;
      if (cert.date) certElement.querySelector('[name="certDate[]"]').value = cert.date;
      if (cert.expiry) certElement.querySelector('[name="certExpiry[]"]').value = cert.expiry;
    });
  }

  // Load languages
  if (cvData.languages && Array.isArray(cvData.languages) && cvData.languages.length > 0) {
    const langContainer = document.getElementById('languageContainer');
    const firstLang = langContainer.querySelector('.language');
    cvData.languages.forEach((lang, index) => {
      let langElement;
      if (index === 0) {
        langElement = firstLang;
      } else {
        langElement = firstLang.cloneNode(true);
        langContainer.appendChild(langElement);
      }
      if (lang.language) langElement.querySelector('[name="language[]"]').value = lang.language;
      if (lang.proficiency) langElement.querySelector('[name="proficiency[]"]').value = lang.proficiency;
    });
  }

  // Load projects
  if (cvData.projects && Array.isArray(cvData.projects) && cvData.projects.length > 0) {
    const projContainer = document.getElementById('projectContainer');
    const firstProj = projContainer.querySelector('.project');
    cvData.projects.forEach((proj, index) => {
      let projElement;
      if (index === 0) {
        projElement = firstProj;
      } else {
        projElement = firstProj.cloneNode(true);
        projContainer.appendChild(projElement);
      }
      if (proj.name) projElement.querySelector('[name="projectName[]"]').value = proj.name;
      if (proj.description) projElement.querySelector('[name="projectDesc[]"]').value = proj.description;
      if (proj.technologies) projElement.querySelector('[name="projectTech[]"]').value = proj.technologies;
      if (proj.link) projElement.querySelector('[name="projectLink[]"]').value = proj.link;
    });
  }

  // Load awards
  if (cvData.awards && Array.isArray(cvData.awards) && cvData.awards.length > 0) {
    const awardContainer = document.getElementById('awardContainer');
    const firstAward = awardContainer.querySelector('.award');
    cvData.awards.forEach((award, index) => {
      let awardElement;
      if (index === 0) {
        awardElement = firstAward;
      } else {
        awardElement = firstAward.cloneNode(true);
        awardContainer.appendChild(awardElement);
      }
      if (award.name) awardElement.querySelector('[name="awardName[]"]').value = award.name;
      if (award.issuer) awardElement.querySelector('[name="awardIssuer[]"]').value = award.issuer;
      if (award.date) awardElement.querySelector('[name="awardDate[]"]').value = award.date;
    });
  }

  // Load interests
  if (cvData.interests && Array.isArray(cvData.interests) && cvData.interests.length > 0) {
    const intContainer = document.getElementById('interestContainer');
    const firstInt = intContainer.querySelector('.interest');
    cvData.interests.forEach((interest, index) => {
      let intElement;
      if (index === 0) {
        intElement = firstInt;
      } else {
        intElement = firstInt.cloneNode(true);
        intContainer.appendChild(intElement);
      }
      intElement.querySelector('[name="interest[]"]').value = interest;
    });
  }

  // Load references
  if (cvData.references && Array.isArray(cvData.references) && cvData.references.length > 0) {
    const refContainer = document.getElementById('referenceContainer');
    const firstRef = refContainer.querySelector('.reference');
    cvData.references.forEach((ref, index) => {
      let refElement;
      if (index === 0) {
        refElement = firstRef;
      } else {
        refElement = firstRef.cloneNode(true);
        refContainer.appendChild(refElement);
      }
      if (ref.name) refElement.querySelector('[name="refName[]"]').value = ref.name;
      if (ref.position) refElement.querySelector('[name="refPosition[]"]').value = ref.position;
      if (ref.company) refElement.querySelector('[name="refCompany[]"]').value = ref.company;
      if (ref.email) refElement.querySelector('[name="refEmail[]"]').value = ref.email;
      if (ref.phone) refElement.querySelector('[name="refPhone[]"]').value = ref.phone;
    });
  }
}

function addExperience() {
  const container = document.getElementById('experienceContainer');
  const newExp = container.querySelector('.experience').cloneNode(true);
  // Clear inputs
  newExp.querySelectorAll('input, textarea').forEach(el => el.value = '');
  container.appendChild(newExp);
  attachEventListeners(newExp);
  validateDates();
  updatePreview();
}

// Function to add education
function addEducation() {
  const container = document.getElementById('educationContainer');
  const newEdu = container.querySelector('.education').cloneNode(true);
  // Clear inputs
  newEdu.querySelectorAll('input').forEach(input => input.value = '');
  container.appendChild(newEdu);
  attachEventListeners(newEdu);
  validateDates();
  updatePreview();
}

// Function to add certification
function addCertification() {
  const container = document.getElementById('certificationContainer');
  const newCert = container.querySelector('.certification').cloneNode(true);
  // Clear inputs
  newCert.querySelectorAll('input').forEach(input => input.value = '');
  container.appendChild(newCert);
  attachEventListeners(newCert);
  updatePreview();
}

// Function to add language
function addLanguage() {
  const container = document.getElementById('languageContainer');
  const newLang = container.querySelector('.language').cloneNode(true);
  // Clear inputs
  newLang.querySelectorAll('input, select').forEach(el => el.value = '');
  container.appendChild(newLang);
  attachEventListeners(newLang);
  updatePreview();
}

// Function to add project
function addProject() {
  const container = document.getElementById('projectContainer');
  const newProj = container.querySelector('.project').cloneNode(true);
  // Clear inputs
  newProj.querySelectorAll('input, textarea').forEach(el => el.value = '');
  container.appendChild(newProj);
  attachEventListeners(newProj);
  updatePreview();
}

// Function to add award
function addAward() {
  const container = document.getElementById('awardContainer');
  const newAward = container.querySelector('.award').cloneNode(true);
  // Clear inputs
  newAward.querySelectorAll('input').forEach(input => input.value = '');
  container.appendChild(newAward);
  attachEventListeners(newAward);
  updatePreview();
}

// Function to add interest
function addInterest() {
  const container = document.getElementById('interestContainer');
  const newInt = container.querySelector('.interest').cloneNode(true);
  // Clear inputs
  newInt.querySelectorAll('input').forEach(input => input.value = '');
  container.appendChild(newInt);
  attachEventListeners(newInt);
  updatePreview();
}

// Function to add reference
function addReference() {
  const container = document.getElementById('referenceContainer');
  const newRef = container.querySelector('.reference').cloneNode(true);
  // Clear inputs
  newRef.querySelectorAll('input').forEach(input => input.value = '');
  container.appendChild(newRef);
  attachEventListeners(newRef);
  updatePreview();
}

// Attach event listeners to elements
function attachEventListeners(element) {
  const inputs = element.querySelectorAll('input, textarea, select');
  inputs.forEach(input => {
    input.addEventListener('input', updatePreview);
    input.addEventListener('change', updatePreview);
    input.addEventListener('input', handleValidation);
    
    if (input.type === 'month') {
      input.addEventListener('change', validateDates);
    }
  });
  
  const emails = element.querySelectorAll('input[type="email"]');
  emails.forEach(email => {
    email.addEventListener('input', validateEmail);
    email.addEventListener('blur', validateEmail);
  });
  
  const phones = element.querySelectorAll('input[data-validate="phone"]');
  phones.forEach(phone => {
    phone.addEventListener('input', validatePhone);
  });
  
  const names = element.querySelectorAll('input[data-validate="name"]');
  names.forEach(name => {
    name.addEventListener('input', validateName);
  });
  
  // Handle current job checkboxes
  const currentJobCheckboxes = element.querySelectorAll('.currentJob');
  currentJobCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      handleCurrentJobToggle(this);
    });
  });
  
  // Handle current study checkboxes
  const currentStudyCheckboxes = element.querySelectorAll('.currentStudy');
  currentStudyCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      handleCurrentStudyToggle(this);
    });
  });
}

// Global variables
let currentStep = 1;
const totalSteps = 11;

// Direct step navigation - allows clicking on step indicators
function goToStep(step) {
  const newStep = parseInt(step);
  
  if (newStep < 1 || newStep > totalSteps) return;
  
  // If going forward, validate current step
  if (newStep > currentStep) {
    const isValid = validateStep(currentStep);
    if (!isValid) {
      alert('Please fill in required fields:\n- Full Name\n- Email Address');
      return;
    }
  }
  
  currentStep = newStep;
  updateStepDisplay();
  updateProgressBar();
}

// Handle current job checkbox
function handleCurrentJobToggle(checkbox) {
  const experience = checkbox.closest('.experience');
  const endDateInput = experience.querySelector('input[name="endDate[]"]');
  if (checkbox.checked) {
    endDateInput.value = '';
    endDateInput.disabled = true;
    endDateInput.style.opacity = '0.5';
  } else {
    endDateInput.disabled = false;
    endDateInput.style.opacity = '1';
  }
  updatePreview();
}

// Handle current study checkbox
function handleCurrentStudyToggle(checkbox) {
  const education = checkbox.closest('.education');
  const endDateInput = education.querySelector('input[name="eduEnd[]"]');
  if (checkbox.checked) {
    endDateInput.value = '';
    endDateInput.disabled = true;
    endDateInput.style.opacity = '0.5';
  } else {
    endDateInput.disabled = false;
    endDateInput.style.opacity = '1';
  }
  updatePreview();
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  try {
    const form = document.getElementById('cvForm');
    if (!form) {
      console.error('Form element not found');
      return;
    }
    
    const inputs = form.querySelectorAll('input, textarea, select');
    
    inputs.forEach(input => {
      input.addEventListener('input', updatePreview);
      input.addEventListener('change', updatePreview);
      input.addEventListener('input', handleValidation);
    
    if (input.type === 'month') {
      input.addEventListener('change', validateDates);
    }
  });
  
  // Add email and phone validation
  form.querySelectorAll('input[type="email"]').forEach(email => {
    email.addEventListener('input', validateEmail);
    email.addEventListener('blur', validateEmail);
  });
  
  form.querySelectorAll('input[data-validate="phone"]').forEach(phone => {
    phone.addEventListener('input', validatePhone);
  });
  
  form.querySelectorAll('input[data-validate="name"]').forEach(name => {
    name.addEventListener('input', validateName);
  });
  
  // Add current job checkbox listeners
  form.querySelectorAll('.currentJob').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      handleCurrentJobToggle(this);
    });
  });
  
  // Add current study checkbox listeners
  form.querySelectorAll('.currentStudy').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      handleCurrentStudyToggle(this);
    });
  });
  
    updatePreview();
    validateDates();
    updateProgressBar();
    updateStepDisplay();
    
    // Setup form submission handler
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        alert('Please correct any errors in the form.');
        return;
      }
      showModal();
    });
    
    // Setup modal buttons
    const confirmYesBtn = document.getElementById('confirmYes');
    const confirmNoBtn = document.getElementById('confirmNo');
    if (confirmYesBtn) {
      confirmYesBtn.addEventListener('click', function() {
        document.getElementById('confirmationModal').style.display = 'none';
        showPrintPreview();
      });
    }
    if (confirmNoBtn) {
      confirmNoBtn.addEventListener('click', function() {
        document.getElementById('confirmationModal').style.display = 'none';
      });
    }
  } catch (error) {
    console.error('Error initializing form:', error);
  }
});

// Handle all validations
function handleValidation(e) {
  const input = e.target;
  const validateType = input.getAttribute('data-validate');
  
  if (validateType === 'phone') {
    validatePhone(e);
  } else if (validateType === 'name') {
    validateName(e);
  }
}

// Step Navigation
function changeStep(direction) {
  const newStep = currentStep + direction;
  
  if (newStep < 1 || newStep > totalSteps) return;
  
  // Validate current step before moving (only validate when going forward)
  if (direction > 0) {
    const isValid = validateStep(currentStep);
    if (!isValid) {
      alert('Please fill in required fields:\n- Full Name\n- Email Address');
      return;
    }
  }
  
  currentStep = newStep;
  updateStepDisplay();
  updateProgressBar();
}

function updateStepDisplay() {
  // Hide all steps
  document.querySelectorAll('.form-step').forEach(step => {
    step.classList.remove('active');
  });
  
  // Show current step
  document.querySelector(`.form-step[data-step="${currentStep}"]`).classList.add('active');
  
  // Update step indicators
  document.querySelectorAll('.step-indicator').forEach(indicator => {
    indicator.classList.remove('active');
  });
  document.querySelector(`.step-indicator[data-step="${currentStep}"]`).classList.add('active');
  
  // Update button visibility
  document.getElementById('prevBtn').style.display = currentStep === 1 ? 'none' : 'block';
  document.getElementById('nextBtn').style.display = currentStep === totalSteps ? 'none' : 'block';
  document.getElementById('submitBtn').style.display = currentStep === totalSteps ? 'block' : 'none';
  
  // Scroll to top
  window.scrollTo(0, 0);
}

function updateProgressBar() {
  const progress = (currentStep / totalSteps) * 100;
  document.getElementById('progressFill').style.width = progress + '%';
}

// Validation Functions
function validateStep(step) {
  const form = document.getElementById('cvForm');
  const requiredFields = form.querySelectorAll(`.form-step[data-step="${step}"] input[required], .form-step[data-step="${step}"] textarea[required]`);
  
  for (let field of requiredFields) {
    if (!field.value.trim()) {
      console.log('Invalid field:', field.name);
      return false;
    }
  }
  return true;
}

function validateEmail(e) {
  const email = e.target.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (email && !emailRegex.test(email)) {
    e.target.setCustomValidity('Please enter a valid email (e.g., name@gmail.com)');
    e.target.classList.add('error');
    showValidationMessage(e.target, '⚠ Invalid email format (e.g., name@gmail.com)');
  } else {
    e.target.setCustomValidity('');
    e.target.classList.remove('error');
    removeValidationMessage(e.target);
  }
}

function validatePhone(e) {
  const phone = e.target.value;
  const phoneRegex = /^[0-9+]*$/;
  
  if (phone && !phoneRegex.test(phone)) {
    // Remove invalid characters in real-time
    const cleaned = phone.replace(/[^0-9+]/g, '');
    e.target.value = cleaned;
    e.target.classList.add('error');
    showValidationMessage(e.target, '⚠ Numbers and + sign only');
  } else {
    e.target.classList.remove('error');
    removeValidationMessage(e.target);
  }
}

function validateName(e) {
  const name = e.target.value;
  const nameRegex = /^[a-zA-Z\s'-]*$/;
  
  if (name && !nameRegex.test(name)) {
    // Remove invalid characters in real-time
    const cleaned = name.replace(/[^a-zA-Z\s'-]/g, '');
    e.target.value = cleaned;
    e.target.classList.add('error');
    showValidationMessage(e.target, 'Only letters, spaces, hyphens, and apostrophes allowed');
  } else {
    e.target.classList.remove('error');
    removeValidationMessage(e.target);
  }
}

function showValidationMessage(element, message) {
  let errorMsg = element.parentElement.querySelector('.validation-error');
  if (!errorMsg) {
    errorMsg = document.createElement('div');
    errorMsg.className = 'validation-error';
    element.parentElement.insertBefore(errorMsg, element.nextSibling);
  }
  errorMsg.textContent = message;
}

function removeValidationMessage(element) {
  const errorMsg = element.parentElement.querySelector('.validation-error');
  if (errorMsg) {
    errorMsg.remove();
  }
}

function validateDates() {
  // Validate work experience dates
  const experiences = document.querySelectorAll('.experience');
  experiences.forEach(exp => {
    const startDate = exp.querySelector('input[name="startDate[]"]');
    const endDate = exp.querySelector('input[name="endDate[]"]');
    if (startDate && endDate && startDate.value && endDate.value) {
      if (new Date(startDate.value) > new Date(endDate.value)) {
        endDate.setCustomValidity('End date cannot be before start date');
        endDate.style.borderColor = '#dc3545';
      } else {
        endDate.setCustomValidity('');
        endDate.style.borderColor = '#ddd';
      }
    }
  });

  // Validate education dates
  const educations = document.querySelectorAll('.education');
  educations.forEach(edu => {
    const startDate = edu.querySelector('input[name="eduStart[]"]');
    const endDate = edu.querySelector('input[name="eduEnd[]"]');
    if (startDate && endDate && startDate.value && endDate.value) {
      if (new Date(startDate.value) > new Date(endDate.value)) {
        endDate.setCustomValidity('End date cannot be before start date');
        endDate.style.borderColor = '#dc3545';
      } else {
        endDate.setCustomValidity('');
        endDate.style.borderColor = '#ddd';
      }
    }
  });
}

// Modal Confirmation Helper
function showModal() {
  document.getElementById('confirmationModal').style.display = 'block';
}

// Print Preview
function showPrintPreview() {
  window.print();
}

function updatePreview() {
  try {
    const formElement = document.getElementById('cvForm');
    const previewContent = document.querySelector('.preview-a4');
    
    if (!formElement || !previewContent) {
      console.warn('Form or preview element not found');
      return;
    }
    
    const formData = new FormData(formElement);
    let cvHTML = '';
  
  // Personal Information
  const fullName = formData.get('fullName') || 'Your Name';
  const jobTitle = formData.get('jobTitle') || 'Job Title';
  const email = formData.get('email') || '';
  const phone = formData.get('phone') || '';
  const address = formData.get('address') || '';
  const city = formData.get('city') || '';
  const country = formData.get('country') || '';
  const linkedin = formData.get('linkedin') || '';
  const portfolio = formData.get('portfolio') || '';
  
  cvHTML += `
    <div class="cv-header">
      <div class="cv-name">${fullName}</div>
      <div class="cv-title">${jobTitle}</div>
      <div class="cv-contact">
        ${email ? email + ' | ' : ''}${phone ? phone + ' | ' : ''}${address ? address + ', ' : ''}${city ? city + ', ' : ''}${country}<br>
        ${linkedin ? 'LinkedIn: ' + linkedin + ' | ' : ''}${portfolio ? 'Portfolio: ' + portfolio : ''}
      </div>
    </div>
  `;
  
  // Professional Summary
  const summary = formData.get('summary');
  if (summary) {
    cvHTML += `
      <div class="cv-section">
        <h3>Professional Summary</h3>
        <p>${summary}</p>
      </div>
    `;
  }
  
  // Skills
  const skills = formData.get('skills');
  if (skills) {
    cvHTML += `
      <div class="cv-section">
        <h3>Skills</h3>
        <p>${skills}</p>
      </div>
    `;
  }
  
  // Work Experience
  const jobTitles = formData.getAll('jobTitle[]');
  const companies = formData.getAll('company[]');
  const locations = formData.getAll('location[]');
  const startDates = formData.getAll('startDate[]');
  const endDates = formData.getAll('endDate[]');
  const responsibilities = formData.getAll('responsibilities[]');
  const currentJobs = formData.getAll('currentJob[]');
  
  if (jobTitles.some(title => title.trim())) {
    cvHTML += '<div class="cv-section"><h3>Work Experience</h3>';
    jobTitles.forEach((title, i) => {
      if (title.trim()) {
        const endDate = currentJobs[i] === 'on' ? 'Present' : formatDate(endDates[i]);
        cvHTML += `
          <div class="cv-item">
            <h4>${title} at ${companies[i] || ''}</h4>
            <div class="details">${locations[i] ? locations[i] + ' | ' : ''}${formatDate(startDates[i])} - ${endDate}</div>
            <p>${responsibilities[i] || ''}</p>
          </div>
        `;
      }
    });
    cvHTML += '</div>';
  }
  
  // Education
  const institutions = formData.getAll('institution[]');
  const degrees = formData.getAll('degree[]');
  const fields = formData.getAll('field[]');
  const eduStarts = formData.getAll('eduStart[]');
  const eduEnds = formData.getAll('eduEnd[]');
  const currentStudies = formData.getAll('currentStudy[]');
  
  if (institutions.some(inst => inst.trim())) {
    cvHTML += '<div class="cv-section"><h3>Education</h3>';
    institutions.forEach((inst, i) => {
      if (inst.trim()) {
        const endDate = currentStudies[i] === 'on' ? 'Present' : formatDate(eduEnds[i]);
        cvHTML += `
          <div class="cv-item">
            <h4>${degrees[i] || ''} in ${fields[i] || ''}</h4>
            <div class="details">${inst} | ${formatDate(eduStarts[i])} - ${endDate}</div>
          </div>
        `;
      }
    });
    cvHTML += '</div>';
  }
  
  // Certifications
  const certNames = formData.getAll('certName[]');
  const certOrgs = formData.getAll('certOrg[]');
  const certDates = formData.getAll('certDate[]');
  const certExpiries = formData.getAll('certExpiry[]');
  
  if (certNames.some(name => name.trim())) {
    cvHTML += '<div class="cv-section"><h3>Certifications</h3>';
    certNames.forEach((name, i) => {
      if (name.trim()) {
        cvHTML += `
          <div class="cv-item">
            <h4>${name}</h4>
            <div class="details">${certOrgs[i] || ''} | Issued: ${formatDate(certDates[i])}${certExpiries[i] ? ' | Expires: ' + formatDate(certExpiries[i]) : ''}</div>
          </div>
        `;
      }
    });
    cvHTML += '</div>';
  }
  
  // Languages
  const languages = formData.getAll('language[]');
  const proficiencies = formData.getAll('proficiency[]');
  
  if (languages.some(lang => lang.trim())) {
    cvHTML += '<div class="cv-section"><h3>Languages</h3><ul>';
    languages.forEach((lang, i) => {
      if (lang.trim()) {
        cvHTML += `<li>${lang} - ${proficiencies[i] || ''}</li>`;
      }
    });
    cvHTML += '</ul></div>';
  }
  
  // Projects
  const projectNames = formData.getAll('projectName[]');
  const projectDescs = formData.getAll('projectDesc[]');
  const projectTechs = formData.getAll('projectTech[]');
  const projectLinks = formData.getAll('projectLink[]');
  
  if (projectNames.some(name => name.trim())) {
    cvHTML += '<div class="cv-section"><h3>Projects</h3>';
    projectNames.forEach((name, i) => {
      if (name.trim()) {
        cvHTML += `
          <div class="cv-item">
            <h4>${name}</h4>
            <p>${projectDescs[i] || ''}</p>
            <div class="details">Technologies: ${projectTechs[i] || ''}${projectLinks[i] ? ' | <a href="' + projectLinks[i] + '">Link</a>' : ''}</div>
          </div>
        `;
      }
    });
    cvHTML += '</div>';
  }
  
  // Awards
  const awardNames = formData.getAll('awardName[]');
  const awardIssuers = formData.getAll('awardIssuer[]');
  const awardDates = formData.getAll('awardDate[]');
  
  if (awardNames.some(name => name.trim())) {
    cvHTML += '<div class="cv-section"><h3>Awards & Achievements</h3>';
    awardNames.forEach((name, i) => {
      if (name.trim()) {
        cvHTML += `
          <div class="cv-item">
            <h4>${name}</h4>
            <div class="details">${awardIssuers[i] || ''} | ${formatDate(awardDates[i])}</div>
          </div>
        `;
      }
    });
    cvHTML += '</div>';
  }
  
  // Interests
  const interests = formData.getAll('interest[]');
  if (interests.some(int => int.trim())) {
    cvHTML += '<div class="cv-section"><h3>Interests</h3><p>' + interests.filter(int => int.trim()).join(', ') + '</p></div>';
  }
  
  // References
  const refNames = formData.getAll('refName[]');
  const refPositions = formData.getAll('refPosition[]');
  const refCompanies = formData.getAll('refCompany[]');
  const refEmails = formData.getAll('refEmail[]');
  const refPhones = formData.getAll('refPhone[]');
  
  if (refNames.some(name => name.trim())) {
    cvHTML += '<div class="cv-section"><h3>References</h3>';
    refNames.forEach((name, i) => {
      if (name.trim()) {
        cvHTML += `
          <div class="cv-item">
            <h4>${name}</h4>
            <div class="details">${refPositions[i] || ''} at ${refCompanies[i] || ''}</div>
            <div class="details">${refEmails[i] ? 'Email: ' + refEmails[i] : ''}${refPhones[i] ? ' | Phone: ' + refPhones[i] : ''}</div>
          </div>
        `;
      }
    });
    cvHTML += '</div>';
  }
  
    previewContent.innerHTML = cvHTML;
  } catch (error) {
    console.error('Error updating preview:', error);
  }

  // Auto-save CV data (optional enhancement)
  /*
  const cvData = {
    personalInfo: {
      fullName: formData.get('fullName') || '',
      jobTitle: formData.get('jobTitle') || '',
      email: formData.get('email') || '',
      phone: formData.get('phone') || '',
      address: formData.get('address') || '',
      city: formData.get('city') || '',
      country: formData.get('country') || '',
      linkedin: formData.get('linkedin') || '',
      portfolio: formData.get('portfolio') || ''
    },
    summary: formData.get('summary') || '',
    skills: formData.get('skills') || '',
    experience: jobTitles.map((title, i) => ({
      jobTitle: title,
      company: companies[i] || '',
      location: locations[i] || '',
      startDate: startDates[i] || '',
      endDate: endDates[i] || '',
      responsibilities: responsibilities[i] || ''
    })).filter(exp => exp.jobTitle.trim()),
    education: institutions.map((inst, i) => ({
      institution: inst,
      degree: degrees[i] || '',
      field: fields[i] || '',
      startDate: eduStarts[i] || '',
      endDate: eduEnds[i] || ''
    })).filter(edu => edu.institution.trim()),
    certifications: certNames.map((name, i) => ({
      name: name,
      organization: certOrgs[i] || '',
      date: certDates[i] || '',
      expiry: certExpiries[i] || ''
    })).filter(cert => cert.name.trim()),
    languages: languages.map((lang, i) => ({
      language: lang,
      proficiency: proficiencies[i] || ''
    })).filter(lang => lang.language.trim()),
    projects: projectNames.map((name, i) => ({
      name: name,
      description: projectDescs[i] || '',
      technologies: projectTechs[i] || '',
      link: projectLinks[i] || ''
    })).filter(proj => proj.name.trim()),
    awards: awardNames.map((name, i) => ({
      name: name,
      issuer: awardIssuers[i] || '',
      date: awardDates[i] || ''
    })).filter(award => award.name.trim()),
    interests: interests.filter(int => int.trim()),
    references: refNames.map((name, i) => ({
      name: name,
      position: refPositions[i] || '',
      company: refCompanies[i] || '',
      email: refEmails[i] || '',
      phone: refPhones[i] || ''
    })).filter(ref => ref.name.trim())
  };
  */  
}

function formatDate(dateString) {
  if (!dateString) return 'Present';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
}
