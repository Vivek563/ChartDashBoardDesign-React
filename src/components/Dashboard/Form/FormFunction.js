export function showForm() {
    document.getElementById('form-show-button').style.display = "none";
    document.getElementById('profile-form').style.display = "flex";
  }
  
  export function closeForm() {
    const container = document.querySelector('.form-container');
    const inputFields = document.querySelectorAll('.form-container input[type="text"]');
  
    inputFields.forEach(input => {
      input.value = '';
    });
    container.style.display = "none";
  
    document.getElementById('form-show-button').style.display = "block";
  }
  
  export function createNewForm() {
    const unsure = document.getElementById('unsure');
    unsure.innerHTML = 'Social'
  
    const basic = document.querySelectorAll('.basic');
  
    basic.forEach(e => {
      e.style.display = 'none';
    });
  
    const social = document.querySelectorAll('.social');
  
    social.forEach(e => {
      e.style.display = 'block';
    });
  
    toggleClass();
  }
  
  export function goBack() {
    const unsure = document.getElementById('unsure');
    unsure.innerHTML = 'Contact'
  
    const social = document.querySelectorAll('.social');
  
    social.forEach(e => {
      e.style.display = 'none';
    });
  
    const basic = document.querySelectorAll('.basic');
  
    basic.forEach(e => {
      e.style.display = 'block';
    });
  
    toggleClass();
  }
  
  export function submitForm() {
    // Implement functionality to submit the form data
  }
  
  export function toggleClass() {
    const elements = document.querySelectorAll('.toggleable');
  
    elements.forEach(element => {
      element.classList.toggle('active');
    });
  
    elements.forEach(element => {
      element.classList.toggle('inactive');
    });
  }
  