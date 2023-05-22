class Courses {
    // Constructor function to initialise a new Courses object
    constructor(courseName, contactWebsite) {
      // Assign the value of the 'courseName' argument to the 'courseName' property of the object
      this.courseName = courseName;
      // Assign the value of the 'contactWebsite' argument to the 'contactWebsite' property of the object
      this.contactWebsite = contactWebsite;
    }
  
    // Method to display the contact website for a course
    displayContactWebsite() {
      // Print the contact website for the course to the console, including the course name for context
      console.log(`The contact website for ${this.courseName} is ${this.contactWebsite}`);
    }
  }
  
  class Subjects extends Courses {
    // Constructor function to initialise a new Subjects object
    constructor(courseName, contactWebsite, subject1, subject2) {
      // Call the parent class's constructor function to initialise the object's 'courseName' and 'contactWebsite' properties
      super(courseName, contactWebsite);
      // Assign the value of the 'subject1' argument to the 'subject1' property of the object
      this.subject1 = subject1;
      // Assign the value of the 'subject2' argument to the 'subject2' property of the object
      this.subject2 = subject2;
    }
  
    // Method to display the name of a course
    displayCourseName() {
      // Print the course name to the console
      console.log(`The course name is ${this.courseName}`);
    }
  
    // Method to display the subjects for a course
    displaySubjects() {
      // Print the subjects for the course to the console, including the course name for context
      console.log(`The subjects for ${this.courseName} are ${this.subject1} and ${this.subject2}`);
    }
  }
  
  // Create a new Subjects object with the 'Computer Science' course name, contact website,
  // and 'Programming' and 'Data Structures' subjects
  let subject1 = new Subjects(
    'Computer Science',
    'https://www.imperial.ac.uk/study/subjects/computer-science/',
    'Programming',
    'Data Structures'
  );
  
  // Create a new Subjects object with the 'Biology' course name, contact website,
  // and 'Cell Biology' and 'Genetics' subjects
  let subject2 = new Subjects(
    'Biology',
    'https://www.imperial.ac.uk/study/courses/undergraduate/biological-sciences/',
    'Cell Biology',
    'Genetics'
  );
  
  // Create a new Subjects object with the 'Physics' course name, contact website,
  // and 'Classical Mechanics' and 'Electromagnetism' subjects
  let subject3 = new Subjects(
    'Physics',
    'https://www.imperial.ac.uk/study/courses/undergraduate/physics-bsc/',
    'Classical Mechanics',
    'Electromagnetism'
  );
  
  // Display the contact website for the 'Computer Science' course
  subject1.displayContactWebsite(); 
  
  // Display the subjects for the 'Biology' course
  subject2.displaySubjects(); // 'The subjects for Biology are Cell Biology and Genetics'

  // Display the name of the 'Physics' course
  subject3.displayCourseName(); // 'The course name is Physics'
  
  // Display the subjects for the 'Physics' course
  subject3.displaySubjects(); // 'The subjects for Physics are Classical Mechanics and Electromagnetism'

  
